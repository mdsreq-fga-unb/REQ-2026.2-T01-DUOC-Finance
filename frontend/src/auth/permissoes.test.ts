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
  it('tecnico e admin podem criar novo RVT; auditor nao', () => {
    expect(possuiPapel('TECNICO_CAMPO', PERMISSOES.novoRvt)).toBe(true)
    expect(possuiPapel('ADMIN_FINANCEIRO', PERMISSOES.novoRvt)).toBe(true)
    expect(possuiPapel('AUDITOR_EXTERNO', PERMISSOES.novoRvt)).toBe(false)
  })
  it('historico fica disponivel para tecnico, gestor operacional e admin', () => {
    expect(possuiPapel('GESTOR_OPERACIONAL', PERMISSOES.historicoRvt)).toBe(true)
    expect(possuiPapel('TECNICO_CAMPO', PERMISSOES.historicoRvt)).toBe(true)
    expect(possuiPapel('ADMIN_FINANCEIRO', PERMISSOES.historicoRvt)).toBe(true)
    expect(possuiPapel('AUDITOR_EXTERNO', PERMISSOES.historicoRvt)).toBe(false)
  })
  it('somente o gestor operacional homologa apontamentos (RF32 / RN16)', () => {
    expect(possuiPapel('GESTOR_OPERACIONAL', PERMISSOES.homologacaoRvt)).toBe(true)
    expect(possuiPapel('TECNICO_CAMPO', PERMISSOES.homologacaoRvt)).toBe(false)
    expect(possuiPapel('ADMIN_FINANCEIRO', PERMISSOES.homologacaoRvt)).toBe(false)
    expect(possuiPapel('AUDITOR_EXTERNO', PERMISSOES.homologacaoRvt)).toBe(false)
  })
  it('retificacao segue quem pode criar RVT (RF35)', () => {
    expect(PERMISSOES.retificarRvt).toEqual(PERMISSOES.novoRvt)
  })
  it('sem usuario nao existe permissao', () => {
    expect(possuiPapel(null, PERMISSOES.dashboard)).toBe(false)
    expect(possuiPapel(undefined, PERMISSOES.colaboradores)).toBe(false)
  })
  it('RF07 permite solicitacao de reembolso apenas aos papeis autorizados', () => {
  expect(possuiPapel('TECNICO_CAMPO', PERMISSOES.solicitarReembolso)).toBe(true)
  expect(possuiPapel('GESTOR_OPERACIONAL', PERMISSOES.solicitarReembolso)).toBe(true)
  expect(possuiPapel('ADMIN_FINANCEIRO', PERMISSOES.solicitarReembolso)).toBe(true)
  expect(possuiPapel('AUDITOR_EXTERNO', PERMISSOES.solicitarReembolso)).toBe(false)
  })
})
