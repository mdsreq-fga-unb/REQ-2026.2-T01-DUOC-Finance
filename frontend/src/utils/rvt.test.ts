import { describe, expect, it } from 'vitest'
import type { Rvt } from '../types/rvt'
import {
  calcularPrazoRetificacao,
  descreverAlteracoes,
  formatarPrazo,
  motivoTravaEdicao,
  ultimoParecerRejeicao,
} from './rvt'

function rvt(sobrescritas: Partial<Rvt> = {}): Rvt {
  return {
    id: 'rvt-1',
    contrato: { id: 'c-1', codigo: 'OBR-1', nome: 'Obra' },
    dataJornada: '2026-11-16',
    horasTrabalhadas: 8,
    escopoExecutado: 'Montagem de eletrocalhas no pavimento 2.',
    status: 'PENDENTE',
    evidencias: [],
    prazoRetificacao: '2026-11-24T02:59:59.999Z',
    podeRetificar: true,
    historico: [],
    createdAt: '2026-11-16T20:00:00.000Z',
    updatedAt: '2026-11-16T20:00:00.000Z',
    ...sobrescritas,
    justificativaRejeicao: sobrescritas.justificativaRejeicao ?? null,
  }
}

describe('RN02 — janela de retificação (espelho do backend)', () => {
  it('termina às 23h59 de Brasília do quinto dia útil', () => {
    // Segunda 16/11 -> segunda 23/11 (pula o fim de semana)
    expect(calcularPrazoRetificacao(new Date('2026-11-16T20:00:00Z')).toISOString())
      .toBe('2026-11-24T02:59:59.999Z')
  })
  it('usa a data de Brasília, não a UTC', () => {
    expect(calcularPrazoRetificacao(new Date('2026-11-17T02:00:00Z')).toISOString())
      .toBe('2026-11-24T02:59:59.999Z')
  })
  it('formata o prazo no horário de Brasília', () => {
    expect(formatarPrazo('2026-11-24T02:59:59.999Z')).toBe('23/11 às 23:59')
  })
})

describe('motivoTravaEdicao', () => {
  it('libera pendente dentro do prazo', () => {
    expect(motivoTravaEdicao(rvt())).toBeNull()
  })
  it('trava homologado', () => {
    expect(motivoTravaEdicao(rvt({ status: 'HOMOLOGADO', podeRetificar: false, prazoRetificacao: null })))
      .toMatch(/Homologado/)
  })
  it('trava após o prazo e informa a data', () => {
    expect(motivoTravaEdicao(rvt({ podeRetificar: false }))).toBe(
      'Prazo de retificação encerrado em 23/11 às 23:59.',
    )
  })
})

describe('ultimoParecerRejeicao', () => {
  const historico: Rvt['historico'] = [
    { id: '1', tipo: 'REJEICAO', parecer: 'Primeiro parecer antigo.', alteracoes: null, createdAt: '2026-11-17T10:00:00Z' },
    { id: '2', tipo: 'REENVIO', parecer: null, alteracoes: null, createdAt: '2026-11-17T12:00:00Z' },
    { id: '3', tipo: 'REJEICAO', parecer: 'Parecer mais recente.', alteracoes: null, createdAt: '2026-11-18T10:00:00Z' },
  ]
  it('retorna o parecer da rejeição mais recente', () => {
    expect(ultimoParecerRejeicao(rvt({ status: 'REJEITADO', historico }))).toBe('Parecer mais recente.')
  })
  it('ignora pareceres antigos de apontamento já reenviado', () => {
    expect(ultimoParecerRejeicao(rvt({ status: 'PENDENTE', historico }))).toBeNull()
  })
})

describe('descreverAlteracoes', () => {
  it('resume horas, escopo e anexo removido', () => {
    expect(descreverAlteracoes({
      horasTrabalhadas: { de: 8, para: 7.5 },
      escopoExecutado: { de: 'A', para: 'B' },
      evidenciaRemovida: { nomeOriginal: 'foto.jpg' },
    })).toEqual(['Horas: 8h → 7h30', 'Escopo: A → B', 'Anexo removido: foto.jpg'])
  })
  it('sem alterações não gera linhas', () => {
    expect(descreverAlteracoes(null)).toEqual([])
  })
})
