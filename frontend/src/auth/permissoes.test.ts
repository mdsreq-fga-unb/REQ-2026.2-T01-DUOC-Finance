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
  it('historico de apontamentos proprios fica disponivel apenas ao tecnico', () => {
    expect(possuiPapel('GESTOR_OBRAS', PERMISSOES.historicoRvt)).toBe(false)
    expect(possuiPapel('TECNICO_CAMPO', PERMISSOES.historicoRvt)).toBe(true)
    expect(possuiPapel('ADMIN_FINANCEIRO', PERMISSOES.historicoRvt)).toBe(false)
    expect(possuiPapel('ADMIN_SISTEMA', PERMISSOES.historicoRvt)).toBe(false)
  })
  it('reserva gestão de acessos ao administrador do sistema', () => {
    expect(possuiPapel('ADMIN_SISTEMA', PERMISSOES.gestaoAcessos)).toBe(true)
    expect(possuiPapel('ADMIN_FINANCEIRO', PERMISSOES.gestaoAcessos)).toBe(false)
  })
  it('define a matriz de acesso das sete telas para os quatro papéis', () => {
    expect(PAPEIS.filter((papel) => possuiPapel(papel, PERMISSOES.dashboard))).toEqual(PAPEIS)
    expect(PAPEIS.filter((papel) => possuiPapel(papel, PERMISSOES.colaboradores)))
      .toEqual(['ADMIN_FINANCEIRO'])
    expect(PAPEIS.filter((papel) => possuiPapel(papel, PERMISSOES.novoRvt)))
      .toEqual(['TECNICO_CAMPO'])
    expect(PAPEIS.filter((papel) => possuiPapel(papel, PERMISSOES.historicoRvt)))
      .toEqual(['TECNICO_CAMPO'])
    expect(PAPEIS.filter((papel) => possuiPapel(papel, PERMISSOES.aprovacaoDiarias)))
      .toEqual(['ADMIN_FINANCEIRO'])
    expect(PAPEIS.filter((papel) => possuiPapel(papel, PERMISSOES.reembolsos)))
      .toEqual(['ADMIN_FINANCEIRO', 'GESTOR_OBRAS', 'TECNICO_CAMPO'])
    expect(PAPEIS.filter((papel) => possuiPapel(papel, PERMISSOES.gestaoAcessos)))
      .toEqual(['ADMIN_SISTEMA'])
  })
  it('somente o gestor de obras homologa apontamentos (RF32 / RN16)', () => {
    expect(possuiPapel('GESTOR_OBRAS', PERMISSOES.homologacaoRvt)).toBe(true)
    expect(possuiPapel('TECNICO_CAMPO', PERMISSOES.homologacaoRvt)).toBe(false)
    expect(possuiPapel('ADMIN_FINANCEIRO', PERMISSOES.homologacaoRvt)).toBe(false)
    expect(possuiPapel('ADMIN_SISTEMA', PERMISSOES.homologacaoRvt)).toBe(false)
  })
  it('retificacao segue quem pode criar RVT (RF35)', () => {
    expect(PERMISSOES.retificarRvt).toEqual(PERMISSOES.novoRvt)
  })
  it('sem usuario nao existe permissao', () => {
    expect(possuiPapel(null, PERMISSOES.dashboard)).toBe(false)
    expect(possuiPapel(undefined, PERMISSOES.colaboradores)).toBe(false)
  })
})
