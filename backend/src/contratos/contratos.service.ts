import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { StatusContratoObra, StatusReembolso, StatusRvt } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { dataIsoValida, type ContratoDto } from './dto/contrato.dto.js';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const STATUS_VALIDOS = ['ATIVO', 'SUSPENSO', 'ENCERRADO'] as const;

@Injectable()
export class ContratosService {
  constructor(private readonly prisma: PrismaService) {}

  private parseData(valor: string | null) {
    return valor ? new Date(`${valor}T00:00:00.000Z`) : null;
  }

  async listar(status?: string) {
    const filtro = status && ['ATIVO', 'SUSPENSO', 'ENCERRADO'].includes(status)
      ? { status: status as StatusContratoObra }
      : undefined;
    return this.prisma.contratoObra.findMany({
      where: filtro,
      include: { gestorResponsavel: { select: { id: true, email: true, ativo: true } } },
      orderBy: [{ status: 'asc' }, { codigo: 'asc' }],
    });
  }

  async listarGestores() {
    return this.prisma.usuario.findMany({
      where: { ativo: true, papel: 'GESTOR_OBRAS' },
      select: { id: true, email: true, ativo: true },
      orderBy: { email: 'asc' },
    });
  }

  async obter(id: string) {
    const contrato = await this.prisma.contratoObra.findUnique({
      where: { id },
      include: { gestorResponsavel: { select: { id: true, email: true, ativo: true } } },
    });
    if (!contrato) throw new NotFoundException('Contrato não encontrado.');
    return contrato;
  }

  async criar(dto: ContratoDto) {
    if (!dto.codigo || !dto.nome) throw new BadRequestException('codigo e nome são obrigatórios.');
    await this.validarGestor(dto.gestorResponsavelId ?? null);
    return this.prisma.contratoObra.create({
      data: {
        codigo: dto.codigo,
        nome: dto.nome,
        cliente: dto.cliente,
        descricao: dto.descricao,
        centroCusto: dto.centroCusto,
        valorDiariaCentavos: dto.valorDiariaCentavos,
        dataInicio: this.parseData(dto.dataInicio ?? null),
        dataFim: this.parseData(dto.dataFim ?? null),
        gestorResponsavelId: dto.gestorResponsavelId,
        status: dto.status ?? StatusContratoObra.ATIVO,
      },
      include: { gestorResponsavel: { select: { id: true, email: true, ativo: true } } },
    }).catch((erro: { code?: string }) => {
      if (erro.code === 'P2002') throw new BadRequestException('Já existe um contrato com este código.');
      throw erro;
    });
  }

  async atualizar(id: string, dto: ContratoDto) {
    const atual = await this.obter(id);
    await this.validarGestor(dto.gestorResponsavelId ?? null);
    const dataInicio = dto.dataInicio !== undefined ? this.parseData(dto.dataInicio) : atual.dataInicio;
    const dataFim = dto.dataFim !== undefined ? this.parseData(dto.dataFim) : atual.dataFim;
    if (dataInicio && dataFim && dataInicio > dataFim) {
      throw new BadRequestException('dataInicio não pode ser posterior a dataFim.');
    }
    return this.prisma.contratoObra.update({
      where: { id },
      data: {
        ...(dto.codigo ? { codigo: dto.codigo } : {}),
        ...(dto.nome ? { nome: dto.nome } : {}),
        ...(dto.cliente !== undefined ? { cliente: dto.cliente } : {}),
        ...(dto.descricao !== undefined ? { descricao: dto.descricao } : {}),
        ...(dto.centroCusto !== undefined ? { centroCusto: dto.centroCusto } : {}),
        ...(dto.valorDiariaCentavos !== undefined ? { valorDiariaCentavos: dto.valorDiariaCentavos } : {}),
        ...(dto.dataInicio !== undefined ? { dataInicio: this.parseData(dto.dataInicio) } : {}),
        ...(dto.dataFim !== undefined ? { dataFim: this.parseData(dto.dataFim) } : {}),
        ...(dto.gestorResponsavelId !== undefined ? { gestorResponsavelId: dto.gestorResponsavelId } : {}),
        ...(dto.status ? { status: dto.status } : {}),
      },
      include: { gestorResponsavel: { select: { id: true, email: true, ativo: true } } },
    }).catch((erro: { code?: string }) => {
      if (erro.code === 'P2002') throw new BadRequestException('Já existe um contrato com este código.');
      throw erro;
    });
  }

  async encerrar(id: string) {
    await this.obter(id);
    return this.prisma.contratoObra.update({
      where: { id },
      data: { status: StatusContratoObra.ENCERRADO },
      include: { gestorResponsavel: { select: { id: true, email: true, ativo: true } } },
    });
  }

  private async validarGestor(id: string | null) {
    if (!id) return;
    const gestor = await this.prisma.usuario.findUnique({
      where: { id },
      select: { id: true, papel: true, ativo: true },
    });
    if (!gestor || !gestor.ativo || gestor.papel !== 'GESTOR_OBRAS') {
      throw new BadRequestException('gestorResponsavelId deve pertencer a um Gestor de Obras ativo.');
    }
  }

  async rateio(id: string, inicio?: string, fim?: string) {
    const contrato = await this.obter(id);
    const periodo = this.periodo(inicio, fim);
    const [rvts, reembolsos] = await Promise.all([
      this.prisma.rvt.findMany({
        where: { contratoId: id, status: StatusRvt.HOMOLOGADO, dataJornada: periodo },
        select: { id: true, dataJornada: true, horasTrabalhadas: true },
      }),
      this.prisma.solicitacaoReembolso.findMany({
        where: { contratoId: id, status: StatusReembolso.APROVADO, dataDespesa: periodo },
        select: { id: true, codigo: true, categoria: true, valorAprovadoCentavos: true, valorCentavos: true, dataDespesa: true },
      }),
    ]);
    const valorDiaria = contrato.valorDiariaCentavos ?? 0;
    const diariasCentavos = rvts.length * valorDiaria;
    const reembolsosCentavos = reembolsos.reduce((total, item) =>
      total + (item.valorAprovadoCentavos ?? item.valorCentavos), 0);
    return {
      contratoId: id,
      centroCusto: contrato.centroCusto ?? null,
      periodo: { inicio: inicio ?? null, fim: fim ?? null },
      diariasHomologadas: rvts.length,
      diariasCentavos,
      reembolsosAprovados: reembolsos.length,
      reembolsosCentavos,
      totalCentavos: diariasCentavos + reembolsosCentavos,
      itens: [
        ...rvts.map((rvt) => ({ tipo: 'DIARIA', referenciaId: rvt.id, data: rvt.dataJornada, horas: Number(rvt.horasTrabalhadas), valorCentavos: valorDiaria })),
        ...reembolsos.map((reembolso) => ({ tipo: 'REEMBOLSO', referenciaId: reembolso.id, codigo: reembolso.codigo, data: reembolso.dataDespesa, categoria: reembolso.categoria, valorCentavos: reembolso.valorAprovadoCentavos ?? reembolso.valorCentavos })),
      ],
    };
  }

  async indicadores(inicio?: string, fim?: string, status?: string, contratoId?: string) {
    const periodo = this.periodo(inicio, fim);
    if (status && !STATUS_VALIDOS.includes(status as (typeof STATUS_VALIDOS)[number])) {
      throw new BadRequestException('status deve ser ATIVO, SUSPENSO ou ENCERRADO.');
    }
    if (contratoId && !UUID.test(contratoId)) {
      throw new BadRequestException('contratoId deve ser um UUID válido.');
    }
    const filtroContrato = {
      ...(status ? { status: status as StatusContratoObra } : {}),
      ...(contratoId ? { id: contratoId } : {}),
    };
    const [contratos, colaboradoresAtivos, apontamentosPendentes, reembolsosPendentes, rvtsHomologados, reembolsosAprovados] =
      await Promise.all([
        this.prisma.contratoObra.findMany({
          where: filtroContrato, orderBy: { codigo: 'asc' },
          include: { gestorResponsavel: { select: { id: true, email: true } } },
        }),
        this.prisma.usuario.count({ where: { ativo: true, papel: 'TECNICO_CAMPO' } }),
        this.prisma.rvt.count({
          where: {
            status: StatusRvt.PENDENTE,
            ...(contratoId ? { contratoId } : {}),
            ...(inicio || fim ? { dataJornada: periodo } : {}),
          },
        }),
        this.prisma.solicitacaoReembolso.count({
          where: {
            status: StatusReembolso.PENDENTE,
            ...(contratoId ? { contratoId } : {}),
            ...(inicio || fim ? { dataDespesa: periodo } : {}),
          },
        }),
        this.prisma.rvt.findMany({
          where: {
            status: StatusRvt.HOMOLOGADO,
            ...(contratoId ? { contratoId } : {}),
            ...(inicio || fim ? { dataJornada: periodo } : {}),
          },
          select: { contratoId: true },
        }),
        this.prisma.solicitacaoReembolso.findMany({
          where: {
            status: StatusReembolso.APROVADO,
            ...(contratoId ? { contratoId } : {}),
            ...(inicio || fim ? { dataDespesa: periodo } : {}),
          },
          select: { contratoId: true, valorAprovadoCentavos: true, valorCentavos: true },
        }),
      ]);
    const diariaPorContrato = new Map(contratos.map((contrato) => [contrato.id, contrato.valorDiariaCentavos ?? 0]));
    const porContrato = new Map(contratos.map((contrato) => [contrato.id, {
      contratoId: contrato.id, codigo: contrato.codigo, nome: contrato.nome, status: contrato.status,
      centroCusto: contrato.centroCusto, diariasHomologadas: 0, diariasCentavos: 0,
      reembolsosAprovados: 0, reembolsosCentavos: 0, totalCentavos: 0,
    }]));
    rvtsHomologados.forEach((rvt) => {
      const item = porContrato.get(rvt.contratoId);
      if (item) {
        item.diariasHomologadas += 1;
        item.diariasCentavos += diariaPorContrato.get(rvt.contratoId) ?? 0;
      }
    });
    reembolsosAprovados.forEach((reembolso) => {
      const item = porContrato.get(reembolso.contratoId);
      if (item) {
        item.reembolsosAprovados += 1;
        item.reembolsosCentavos += reembolso.valorAprovadoCentavos ?? reembolso.valorCentavos;
      }
    });
    const contratosIndicadores = [...porContrato.values()].map((item) => ({ ...item, totalCentavos: item.diariasCentavos + item.reembolsosCentavos }));
    return {
      periodo: { inicio: inicio ?? null, fim: fim ?? null },
      colaboradoresAtivos,
      apontamentosPendentes,
      reembolsosPendentes,
      obrasEmAndamento: contratos.filter((contrato) => contrato.status === StatusContratoObra.ATIVO).length,
      custosTotalCentavos: contratosIndicadores.reduce((total, item) => total + item.totalCentavos, 0),
      contratos: contratosIndicadores,
    };
  }

  private periodo(inicio?: string, fim?: string) {
    if (inicio) this.validarPeriodo(inicio);
    if (fim) this.validarPeriodo(fim);
    if (inicio && fim && inicio > fim) throw new BadRequestException('inicio não pode ser posterior a fim.');
    return {
      ...(inicio ? { gte: new Date(`${inicio}T00:00:00.000Z`) } : {}),
      ...(fim ? { lte: new Date(`${fim}T23:59:59.999Z`) } : {}),
    };
  }

  private validarPeriodo(valor: string) {
    if (!dataIsoValida(valor)) {
      throw new BadRequestException('Período deve usar o formato AAAA-MM-DD.');
    }
  }
}
