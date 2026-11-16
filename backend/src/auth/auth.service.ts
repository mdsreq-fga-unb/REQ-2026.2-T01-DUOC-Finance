import {
  Injectable,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { assinarJwtHs256 } from './jwt.util.js';
import { conferirSenha } from './senha.util.js';

export const ACCESS_TOKEN_TTL_SECONDS = 15 * 60;
const SESSAO_TTL_MS = 7 * 24 * 60 * 60 * 1000;

// Hash bcrypt válido usado para reduzir diferenças de tempo para e-mails inexistentes.
// Não representa uma conta de verdade; o resultado da comparação é descartado.
const HASH_FICTICIO =
  '$2b$12$wSUMZyXG/nzwHmecUi5PZeO7U2ty0pd2zkJPWiFVNtDFXQGE9v2mO';

export interface LoginResposta {
  accessToken: string;
  tokenType: 'Bearer';
  expiresIn: number;
  usuario: { id: string; email: string; papel: string };
}

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async login(emailInformado: string, senha: string): Promise<LoginResposta> {
    const segredo = process.env.JWT_SECRET;
    if (!segredo || Buffer.byteLength(segredo, 'utf8') < 32) {
      throw new ServiceUnavailableException('Autenticação não configurada.');
    }

    // Os e-mails são persistidos normalizados (minúsculas e sem espaços).
    const email = emailInformado.trim().toLowerCase();
    const usuario = await this.prisma.usuario.findUnique({ where: { email } });
    const senhaCorreta = await conferirSenha(
      senha,
      usuario?.senhaHash ?? HASH_FICTICIO,
    );

    // Mensagem genérica: não revela se o e-mail existe ou se a conta está inativa.
    if (!usuario || !usuario.ativo || !senhaCorreta) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const agora = new Date();
    const sessao = await this.prisma.sessao.create({
      data: {
        usuarioId: usuario.id,
        expiraEm: new Date(agora.getTime() + SESSAO_TTL_MS),
      },
    });

    const iat = Math.floor(agora.getTime() / 1000);
    const accessToken = assinarJwtHs256(
      {
        sub: usuario.id, // ID da conta; não confundir com ID do colaborador.
        sid: sessao.id,
        papel: usuario.papel,
        iat,
        exp: iat + ACCESS_TOKEN_TTL_SECONDS,
      },
      segredo,
    );

    return {
      accessToken,
      tokenType: 'Bearer',
      expiresIn: ACCESS_TOKEN_TTL_SECONDS,
      usuario: {
        id: usuario.id,
        email: usuario.email,
        papel: usuario.papel,
      },
    };
  }
}
