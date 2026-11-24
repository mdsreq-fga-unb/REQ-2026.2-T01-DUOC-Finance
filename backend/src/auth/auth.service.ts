import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { assinarJwtHs256 } from './jwt.util.js';
import { conferirSenha, gerarHashSenha } from './senha.util.js';
import { senhaExpirada } from './politica-senha.util.js';
import {
  formatoRefreshTokenValido,
  gerarRefreshToken,
  hashRefreshToken,
} from './refresh-token.util.js';

export const ACCESS_TOKEN_TTL_SECONDS = 15 * 60;
export const SESSAO_TTL_SECONDS = 7 * 24 * 60 * 60;
export const MAX_TENTATIVAS_LOGIN = 5;
export const BLOQUEIO_LOGIN_MINUTOS = 15;

// Hash bcrypt válido usado para reduzir diferenças de tempo para e-mails inexistentes.
// Não representa uma conta de verdade; o resultado da comparação é descartado.
const HASH_FICTICIO =
  '$2b$12$wSUMZyXG/nzwHmecUi5PZeO7U2ty0pd2zkJPWiFVNtDFXQGE9v2mO';

type UsuarioResposta = { id: string; email: string; papel: string };

export interface LoginResposta {
  accessToken: string;
  refreshToken: string;
  tokenType: 'Bearer';
  expiresIn: number;
  refreshExpiresIn: number;
  usuario: UsuarioResposta;
}

function segredoJwt(): string {
  const segredo = process.env.JWT_SECRET;
  if (!segredo || Buffer.byteLength(segredo, 'utf8') < 32) {
    throw new ServiceUnavailableException('Autenticação não configurada.');
  }
  return segredo;
}

function emitirResposta(
  usuario: UsuarioResposta,
  sessaoId: string,
  refreshToken: string,
  segredo: string,
  agora: Date,
  sessaoExpiraEm: Date,
): LoginResposta {
  const iat = Math.floor(agora.getTime() / 1000);
  const accessToken = assinarJwtHs256(
    {
      sub: usuario.id, // ID de usuário, não ID de colaborador (CAR-07/RN15).
      sid: sessaoId,
      papel: usuario.papel,
      iat,
      exp: iat + ACCESS_TOKEN_TTL_SECONDS,
    },
    segredo,
  );
  return {
    accessToken,
    refreshToken,
    tokenType: 'Bearer',
    expiresIn: ACCESS_TOKEN_TTL_SECONDS,
    refreshExpiresIn: Math.max(0, Math.floor((sessaoExpiraEm.getTime() - agora.getTime()) / 1000)),
    // Nunca devolva diretamente o registro Prisma: ele inclui senhaHash.
    usuario: {
      id: usuario.id,
      email: usuario.email,
      papel: usuario.papel,
    },
  };
}

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * RF23 — uma única instrução SQL incrementa o contador e ativa o bloqueio.
   * O UPDATE é atômico no PostgreSQL: cinco requisições simultâneas não perdem
   * incrementos. Tentativas durante o bloqueio não prolongam os 15 minutos.
   */
  private async registrarFalhaLogin(usuarioId: string): Promise<void> {
    const agora = new Date();
    const bloqueadoAte = new Date(
      agora.getTime() + BLOQUEIO_LOGIN_MINUTOS * 60 * 1000,
    );
    await this.prisma.$executeRaw`
      UPDATE "usuarios"
      SET "tentativas_falhas" =
        CASE
          WHEN "bloqueado_ate" IS NOT NULL AND "bloqueado_ate" <= ${agora}::timestamp
            THEN 1
          ELSE "tentativas_falhas" + 1
        END,
        "bloqueado_ate" =
          CASE
            WHEN (
              CASE
                WHEN "bloqueado_ate" IS NOT NULL AND "bloqueado_ate" <= ${agora}::timestamp
                  THEN 1
                ELSE "tentativas_falhas" + 1
              END
            ) >= ${MAX_TENTATIVAS_LOGIN}
              THEN ${bloqueadoAte}::timestamp
            ELSE NULL
          END
      WHERE "id" = ${usuarioId}
        AND "ativo" = TRUE
        AND ("bloqueado_ate" IS NULL OR "bloqueado_ate" <= ${agora}::timestamp)
    `;
  }

  async login(emailInformado: string, senha: string): Promise<LoginResposta> {
    const segredo = segredoJwt();
    const email = emailInformado.trim().toLowerCase();
    const usuario = await this.prisma.usuario.findUnique({ where: { email } });
    // Sempre verifica bcrypt, inclusive para contas desconhecidas ou bloqueadas.
    // A mensagem HTTP é genérica para não confirmar a existência de uma conta.
    const senhaCorreta = await conferirSenha(
      senha,
      usuario?.senhaHash ?? HASH_FICTICIO,
    );
    const agora = new Date();
    const estaBloqueado = !!usuario?.bloqueadoAte && usuario.bloqueadoAte > agora;

    if (!usuario || !usuario.ativo || !senhaCorreta || estaBloqueado) {
      if (usuario?.ativo && !senhaCorreta && !estaBloqueado) {
        await this.registrarFalhaLogin(usuario.id);
      }
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    // RF24 — só revela a necessidade de renovação após confirmar a senha.
    // Não emite JWT nem sessão para senhas vencidas.
    if (senhaExpirada(usuario.senhaAtualizadaEm, agora)) {
      throw new ForbiddenException('Senha expirada. Atualize sua senha.');
    }

    // O reset usa condição no banco para que um login correto concorrente não
    // consiga abrir uma sessão após a quinta falha registrar o bloqueio.
    const reset = await this.prisma.usuario.updateMany({
      where: {
        id: usuario.id,
        ativo: true,
        OR: [{ bloqueadoAte: null }, { bloqueadoAte: { lte: agora } }],
      },
      data: { tentativasFalhas: 0, bloqueadoAte: null },
    });
    if (reset.count !== 1) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const refreshToken = gerarRefreshToken();
    const expiraEm = new Date(agora.getTime() + SESSAO_TTL_SECONDS * 1000);
    const sessao = await this.prisma.sessao.create({
      data: {
        usuarioId: usuario.id,
        expiraEm,
        refreshTokenHash: hashRefreshToken(refreshToken),
      },
    });

    return emitirResposta(usuario, sessao.id, refreshToken, segredo, agora, expiraEm);
  }

  /** RN16 — troca o refresh token de forma atômica; o anterior deixa de funcionar. */
  async renovar(refreshTokenAnterior: string): Promise<LoginResposta> {
    const segredo = segredoJwt();
    if (!formatoRefreshTokenValido(refreshTokenAnterior)) {
      throw new UnauthorizedException('Sessão inválida ou expirada.');
    }

    const hashAnterior = hashRefreshToken(refreshTokenAnterior);
    const sessao = await this.prisma.sessao.findUnique({
      where: { refreshTokenHash: hashAnterior },
      include: { usuario: true },
    });
    const agora = new Date();
    if (
      !sessao ||
      sessao.revogadaEm !== null ||
      sessao.expiraEm <= agora ||
      !sessao.usuario.ativo ||
      sessao.usuario.senhaAtualizadaEm.getTime() > sessao.criadaEm.getTime() ||
      senhaExpirada(sessao.usuario.senhaAtualizadaEm, agora)
    ) {
      throw new UnauthorizedException('Sessão inválida ou expirada.');
    }

    const proximoRefreshToken = gerarRefreshToken();
    const alteracao = await this.prisma.sessao.updateMany({
      where: {
        id: sessao.id,
        refreshTokenHash: hashAnterior,
        revogadaEm: null,
        expiraEm: { gt: agora },
      },
      data: { refreshTokenHash: hashRefreshToken(proximoRefreshToken) },
    });
    if (alteracao.count !== 1) {
      // Em uma corrida de renovação, apenas a primeira requisição vence.
      throw new UnauthorizedException('Sessão inválida ou expirada.');
    }

    return emitirResposta(
      sessao.usuario,
      sessao.id,
      proximoRefreshToken,
      segredo,
      agora,
      sessao.expiraEm,
    );
  }

  /**
   * RF24 — permite trocar senha vencida mediante prova da senha atual.
   * Revoga TODAS as sessões na mesma transação que altera o hash.
   * A conta precisa autenticar novamente após a troca.
   */
  async trocarSenha(
    emailInformado: string,
    senhaAtual: string,
    senhaNova: string,
  ): Promise<void> {
    if (senhaNova.length < 12 || Buffer.byteLength(senhaNova, 'utf8') > 72) {
      throw new BadRequestException('A nova senha deve ter ao menos 12 caracteres e até 72 bytes.');
    }

    const email = emailInformado.trim().toLowerCase();
    const usuario = await this.prisma.usuario.findUnique({ where: { email } });
    // Mesmo para contas inexistentes, realiza comparação bcrypt.
    const senhaCorreta = await conferirSenha(
      senhaAtual,
      usuario?.senhaHash ?? HASH_FICTICIO,
    );
    const agora = new Date();
    const estaBloqueado = !!usuario?.bloqueadoAte && usuario.bloqueadoAte > agora;
    if (!usuario || !usuario.ativo || !senhaCorreta || estaBloqueado) {
      if (usuario?.ativo && !senhaCorreta && !estaBloqueado) {
        await this.registrarFalhaLogin(usuario.id);
      }
      throw new UnauthorizedException('Credenciais inválidas.');
    }
    if (await conferirSenha(senhaNova, usuario.senhaHash)) {
      throw new BadRequestException('A nova senha deve ser diferente da atual.');
    }

    const novoHash = await gerarHashSenha(senhaNova);
    // Transação garante revogação de sessões e troca de senha como um único ato.
    await this.prisma.$transaction(async (tx) => {
      const alteracao = await tx.usuario.updateMany({
        where: {
          id: usuario.id,
          ativo: true,
          senhaHash: usuario.senhaHash, // proteção contra atualização concorrente
          OR: [{ bloqueadoAte: null }, { bloqueadoAte: { lte: agora } }],
        },
        data: {
          senhaHash: novoHash,
          senhaAtualizadaEm: agora,
          tentativasFalhas: 0,
          bloqueadoAte: null,
        },
      });
      if (alteracao.count !== 1) {
        throw new UnauthorizedException('Credenciais inválidas.');
      }
      await tx.sessao.updateMany({
        where: { usuarioId: usuario.id, revogadaEm: null },
        data: { revogadaEm: agora, refreshTokenHash: null },
      });
    });
  }

  /** RF18 — permite logout mesmo quando o access token já expirou. */
  async logout(refreshToken: string): Promise<void> {
    if (!formatoRefreshTokenValido(refreshToken)) return;
    await this.prisma.sessao.updateMany({
      where: { refreshTokenHash: hashRefreshToken(refreshToken), revogadaEm: null },
      data: { revogadaEm: new Date(), refreshTokenHash: null },
    });
    // Resposta 204 também para token inexistente, sem revelar dados de sessão.
  }
}
