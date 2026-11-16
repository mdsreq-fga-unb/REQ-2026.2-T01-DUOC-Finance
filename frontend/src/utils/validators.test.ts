import { describe, expect, it } from 'vitest'
import { validateCPF, validateEmail } from './validators'

describe('validateCPF', () => {
  it('accepts a CPF with valid check digits', () => {
    expect(validateCPF('529.982.247-25')).toBe(true)
  })

  it('rejects repeated digits and invalid check digits', () => {
    expect(validateCPF('111.111.111-11')).toBe(false)
    expect(validateCPF('529.982.247-24')).toBe(false)
  })
})

describe('validateEmail', () => {
  it('accepts a valid address with surrounding whitespace', () => {
    expect(validateEmail(' pessoa@duoc.eng.br ')).toBe(true)
  })

  it('rejects an invalid address', () => {
    expect(validateEmail('pessoa@duoc')).toBe(false)
  })
})
