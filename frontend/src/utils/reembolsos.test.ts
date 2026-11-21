import { describe, expect, it } from 'vitest'
import { filtrarReembolsos, type FiltrosReembolso, type ReembolsoListavel } from './reembolsos'

const exemplos: ReembolsoListavel[] = [
  {
    id: '1', codigo: 'DES-0086', categoria: 'Alimentação', descricao: 'Lanche em campo',
    dataDespesa: '2026-10-09', valorCentavos: 18590, status: 'PENDENTE',
    contrato: { id: 'aurora', codigo: 'CT-2026-001', nome: 'Aurora' }, parecer: null,
  },
  {
    id: '2', codigo: 'DES-0082', categoria: 'Transporte', descricao: 'Deslocamento',
    dataDespesa: '2026-10-05', valorCentavos: 8000, status: 'APROVADO',
    contrato: { id: 'aurora', codigo: 'CT-2026-001', nome: 'Aurora' }, parecer: 'Aprovado',
  },
  {
    id: '3', codigo: 'DES-0079', categoria: 'Materiais', descricao: 'Materiais emergenciais',
    dataDespesa: '2026-10-02', valorCentavos: 4200, status: 'REJEITADO',
    contrato: { id: 'horizonte', codigo: 'CT-2026-002', nome: 'Horizonte' },
    parecer: 'Comprovante ilegível',
  },
  {
    id: '4', codigo: 'DES-0090', categoria: 'Hospedagem', descricao: 'Pernoite',
    dataDespesa: '2026-11-01', valorCentavos: 25000, status: 'PENDENTE',
    contrato: { id: 'horizonte', codigo: 'CT-2026-002', nome: 'Horizonte' }, parecer: null,
  },
]

const nenhumFiltro: FiltrosReembolso = { contratoId: '', periodo: '', status: 'TODOS' }
const codigos = (lista: ReembolsoListavel[]) => lista.map((item) => item.codigo)

describe('RF07 / CAR-04 — filtros da listagem demonstrativa', () => {
  it('mostra todos em ordem decrescente de data', () => {
    expect(codigos(filtrarReembolsos(exemplos, nenhumFiltro))).toEqual([
      'DES-0090', 'DES-0086', 'DES-0082', 'DES-0079',
    ])
  })

  it('filtra exclusivamente pelo contrato selecionado', () => {
    const lista = filtrarReembolsos(exemplos, { ...nenhumFiltro, contratoId: 'aurora' })
    expect(codigos(lista)).toEqual(['DES-0086', 'DES-0082'])
  })

  it('filtra exclusivamente pelo período selecionado', () => {
    const lista = filtrarReembolsos(exemplos, { ...nenhumFiltro, periodo: '2026-11' })
    expect(codigos(lista)).toEqual(['DES-0090'])
  })

  it('filtra exclusivamente pelo status selecionado', () => {
    const lista = filtrarReembolsos(exemplos, { ...nenhumFiltro, status: 'REJEITADO' })
    expect(codigos(lista)).toEqual(['DES-0079'])
  })

  it('combina contrato, período e status', () => {
    const lista = filtrarReembolsos(exemplos, {
      contratoId: 'horizonte', periodo: '2026-11', status: 'PENDENTE',
    })
    expect(codigos(lista)).toEqual(['DES-0090'])
  })

  it('retorna vazio quando não há correspondências', () => {
    const lista = filtrarReembolsos(exemplos, {
      contratoId: 'horizonte', periodo: '2026-10', status: 'PENDENTE',
    })
    expect(lista).toEqual([])
  })

  it('não modifica a ordem dos registros de origem', () => {
    const antes = codigos(exemplos)
    filtrarReembolsos(exemplos, nenhumFiltro)
    expect(codigos(exemplos)).toEqual(antes)
  })
})
