import {
  Controller,
  Get,
  Body,
  Param,
  ParseUUIDPipe,
  Patch,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import {
  JwtAuthGuard,
  type RequestAutenticado,
} from './jwt-auth.guard.js';
import { Role } from './role.enum.js';
import { Roles } from './roles.decorator.js';
import { RolesGuard } from './roles.guard.js';
import { AcessoService } from './acesso.service.js';

/** CAR-07 / RN15 — rotas privadas de consulta e administração de acesso. */
@Controller('auth')
@UseGuards(JwtAuthGuard)
export class AcessoController {
  constructor(private readonly acessoService: AcessoService) {}

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
  @Roles(Role.ADMIN_SISTEMA)
  @UseGuards(RolesGuard)
  listarUsuarios() {
    return this.acessoService.listarUsuarios();
  }

  @Get('usuarios/:id/historico')
  @Roles(Role.ADMIN_SISTEMA)
  @UseGuards(RolesGuard)
  historicoUsuario(@Param('id', ParseUUIDPipe) id: string) {
    return this.acessoService.historicoUsuario(id);
  }

  @Patch('usuarios/:id/papel')
  @Roles(Role.ADMIN_SISTEMA)
  @UseGuards(RolesGuard)
  alterarPapel(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: unknown,
    @Req() request: RequestAutenticado,
  ) {
    const operadorId = request.usuario?.usuarioId;
    if (!operadorId) throw new UnauthorizedException('Usuário não autenticado.');
    const papel = this.acessoService.validarPapel(
      typeof body === 'object' && body !== null && !Array.isArray(body)
        ? (body as Record<string, unknown>).papel
        : undefined,
    );
    return this.acessoService.alterarPapel(id, operadorId, papel);
  }

  @Patch('usuarios/:id/status')
  @Roles(Role.ADMIN_SISTEMA)
  @UseGuards(RolesGuard)
  alterarStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: unknown,
    @Req() request: RequestAutenticado,
  ) {
    const operadorId = request.usuario?.usuarioId;
    if (!operadorId) throw new UnauthorizedException('Usuário não autenticado.');
    const ativo = this.acessoService.validarStatus(
      typeof body === 'object' && body !== null && !Array.isArray(body)
        ? (body as Record<string, unknown>).ativo
        : undefined,
    );
    return this.acessoService.alterarStatus(id, operadorId, ativo);
  }
}
