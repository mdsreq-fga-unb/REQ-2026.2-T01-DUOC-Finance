import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
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
import { LIMITE_COMPROVANTE_BYTES, ReembolsosService } from './reembolsos.service.js';

@Controller('reembolsos')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ReembolsosController {
  constructor(private readonly service: ReembolsosService) {}

  /** RF07 — multipart com campo de arquivo único chamado "comprovante". */
  @Post()
  @Roles(Role.TECNICO_CAMPO, Role.GESTOR_OPERACIONAL, Role.ADMIN_FINANCEIRO)
  @UseInterceptors(FileInterceptor('comprovante',  {
    limits: { fileSize: LIMITE_COMPROVANTE_BYTES, files: 1 },
  }))

criar(
  @UsuarioDaSessao() usuario: UsuarioAutenticado & { usuarioId: string },
  @Body(CriarReembolsoValidationPipe) dto: CriarReembolsoDto,
  @UploadedFile() comprovante: ArquivoRecebido | undefined,
) {
  // RF07 — impede submissão sem comprovante fiscal.
  if (!comprovante) {
    throw new BadRequestException(
      'Comprovante fiscal obrigatório.',
    );
  }

  return this.service.criar(usuario, dto, comprovante);
}

}
