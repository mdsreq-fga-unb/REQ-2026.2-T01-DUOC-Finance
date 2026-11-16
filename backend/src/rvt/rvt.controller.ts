import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  JwtAuthGuard,
  type UsuarioAutenticado as Usuario,
} from '../auth/jwt-auth.guard.js';
import { UsuarioAutenticado } from '../auth/usuario-autenticado.decorator.js';
import {
  CriarRvtValidationPipe,
  type CriarRvtDto,
} from './dto/criar-rvt.dto.js';
import type { ArquivoRecebido } from './evidencias/arquivo-evidencia.util.js';
import {
  MAX_ARQUIVOS_POR_ENVIO,
  TAMANHO_MAXIMO_EVIDENCIA_BYTES,
} from './rvt.constants.js';
import {
  RvtService,
  type ContratoObraResumo,
  type RvtResposta,
} from './rvt.service.js';

@Controller('rvt')
@UseGuards(JwtAuthGuard)
export class RvtController {
  constructor(private readonly rvtService: RvtService) {}

  /** Contratos disponíveis para vínculo no formulário (RN04) */
  @Get('contratos-ativos')
  listarContratosAtivos(): Promise<ContratoObraResumo[]> {
    return this.rvtService.listarContratosAtivos();
  }

  /** RF04 — registra o apontamento para o colaborador do token */
  @Post()
  criar(
    @UsuarioAutenticado() usuario: Usuario,
    @Body(CriarRvtValidationPipe) dto: CriarRvtDto,
  ): Promise<RvtResposta> {
    return this.rvtService.criar(usuario.colaboradorId, dto);
  }

  /** Anexa fotos/PDFs comprobatórios (multipart, campo "arquivos") */
  @Post(':id/evidencias')
  @UseInterceptors(
    // Sem "storage": o multer mantém o arquivo em memória até a validação
    FilesInterceptor('arquivos', MAX_ARQUIVOS_POR_ENVIO, {
      limits: {
        fileSize: TAMANHO_MAXIMO_EVIDENCIA_BYTES,
        files: MAX_ARQUIVOS_POR_ENVIO,
      },
    }),
  )
  anexarEvidencias(
    @UsuarioAutenticado() usuario: Usuario,
    @Param('id', new ParseUUIDPipe()) id: string,
    @UploadedFiles() arquivos: ArquivoRecebido[] | undefined,
  ): Promise<RvtResposta> {
    return this.rvtService.anexarEvidencias(
      usuario.colaboradorId,
      id,
      arquivos,
    );
  }

  /** Histórico do técnico autenticado, do mais recente para o mais antigo */
  @Get('meus-apontamentos')
  listarMeusApontamentos(
    @UsuarioAutenticado() usuario: Usuario,
  ): Promise<RvtResposta[]> {
    return this.rvtService.listarDoColaborador(usuario.colaboradorId);
  }
}
