import {
  BadRequestException, Body, Controller, Get, Param, ParseUUIDPipe, Post, StreamableFile, UploadedFile, UseGuards, UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { Role } from '../auth/role.enum.js';
import { Roles } from '../auth/roles.decorator.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { UsuarioDaSessao } from '../auth/usuario-autenticado.decorator.js';
import type { UsuarioAutenticado } from '../auth/jwt-auth.guard.js';
import type { ArquivoRecebido } from '../rvt/evidencias/arquivo-evidencia.util.js';
import { CriarReembolsoValidationPipe, type CriarReembolsoDto } from './dto/criar-reembolso.dto.js';
import { DeliberarReembolsoValidationPipe, type DeliberarReembolsoDto } from './dto/deliberar-reembolso.dto.js';
import { LIMITE_COMPROVANTE_BYTES, ReembolsosService } from './reembolsos.service.js';

@Controller('reembolsos')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ReembolsosController {
  constructor(private readonly service: ReembolsosService) {}

  /** RF07 — multipart com campo de arquivo único chamado "comprovante". */
  @Post()
  @Roles(Role.TECNICO_CAMPO, Role.GESTOR_OBRAS, Role.ADMIN_FINANCEIRO)
  @UseInterceptors(FileInterceptor('comprovante',  {
    limits: { fileSize: LIMITE_COMPROVANTE_BYTES, files: 1 },
  }))
  criar(
    @UsuarioDaSessao() usuario: UsuarioAutenticado & { usuarioId: string },
    @Body(CriarReembolsoValidationPipe) dto: CriarReembolsoDto,
    @UploadedFile() comprovante: ArquivoRecebido | undefined,
  ) {
    if (!comprovante) throw new BadRequestException('Comprovante fiscal obrigatório.');
    return this.service.criar(usuario, dto, comprovante);
  }

  /** RF07 — consulta por titularidade obrigatória no próprio SQL. */
  @Get('meus')
  listarMeus(@UsuarioDaSessao() usuario: UsuarioAutenticado & { usuarioId: string }) {
    return this.service.listarMeus(usuario.usuarioId);
  }

  /** RF08 — lista global somente para ADMIN_FINANCEIRO. */
  @Get()
  @Roles(Role.ADMIN_FINANCEIRO)
  listarAdministrativo() {
    return this.service.listarAdministrativo();
  }

  @Get(':id')
  detalhar(
    @UsuarioDaSessao() usuario: UsuarioAutenticado & { usuarioId: string },
    @Param('id', new ParseUUIDPipe()) id: string,
  ) {
    return this.service.detalhar(usuario, id);
  }

  /** RF07/RF08 — arquivo fiscal privado: exige JWT e acesso à solicitação. */
  @Get(':id/comprovante')
  async comprovante(
    @UsuarioDaSessao() usuario: UsuarioAutenticado & { usuarioId: string },
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<StreamableFile> {
    const arquivo = await this.service.obterComprovante(usuario, id);
    return new StreamableFile(arquivo.conteudo, {
      type: arquivo.mimeType,
      disposition: `inline; filename*=UTF-8''${encodeURIComponent(arquivo.nomeOriginal)}`,
    });
  }

  /** RF08 — permite decidir uma única vez; parecer sempre obrigatório. */
  @Post(':id/deliberacao')
  @Roles(Role.ADMIN_FINANCEIRO)
  deliberar(
    @UsuarioDaSessao() usuario: UsuarioAutenticado & { usuarioId: string },
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body(DeliberarReembolsoValidationPipe) dto: DeliberarReembolsoDto,
  ) {
    return this.service.deliberar(usuario.usuarioId, id, dto);
  }
}
