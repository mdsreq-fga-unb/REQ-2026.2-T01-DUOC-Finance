import { describe, expect, it } from 'vitest'
import { PAPEIS, PERMISSOES, papelValido, possuiPapel } from './permissoes'

describe('CAR-07 / RN15 — matriz de autorização no frontend', () => {
  it('contem exatamente os quatro papeis canonicos', () => {
    expect(PAPEIS).toEqual([
      'ADMIN_FINANCEIRO', 'GESTOR_OPERACIONAL', 'TECNICO_CAMPO', 'AUDITOR_EXTERNO',
    ])
  })
  it('rejeita papel desconhecido', () => {
    expect(papelValido('ADMIN')).toBe(false)
    expect(papelValido(undefined)).toBe(false)
  })
  it('somente admin acessa cadastro e fechamento financeiro', () => {
    expect(possuiPapel('ADMIN_FINANCEIRO', PERMISSOES.colaboradores)).toBe(true)
    expect(possuiPapel('GESTOR_OPERACIONAL', PERMISSOES.colaboradores)).toBe(false)
    expect(possuiPapel('AUDITOR_EXTERNO', PERMISSOES.fechamento)).toBe(false)
  })
  it('apenas tecnico pode criar novo RVT', () => {
    expect(possuiPapel('TECNICO_CAMPO', PERMISSOES.novoRvt)).toBe(true)
    expect(possuiPapel('ADMIN_FINANCEIRO', PERMISSOES.novoRvt)).toBe(false)
  })
  it('historico fica limitado ao tecnico e gestor operacional', () => {
    expect(possuiPapel('GESTOR_OPERACIONAL', PERMISSOES.historicoRvt)).toBe(true)
    expect(possuiPapel('TECNICO_CAMPO', PERMISSOES.historicoRvt)).toBe(true)
    expect(possuiPapel('AUDITOR_EXTERNO', PERMISSOES.historicoRvt)).toBe(false)
  })
  it('sem usuario nao existe permissao', () => {
    expect(possuiPapel(null, PERMISSOES.dashboard)).toBe(false)
    expect(possuiPapel(undefined, PERMISSOES.colaboradores)).toBe(false)
  })
})
