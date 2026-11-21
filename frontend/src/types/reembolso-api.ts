export type StatusReembolso = 'PENDENTE' | 'APROVADO' | 'REJEITADO'

export interface ReembolsoApi {
  id: string
  codigo: string
  solicitante: { id: string; email: string }
  contrato: { id: string; codigo: string; nome: string }
  rvtId: string | null
  categoria: string
  descricao: string
  valorCentavos: number
  valorAprovadoCentavos: number | null
  dataDespesa: string
  status: StatusReembolso
  parecer: string | null
  deliberadoEm: string | null
  comprovante: { nomeOriginal: string; mimeType: string; tamanhoBytes: number }
  createdAt: string
  updatedAt: string
}
export interface ContratoReembolso { id: string; codigo: string; nome: string }
export interface RvtReembolso { id: string; contrato: { id: string }; dataJornada: string; escopoExecutado: string }
export interface CriarReembolsoDados {
  categoria: string; valorCentavos: number; dataDespesa: string; contratoId: string
  rvtId: string | null; descricao: string; comprovante: File
}
