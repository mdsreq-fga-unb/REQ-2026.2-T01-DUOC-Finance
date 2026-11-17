import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService, type LoginResposta } from './auth.service.js';
import { formatoRefreshTokenValido } from './refresh-token.util.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /** RF13 — login por e-mail/senha. Não há registro público de usuários. */
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: unknown): Promise<LoginResposta> {
    if (typeof body !== 'object' || body === null) {
      throw new BadRequestException('Informe e-mail e senha.');
    }
    const dados = body as Record<string, unknown>;
    const email = dados.email;
    const senha = dados.senha;

    if (
      typeof email !== 'string' ||
      typeof senha !== 'string' ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      email.trim().length > 254 ||
      !senha ||
      Buffer.byteLength(senha, 'utf8') > 72
    ) {
      throw new BadRequestException('Informe e-mail e senha válidos.');
    }

    return await this.authService.login(email, senha);
  }

  /** RF24 — troca senha com autenticação pela senha anterior, inclusive vencida. */
  @Post('trocar-senha')
  @HttpCode(HttpStatus.NO_CONTENT)
  async trocarSenha(@Body() body: unknown): Promise<void> {
    if (typeof body !== 'object' || body === null) {
      throw new BadRequestException('Informe e-mail, senha atual e nova senha.');
    }
    const dados = body as Record<string, unknown>;
    const { email, senhaAtual, senhaNova } = dados;
    if (
      typeof email !== 'string' ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      email.trim().length > 254 ||
      typeof senhaAtual !== 'string' ||
      !senhaAtual ||
      Buffer.byteLength(senhaAtual, 'utf8') > 72 ||
      typeof senhaNova !== 'string' ||
      senhaNova.length < 12 ||
      Buffer.byteLength(senhaNova, 'utf8') > 72
    ) {
      throw new BadRequestException('Informe credenciais válidas e uma nova senha de 12 a 72 bytes.');
    }
    await this.authService.trocarSenha(email, senhaAtual, senhaNova);
  }

  /** RN16 — renova token de acesso com rotação obrigatória do refresh token. */
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async renovar(@Body() body: unknown): Promise<LoginResposta> {
    const refreshToken =
      typeof body === 'object' && body !== null
        ? (body as Record<string, unknown>).refreshToken
        : undefined;
    if (!formatoRefreshTokenValido(refreshToken)) {
      throw new BadRequestException('Informe um refresh token válido.');
    }
    return await this.authService.renovar(refreshToken);
  }

  /** RF18 — encerra a sessão mesmo se o access token tiver expirado. */
  @Post('logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  async logout(@Body() body: unknown): Promise<void> {
    const refreshToken =
      typeof body === 'object' && body !== null
        ? (body as Record<string, unknown>).refreshToken
        : undefined;
    if (!formatoRefreshTokenValido(refreshToken)) {
      throw new BadRequestException('Informe um refresh token válido.');
    }
    await this.authService.logout(refreshToken);
  }
}
