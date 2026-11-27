import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { Role } from '../auth/role.enum.js';
import { Roles } from '../auth/roles.decorator.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { ContratosService } from './contratos.service.js';
import { ContratoValidationPipe } from './dto/contrato.dto.js';
import type { ContratoDto } from './dto/contrato.dto.js';

@Controller('contratos')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ContratosController {
  constructor(private readonly service: ContratosService) {}

  @Get('indicadores')
  @Roles(Role.ADMIN_SISTEMA, Role.ADMIN_FINANCEIRO, Role.GESTOR_OBRAS)
  indicadores(
    @Query('inicio') inicio?: string,
    @Query('fim') fim?: string,
    @Query('status') status?: string,
    @Query('contratoId') contratoId?: string,
  ) {
    return this.service.indicadores(inicio, fim, status, contratoId);
  }

  @Get('gestores')
  @Roles(Role.ADMIN_SISTEMA, Role.ADMIN_FINANCEIRO)
  listarGestores() {
    return this.service.listarGestores();
  }

  @Get()
  @Roles(Role.ADMIN_SISTEMA, Role.ADMIN_FINANCEIRO, Role.GESTOR_OBRAS)
  listar(@Query('status') status?: string) {
    return this.service.listar(status);
  }

  @Post()
  @Roles(Role.ADMIN_FINANCEIRO)
  criar(@Body(new ContratoValidationPipe()) dto: ContratoDto) {
    return this.service.criar(dto);
  }

  @Get(':id/rateio')
  @Roles(Role.ADMIN_SISTEMA, Role.ADMIN_FINANCEIRO, Role.GESTOR_OBRAS)
  rateio(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Query('inicio') inicio?: string,
    @Query('fim') fim?: string,
  ) {
    return this.service.rateio(id, inicio, fim);
  }

  @Get(':id')
  @Roles(Role.ADMIN_SISTEMA, Role.ADMIN_FINANCEIRO, Role.GESTOR_OBRAS)
  obter(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.service.obter(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN_FINANCEIRO)
  atualizar(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body(new ContratoValidationPipe(true)) dto: ContratoDto,
  ) {
    return this.service.atualizar(id, dto);
  }

  @Patch(':id/encerrar')
  @Roles(Role.ADMIN_FINANCEIRO)
  encerrar(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.service.encerrar(id);
  }
}
