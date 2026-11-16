import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService, type LoginResposta } from './auth.service.js';

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
}
