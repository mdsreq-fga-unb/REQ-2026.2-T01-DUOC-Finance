import { BadRequestException } from '@nestjs/common';
import { validarContrato } from './contrato.dto.js';

describe('validarContrato', () => {
  it('normaliza contrato válido com datas e descarta campos não declarados', () => {
    const dto = validarContrato({
      codigo: ' obr-001 ',
      nome: ' Obra Centro ',
      cliente: ' Cliente X ',
      centroCusto: ' CC-01 ',
      valorDiariaCentavos: 25000,
      dataInicio: '2026-11-01',
      dataFim: '2026-11-30',
      gestorResponsavelId: null,
      intruso: 'não deve ser retornado',
    });
    expect(dto).toMatchObject({
      codigo: 'OBR-001',
      nome: 'Obra Centro',
      cliente: 'Cliente X',
      centroCusto: 'CC-01',
      valorDiariaCentavos: 25000,
      dataInicio: '2026-11-01',
      dataFim: '2026-11-30',
      gestorResponsavelId: null,
    });
    expect(dto).not.toHaveProperty('intruso');
  });

  it('rejeita código, nome, diária, gestor, status e datas inválidos', () => {
    expect(() => validarContrato({
      codigo: '',
      nome: 'X',
      valorDiariaCentavos: -1,
      status: 'INVALIDO',
      gestorResponsavelId: 'nao-e-uuid',
      dataInicio: '2026-12-31',
      dataFim: '2026-01-01',
    })).toThrow(BadRequestException);
  });

  it('rejeita data inexistente no calendário', () => {
    expect(() => validarContrato({
      codigo: 'OBR-002',
      nome: 'Obra Norte',
      dataInicio: '2026-02-30',
    })).toThrow(BadRequestException);
  });

  it('permite atualização parcial', () => {
    expect(validarContrato({ centroCusto: 'CC-2', dataFim: '2026-12-15' }, true)).toEqual({
      centroCusto: 'CC-2',
      dataFim: '2026-12-15',
    });
  });
});
