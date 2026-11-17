/**
 * Validações de integridade e regras de negócio (RN01, RNF03)
 */

/**
 * Validação algorítmica oficial de CPF (Receita Federal)
 * Verifica os dois dígitos verificadores (módulo 11) e bloqueia sequências repetidas.
 */
export function validateCPF(cpf: string): boolean {
  const cleanCPF = cpf.replace(/\D/g, '')

  // Deve ter exatamente 11 dígitos
  if (cleanCPF.length !== 11) return false

  // Bloqueia dígitos todos iguais (111.111.111-11, etc.)
  if (/^(\d)\1{10}$/.test(cleanCPF)) return false

  // 1º dígito verificador
  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF.charAt(i), 10) * (10 - i)
  }
  let checkDigit1 = 11 - (sum % 11)
  if (checkDigit1 >= 10) checkDigit1 = 0
  if (checkDigit1 !== parseInt(cleanCPF.charAt(9), 10)) return false

  // 2º dígito verificador
  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF.charAt(i), 10) * (11 - i)
  }
  let checkDigit2 = 11 - (sum % 11)
  if (checkDigit2 >= 10) checkDigit2 = 0
  if (checkDigit2 !== parseInt(cleanCPF.charAt(10), 10)) return false

  return true
}

/**
 * Validação de formato de e-mail RFC compliant simples
 */
export function validateEmail(email: string): boolean {
  if (!email.trim()) return false
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email.trim())
}
