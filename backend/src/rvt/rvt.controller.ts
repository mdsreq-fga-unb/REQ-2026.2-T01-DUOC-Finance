import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  StreamableFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  JwtAuthGuard,
  type UsuarioAutenticado as Usuario,
} from '../auth/jwt-auth.guard.js';
import { Role } from '../auth/role.enum.js';
import { Roles } from '../auth/roles.decorator.js';
import { RolesGuard } from '../auth/roles.guard.js';
import {
  UsuarioAutenticado,
  UsuarioDaSessao,
} from '../auth/usuario-autenticado.decorator.js';
import {
  CriarRvtValidationPipe,
  type CriarRvtDto,
} from './dto/criar-rvt.dto.js';
import {
  DeliberarRvtValidationPipe,
  type DeliberarRvtDto,
} from './dto/deliberar-rvt.dto.js';
import {
  RetificarRvtValidationPipe,
  type RetificarRvtDto,
} from './dto/retificar-rvt.dto.js';
import type { ArquivoRecebido } from './evidencias/arquivo-evidencia.util.js';
import {
  MAX_ARQUIVOS_POR_ENVIO,
  TAMANHO_MAXIMO_EVIDENCIA_BYTES,
} from './rvt.constants.js';
import {
  RvtService,
  type ContratoObraResumo,
  type RvtGestorResposta,
  type RvtResposta,
} from './rvt.service.js';

@Controller('rvt')
@UseGuards(JwtAuthGuard, RolesGuard)
export class RvtController {
  constructor(private readonly rvtService: RvtService) {}

  /** Contratos disponíveis para vínculo no formulário (RN04) */
  @Get('contratos-ativos')
  @Roles(Role.TECNICO_CAMPO)
  listarContratosAtivos(): Promise<ContratoObraResumo[]> {
    return this.rvtService.listarContratosAtivos();
  }

  /** RF04 — registra o apontamento para o colaborador do token */
  @Post()
  @Roles(Role.TECNICO_CAMPO)
  criar(
    @UsuarioAutenticado() usuario: Usuario,
    @Body(CriarRvtValidationPipe) dto: CriarRvtDto,
  ): Promise<RvtResposta> {
    return this.rvtService.criar(usuario.colaboradorId, dto, usuario.usuarioId);
  }

  /**
   * RF35 — retifica horas/escopo de apontamento pendente, ou reenvia um
   * rejeitado, dentro da janela de cinco dias úteis (RN02).
   */
  @Patch(':id')
  retificar(
    @UsuarioAutenticado() usuario: Usuario,
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body(RetificarRvtValidationPipe) dto: RetificarRvtDto,
  ): Promise<RvtResposta> {
    return this.rvtService.retificar(
      { colaboradorId: usuario.colaboradorId, usuarioId: usuario.usuarioId },
      id,
      dto,
    );
  }

  /** Visualiza o arquivo de uma evidência (autor ou gestor do contrato) */
  @Get(':id/evidencias/:evidenciaId')
  async visualizarEvidencia(
    @UsuarioDaSessao() usuario: Usuario & { usuarioId: string },
    @Param('id', new ParseUUIDPipe()) id: string,
    @Param('evidenciaId', new ParseUUIDPipe()) evidenciaId: string,
  ): Promise<StreamableFile> {
    const arquivo = await this.rvtService.obterArquivoEvidencia(
      usuario,
      id,
      evidenciaId,
    );
    return new StreamableFile(arquivo.conteudo, {
      type: arquivo.mimeType,
      disposition: `inline; filename*=UTF-8''${encodeURIComponent(arquivo.nomeOriginal)}`,
    });
  }

  /** RF35 — remove um anexo enquanto o apontamento é retificável */
  @Delete(':id/evidencias/:evidenciaId')
  removerEvidencia(
    @UsuarioAutenticado() usuario: Usuario,
    @Param('id', new ParseUUIDPipe()) id: string,
    @Param('evidenciaId', new ParseUUIDPipe()) evidenciaId: string,
  ): Promise<RvtResposta> {
    return this.rvtService.removerEvidencia(
      { colaboradorId: usuario.colaboradorId, usuarioId: usuario.usuarioId },
      id,
      evidenciaId,
    );
  }

  /** RF32 — fila de homologação dos contratos sob responsabilidade do gestor */
  @Get('pendentes-homologacao')
  @Roles(Role.GESTOR_OBRAS)
  @UseGuards(RolesGuard)
  listarPendentesHomologacao(
    @UsuarioDaSessao() usuario: Usuario & { usuarioId: string },
  ): Promise<RvtGestorResposta[]> {
    return this.rvtService.listarPendentesDoGestor(usuario.usuarioId);
  }

  /** RF32 — homologa ou rejeita (parecer obrigatório na rejeição, RN30) */
  @Post(':id/deliberacao')
  @Roles(Role.GESTOR_OBRAS)
  @UseGuards(RolesGuard)
  deliberar(
    @UsuarioDaSessao() usuario: Usuario & { usuarioId: string },
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body(DeliberarRvtValidationPipe) dto: DeliberarRvtDto,
  ): Promise<RvtGestorResposta> {
    return this.rvtService.deliberar(
      {
        usuarioId: usuario.usuarioId,
        colaboradorId: usuario.colaboradorId || undefined,
      },
      id,
      dto,
    );
  }

  /** Anexa fotos/PDFs comprobatórios (multipart, campo "arquivos") */
  @Post(':id/evidencias')
  @Roles(Role.TECNICO_CAMPO)
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
  @Roles(Role.TECNICO_CAMPO)
  listarMeusApontamentos(
    @UsuarioAutenticado() usuario: Usuario,
  ): Promise<RvtResposta[]> {
    return this.rvtService.listarDoColaborador(usuario.colaboradorId);
  }
}
