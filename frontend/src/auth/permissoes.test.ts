import { describe, expect, it } from 'vitest'
import { PAPEIS, PERMISSOES, papelValido, possuiPapel } from './permissoes'

describe('CAR-07 / RN15 — matriz de autorização no frontend', () => {
  it('contem exatamente os quatro papeis canonicos', () => {
    expect(PAPEIS).toEqual([
      'ADMIN_SISTEMA', 'ADMIN_FINANCEIRO', 'GESTOR_OBRAS', 'TECNICO_CAMPO',
    ])
  })
  it('rejeita papel desconhecido', () => {
    expect(papelValido('ADMIN')).toBe(false)
    expect(papelValido(undefined)).toBe(false)
  })
  it('somente admin acessa cadastro e fechamento financeiro', () => {
    expect(possuiPapel('ADMIN_FINANCEIRO', PERMISSOES.colaboradores)).toBe(true)
    expect(possuiPapel('GESTOR_OBRAS', PERMISSOES.colaboradores)).toBe(false)
    expect(possuiPapel('ADMIN_SISTEMA', PERMISSOES.fechamento)).toBe(false)
  })
  it('somente tecnico de campo pode criar novo RVT', () => {
    expect(possuiPapel('TECNICO_CAMPO', PERMISSOES.novoRvt)).toBe(true)
    expect(possuiPapel('ADMIN_FINANCEIRO', PERMISSOES.novoRvt)).toBe(false)
    expect(possuiPapel('ADMIN_SISTEMA', PERMISSOES.novoRvt)).toBe(false)
  })
  it('historico fica disponivel para tecnico, gestor e financeiro', () => {
    expect(possuiPapel('GESTOR_OBRAS', PERMISSOES.historicoRvt)).toBe(true)
    expect(possuiPapel('TECNICO_CAMPO', PERMISSOES.historicoRvt)).toBe(true)
    expect(possuiPapel('ADMIN_FINANCEIRO', PERMISSOES.historicoRvt)).toBe(true)
    expect(possuiPapel('ADMIN_SISTEMA', PERMISSOES.historicoRvt)).toBe(false)
  })
  it('reserva gestão de acessos ao administrador do sistema', () => {
    expect(possuiPapel('ADMIN_SISTEMA', PERMISSOES.gestaoAcessos)).toBe(true)
    expect(possuiPapel('ADMIN_FINANCEIRO', PERMISSOES.gestaoAcessos)).toBe(false)
  })
  it('sem usuario nao existe permissao', () => {
    expect(possuiPapel(null, PERMISSOES.dashboard)).toBe(false)
    expect(possuiPapel(undefined, PERMISSOES.colaboradores)).toBe(false)
  })
})
