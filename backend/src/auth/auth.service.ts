import {
  Injectable,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { assinarJwtHs256 } from './jwt.util.js';
import { conferirSenha } from './senha.util.js';
import {
  formatoRefreshTokenValido,
  gerarRefreshToken,
  hashRefreshToken,
} from './refresh-token.util.js';

export const ACCESS_TOKEN_TTL_SECONDS = 15 * 60;
export const SESSAO_TTL_SECONDS = 7 * 24 * 60 * 60;

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

  async login(emailInformado: string, senha: string): Promise<LoginResposta> {
    const segredo = segredoJwt();
    const email = emailInformado.trim().toLowerCase();
    const usuario = await this.prisma.usuario.findUnique({ where: { email } });
    const senhaCorreta = await conferirSenha(
      senha,
      usuario?.senhaHash ?? HASH_FICTICIO,
    );

    if (!usuario || !usuario.ativo || !senhaCorreta) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const agora = new Date();
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
      sessao.usuario.senhaAtualizadaEm.getTime() > sessao.criadaEm.getTime()
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
