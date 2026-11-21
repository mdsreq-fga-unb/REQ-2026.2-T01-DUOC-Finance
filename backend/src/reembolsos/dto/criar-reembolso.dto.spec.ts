import { BadRequestException } from '@nestjs/common';
import { validarCriarReembolsoDto } from './criar-reembolso.dto.js';

const contratoId = 'af8c5627-65bd-4bcd-87d4-2f4d4a49c003';
const agora = new Date('2026-11-21T15:00:00.000Z');
const valido = {
  contratoId,
  categoria: 'Alimentação',
  descricao: 'Almoço durante atendimento em campo.',
  dataDespesa: '2026-11-20',
  valorCentavos: '5990',
};

describe('RF07 — validação do formulário de reembolso', () => {
  it('aceita dados válidos e ignora solicitante informado no corpo', () => {
    expect(validarCriarReembolsoDto({ ...valido, solicitanteId: 'invasor' }, agora)).toEqual({
      ...valido, rvtId: null, valorCentavos: 5990,
    });
    expect(validarCriarReembolsoDto({ ...valido, rvtId: '' }, agora).rvtId).toBeNull();
  });
  it('recusa valor zero, negativo ou decimal', () => {
    for (const valorCentavos of ['0', '-100', '59.90', '1e3']) {
      expect(() => validarCriarReembolsoDto({ ...valido, valorCentavos }, agora)).toThrow(BadRequestException);
    }
  });
  it('recusa inteiro que excede o limite da coluna PostgreSQL', () => {
    expect(() => validarCriarReembolsoDto({ ...valido, valorCentavos: '2147483648' }, agora)).toThrow(BadRequestException);
  });
  it('recusa dia inexistente e data futura', () => {
    for (const dataDespesa of ['2026-02-30', '2026-11-22']) {
      expect(() => validarCriarReembolsoDto({ ...valido, dataDespesa }, agora)).toThrow(BadRequestException);
    }
  });
  it('recusa contrato e RVT com IDs inválidos', () => {
    expect(() => validarCriarReembolsoDto({ ...valido, contratoId: 'fake' }, agora)).toThrow(BadRequestException);
    expect(() => validarCriarReembolsoDto({ ...valido, rvtId: 'fake' }, agora)).toThrow(BadRequestException);
  });
  it('recusa categoria desconhecida', () => {
    expect(() => validarCriarReembolsoDto({ ...valido, categoria: 'Outro qualquer' }, agora)).toThrow(BadRequestException);
  });
  it('recusa descrição insuficiente', () => {
    expect(() => validarCriarReembolsoDto({ ...valido, descricao: 'Curta' }, agora)).toThrow(BadRequestException);
  });
  it('recusa campos ausentes de uma única vez', () => {
    expect(() => validarCriarReembolsoDto({}, agora)).toThrow(BadRequestException);
  });
});
