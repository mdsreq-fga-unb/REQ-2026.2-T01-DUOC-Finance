import {
  Controller,
  Get,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import {
  JwtAuthGuard,
  type RequestAutenticado,
} from './jwt-auth.guard.js';
import { Role } from './role.enum.js';
import { Roles } from './roles.decorator.js';
import { RolesGuard } from './roles.guard.js';

/** CAR-07 / RN15 — rotas privadas de consulta e administração de acesso. */
@Controller('auth')
@UseGuards(JwtAuthGuard)
export class AcessoController {
  constructor(private readonly prisma: PrismaService) {}

  /** RN16 — permite verificar se a sessão permanece válida após o logout. */
  @Get('me')
  consultarSessao(@Req() request: RequestAutenticado) {
    const usuario = request.usuario;
    if (!usuario?.usuarioId || !usuario.papel) {
      throw new UnauthorizedException('Sessão inválida.');
    }
    return { id: usuario.usuarioId, papel: usuario.papel };
  }

  /** RF14 / RN15 — leitura limitada de contas, exclusiva da administração. */
  @Get('usuarios')
  @Roles(Role.ADMIN_FINANCEIRO)
  @UseGuards(RolesGuard)
  listarUsuarios() {
    return this.prisma.usuario.findMany({
      select: { id: true, email: true, papel: true, ativo: true },
      orderBy: { email: 'asc' },
      take: 50,
    });
  }
}
