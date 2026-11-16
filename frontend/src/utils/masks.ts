/**
 * Utilitários de máscaras para formulários do DUOC Finance
 */

/**
 * Aplica máscara de CPF: 000.000.000-00
 */
export function maskCPF(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  return digits
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

/**
 * Remove formatação do CPF, mantendo apenas os dígitos
 */
export function unmaskCPF(value: string): string {
  return value.replace(/\D/g, '')
}

/**
 * Formata CPF para privacidade na listagem: ***.456.789-**
 * Requisito explícito de segurança da issue #154
 */
export function formatCPFMasked(cpf: string): string {
  const digits = unmaskCPF(cpf)
  if (digits.length !== 11) return cpf
  const middle = digits.slice(3, 9)
  return `***.${middle.slice(0, 3)}.${middle.slice(3, 6)}-**`
}

/**
 * Aplica máscara de telefone: (00) 00000-0000 ou (00) 0000-0000
 */
export function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 10) {
    return digits
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
  }
  return digits
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{4})$/, '$1-$2')
}

/**
 * Formata valor numérico para padrão moeda brasileira (BRL)
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

/**
 * Aplica máscara de moeda dinamicamente em campo de input
 */
export function maskCurrencyInput(value: string): string {
  const digits = value.replace(/\D/g, '')
  if (!digits) return ''
  const numberValue = parseFloat(digits) / 100
  return formatCurrency(numberValue)
}

/**
 * Converte string mascarada de moeda de volta para número
 */
export function parseCurrency(value: string): number {
  const digits = value.replace(/\D/g, '')
  if (!digits) return 0
  return parseFloat(digits) / 100
}
