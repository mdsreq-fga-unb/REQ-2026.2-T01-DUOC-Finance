import { BadRequestException } from '@nestjs/common';
import { validarDeliberarReembolso } from './deliberar-reembolso.dto.js';

describe('RF08 — validação da deliberação', () => {
  it('aceita aprovação acompanhada de parecer', () => {
    expect(validarDeliberarReembolso({decisao: 'APROVAR', parecer: '  Comprovante válido.  '}))
      .toEqual({decisao: 'APROVAR', parecer: 'Comprovante válido.'});
  });
  it('aceita rejeição com justificativa formal', () => {
    expect(validarDeliberarReembolso({decisao: 'REJEITAR', parecer: 'Documento ilegível.'}).decisao).toBe('REJEITAR');
  });
  it.each(['', '  ', 'Curto'])('recusa parecer insuficiente: %s', parecer => {
    expect(() => validarDeliberarReembolso({decisao: 'APROVAR', parecer})).toThrow(BadRequestException);
  });
  it('recusa decisão arbitrária', () => {
    expect(() => validarDeliberarReembolso({decisao: 'PAGAR', parecer: 'Comprovante válido.'})).toThrow(BadRequestException);
  });
});
