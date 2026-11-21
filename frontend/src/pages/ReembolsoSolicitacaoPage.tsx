import { useEffect, useMemo, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { AlertCircle, FileText, LoaderCircle, UploadCloud } from 'lucide-react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { RvtService } from '../services/rvt.service'
import type { ContratoObra, Rvt } from '../types/rvt'

type CampoObrigatorio =
  | 'categoria'
  | 'valor'
  | 'dataDespesa'
  | 'contratoId'
  | 'descricao'
  | 'comprovante'

type ErrosFormulario = Partial<Record<CampoObrigatorio, string>>

const CATEGORIAS = [
  'Alimentação',
  'Transporte',
  'Combustível',
  'Hospedagem',
  'Materiais emergenciais',
  'Outros',
]

const TAMANHO_MAXIMO_BYTES = 5 * 1024 * 1024
const TIPOS_PERMITIDOS = ['application/pdf', 'image/jpeg', 'image/png']

const classeCampo =
  'w-full h-11 rounded-lg border border-border bg-surface px-3.5 text-sm text-dark ' +
  'focus:outline-hidden focus:border-primary focus:ring-2 focus:ring-primary/20'
const classeRotulo = 'mb-1.5 block text-xs font-semibold text-dark'

function dataLocalISO(): string {
  const agora = new Date()
  const ano = agora.getFullYear()
  const mes = String(agora.getMonth() + 1).padStart(2, '0')
  const dia = String(agora.getDate()).padStart(2, '0')
  return `${ano}-${mes}-${dia}`
}

function dataEmPortugues(data: string): string {
  const partes = data.split('-')
  return partes.length === 3 ? `${partes[2]}/${partes[1]}/${partes[0]}` : data
}

/** Interpreta valores digitados em formato brasileiro, como 185,90 ou 1.200,50. */
function valorEmCentavos(entrada: string): number | null {
  const texto = entrada.trim().replace(/^R\$\s*/, '')
  if (!/^(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d{1,2})?$/.test(texto)) {
    return null
  }

  const [parteInteira, parteDecimal = ''] = texto.split(',')
  const inteiro = Number(parteInteira.replaceAll('.', ''))
  const centavos = inteiro * 100 + Number(parteDecimal.padEnd(2, '0'))

  return Number.isSafeInteger(centavos) && centavos > 0 ? centavos : null
}

function valorFormatado(centavos: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(centavos / 100)
}

/**
 * RF07 / CAR-04 — Interface inicial (UI-first).
 *
 * Esta etapa NÃO grava no banco e NÃO simula sucesso de envio.
 * A confirmação efetiva será habilitada quando a API for integrada.
 */
export default function ReembolsoSolicitacaoPage() {
  const [contratos, setContratos] = useState<ContratoObra[]>([])
  const [rvts, setRvts] = useState<Rvt[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erroCarga, setErroCarga] = useState<string | null>(null)
  const [tentativaCarga, setTentativaCarga] = useState(0)

  const [categoria, setCategoria] = useState('')
  const [valor, setValor] = useState('')
  const [dataDespesa, setDataDespesa] = useState(dataLocalISO)
  const [contratoId, setContratoId] = useState('')
  const [rvtId, setRvtId] = useState('')
  const [descricao, setDescricao] = useState('')
  const [comprovante, setComprovante] = useState<File | null>(null)
  const [erros, setErros] = useState<ErrosFormulario>({})
  const [revisando, setRevisando] = useState(false)

  useEffect(() => {
    let ativo = true

    async function carregar() {
      setCarregando(true)
      setErroCarga(null)
      try {
        // Reutiliza as consultas já existentes da CAR-02.
        const [contratosAtivos, meusRvts] = await Promise.all([
          RvtService.listarContratosAtivos(),
          RvtService.listarMeusApontamentos(),
        ])
        if (!ativo) return
        setContratos(contratosAtivos)
        setRvts(meusRvts)
      } catch (erro) {
        if (ativo) {
          setErroCarga(
            erro instanceof Error ? erro.message : 'Não foi possível carregar os dados.',
          )
        }
      } finally {
        if (ativo) setCarregando(false)
      }
    }

    void carregar()
    return () => {
      ativo = false
    }
  }, [tentativaCarga])

  const contratoSelecionado = contratos.find((contrato) => contrato.id === contratoId)
  const rvtsDoContrato = useMemo(
    () => rvts.filter((rvt) => rvt.contrato.id === contratoId),
    [rvts, contratoId],
  )
  const rvtSelecionado = rvtsDoContrato.find((rvt) => rvt.id === rvtId)
  const centavos = valorEmCentavos(valor)

  function escolherComprovante(evento: ChangeEvent<HTMLInputElement>) {
    const arquivo = evento.target.files?.[0] ?? null
    setComprovante(null)
    setErros((atual) => ({ ...atual, comprovante: undefined }))

    if (!arquivo) return
    if (!TIPOS_PERMITIDOS.includes(arquivo.type)) {
      setErros((atual) => ({
        ...atual,
        comprovante: 'Formato não aceito. Envie PDF, JPG ou PNG.',
      }))
      evento.target.value = ''
      return
    }
    if (arquivo.size > TAMANHO_MAXIMO_BYTES || arquivo.size === 0) {
      setErros((atual) => ({
        ...atual,
        comprovante: 'O comprovante deve ter até 5 MB e não pode estar vazio.',
      }))
      evento.target.value = ''
      return
    }
    setComprovante(arquivo)
  }

  function revisar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    const novosErros: ErrosFormulario = {}

    if (!categoria) novosErros.categoria = 'Selecione a categoria da despesa.'
    if (centavos === null) novosErros.valor = 'Informe um valor válido maior que zero.'
    if (!dataDespesa) novosErros.dataDespesa = 'Informe a data da despesa.'
    if (!contratos.some((contrato) => contrato.id === contratoId)) {
      novosErros.contratoId = 'Selecione um contrato ativo.'
    }
    if (!descricao.trim()) novosErros.descricao = 'Descreva a despesa.'
    if (!comprovante) {
      novosErros.comprovante =
        erros.comprovante || 'Anexe um comprovante fiscal obrigatório.'
    }

    setErros(novosErros)
    if (Object.keys(novosErros).length === 0) {
      setRevisando(true)
    }
  }

  return (
    <div className="space-y-6 pb-10">
      <header>
        <p className="mb-2 text-xs text-muted">Financeiro / Solicitar reembolso</p>
        <h1 className="text-2xl font-bold tracking-tight text-dark">
          Solicitar reembolso
        </h1>
        <p className="mt-1 text-sm text-muted">
          Registre uma despesa operacional vinculada a um contrato de obra.
        </p>
      </header>

      {carregando ? (
        <div className="flex items-center gap-2 rounded-xl border border-border bg-surface p-5 text-sm text-muted">
          <LoaderCircle className="h-4 w-4 animate-spin" />
          Carregando contratos e apontamentos...
        </div>
      ) : erroCarga ? (
        <div role="alert" className="space-y-3 rounded-xl border border-primary/20 bg-primary-light p-5">
          <p className="flex items-center gap-2 font-semibold text-primary">
            <AlertCircle className="h-5 w-5" />
            Não foi possível carregar os dados.
          </p>
          <p className="text-sm text-dark">{erroCarga}</p>
          <Button type="button" variant="outline" onClick={() => setTentativaCarga((n) => n + 1)}>
            Tentar novamente
          </Button>
        </div>
      ) : contratos.length === 0 ? (
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold">Nenhum contrato disponível</h2>
          <p className="mt-2 text-sm text-muted">
            Peça ao gestor a vinculação a uma obra ativa antes de solicitar o reembolso.
          </p>
        </div>
      ) : revisando && centavos !== null ? (
        <section className="space-y-5 rounded-xl border border-border bg-surface p-5 sm:p-7">
          <h2 className="text-lg font-semibold">Revisar solicitação</h2>
          <p className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-dark">
            Prévia de demonstração: os dados ainda não foram enviados ou gravados.
          </p>
          <dl className="grid gap-4 text-sm sm:grid-cols-2">
            <div><dt className="text-muted">Categoria</dt><dd className="font-semibold">{categoria}</dd></div>
            <div><dt className="text-muted">Valor</dt><dd className="font-semibold">{valorFormatado(centavos)}</dd></div>
            <div><dt className="text-muted">Data</dt><dd>{dataEmPortugues(dataDespesa)}</dd></div>
            <div><dt className="text-muted">Contrato</dt><dd>{contratoSelecionado?.codigo} · {contratoSelecionado?.nome}</dd></div>
            <div><dt className="text-muted">RVT (opcional)</dt><dd>{rvtSelecionado ? dataEmPortugues(rvtSelecionado.dataJornada) : 'Não vinculado'}</dd></div>
            <div><dt className="text-muted">Comprovante</dt><dd className="break-all">{comprovante?.name}</dd></div>
            <div className="sm:col-span-2"><dt className="text-muted">Descrição</dt><dd className="whitespace-pre-wrap">{descricao.trim()}</dd></div>
          </dl>
          <div className="flex flex-wrap gap-3">
            <Button type="button" variant="secondary" onClick={() => setRevisando(false)}>
              Voltar e editar
            </Button>
            <Button type="button" disabled title="Disponível após a integração com a API">
              Confirmar solicitação (em integração)
            </Button>
          </div>
        </section>
      ) : (
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(250px,0.9fr)]">
          <section className="rounded-xl border border-border bg-surface p-5 sm:p-7">
            <h2 className="mb-5 text-lg font-semibold">Prestação de contas</h2>
            <form noValidate onSubmit={revisar} className="space-y-5">
              <div>
                <label className={classeRotulo} htmlFor="reembolso-categoria">
                  Categoria da despesa *
                </label>
                <select
                  id="reembolso-categoria"
                  className={classeCampo}
                  value={categoria}
                  aria-invalid={Boolean(erros.categoria)}
                  onChange={(evento) => setCategoria(evento.target.value)}
                >
                  <option value="">Selecione a categoria</option>
                  {CATEGORIAS.map((opcao) => <option key={opcao} value={opcao}>{opcao}</option>)}
                </select>
                {erros.categoria && <p role="alert" className="mt-1 text-xs text-primary">{erros.categoria}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Valor (R$) *"
                  placeholder="185,90"
                  inputMode="decimal"
                  value={valor}
                  onChange={(evento) => setValor(evento.target.value)}
                  error={erros.valor}
                />
                <Input
                  label="Data da despesa *"
                  type="date"
                  value={dataDespesa}
                  onChange={(evento) => setDataDespesa(evento.target.value)}
                  error={erros.dataDespesa}
                />
              </div>

              <div>
                <label className={classeRotulo} htmlFor="reembolso-contrato">Contrato / obra *</label>
                <select
                  id="reembolso-contrato"
                  className={classeCampo}
                  value={contratoId}
                  aria-invalid={Boolean(erros.contratoId)}
                  onChange={(evento) => {
                    setContratoId(evento.target.value)
                    setRvtId('')
                  }}
                >
                  <option value="">Selecione um contrato ativo</option>
                  {contratos.map((contrato) => (
                    <option key={contrato.id} value={contrato.id}>
                      {contrato.codigo} · {contrato.nome}
                    </option>
                  ))}
                </select>
                {erros.contratoId && <p role="alert" className="mt-1 text-xs text-primary">{erros.contratoId}</p>}
              </div>

              <div>
                <label className={classeRotulo} htmlFor="reembolso-rvt">RVT vinculado (opcional)</label>
                <select
                  id="reembolso-rvt"
                  className={classeCampo}
                  value={rvtId}
                  disabled={!contratoId || rvtsDoContrato.length === 0}
                  onChange={(evento) => setRvtId(evento.target.value)}
                >
                  <option value="">Sem RVT vinculado</option>
                  {rvtsDoContrato.map((rvt) => (
                    <option key={rvt.id} value={rvt.id}>
                      {dataEmPortugues(rvt.dataJornada)} · {rvt.escopoExecutado.slice(0, 55)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={classeRotulo} htmlFor="reembolso-descricao">Descrição *</label>
                <textarea
                  id="reembolso-descricao"
                  rows={3}
                  maxLength={1000}
                  className={`${classeCampo} h-auto min-h-24 py-3`}
                  placeholder="Descreva a despesa realizada na obra..."
                  value={descricao}
                  aria-invalid={Boolean(erros.descricao)}
                  onChange={(evento) => setDescricao(evento.target.value)}
                />
                {erros.descricao && <p role="alert" className="mt-1 text-xs text-primary">{erros.descricao}</p>}
              </div>

              <div>
                <label className={classeRotulo} htmlFor="reembolso-comprovante">
                  Comprovante fiscal obrigatório *
                </label>
                <label
                  htmlFor="reembolso-comprovante"
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-border p-4 hover:border-primary"
                >
                  <UploadCloud className="h-6 w-6 shrink-0 text-primary" />
                  <span className="min-w-0 text-sm text-dark">
                    {comprovante ? comprovante.name : 'Selecionar nota ou cupom fiscal (PDF, JPG ou PNG)'}
                    <span className="mt-1 block text-xs text-muted">Arquivo de até 5 MB</span>
                  </span>
                </label>
                <input
                  id="reembolso-comprovante"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                  className="sr-only"
                  aria-invalid={Boolean(erros.comprovante)}
                  onChange={escolherComprovante}
                />
                {erros.comprovante && <p role="alert" className="mt-1 text-xs text-primary">{erros.comprovante}</p>}
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button type="submit">Revisar e solicitar</Button>
                <Button type="reset" variant="secondary" onClick={() => {
                  setCategoria('')
                  setValor('')
                  setDataDespesa(dataLocalISO())
                  setContratoId('')
                  setRvtId('')
                  setDescricao('')
                  setComprovante(null)
                  setErros({})
                }}>
                  Limpar formulário
                </Button>
              </div>
            </form>
          </section>

          <aside className="space-y-5">
            <div className="rounded-xl border border-border bg-surface p-5">
              <div className="mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">Documentação fiscal</h2>
              </div>
              <p className="text-sm leading-6 text-dark">
                Anexe uma nota ou um cupom fiscal legível, com data, estabelecimento e valor.
              </p>
              <p className="mt-4 text-sm text-muted">
                Sem comprovante fiscal, não é possível avançar para a revisão.
              </p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <h2 className="text-lg font-semibold">Acompanhe a análise</h2>
              <p className="mt-3 text-sm leading-6 text-dark">
                Após a integração, a solicitação será encaminhada à administração financeira.
                O status e o parecer poderão ser consultados em Meus reembolsos.
              </p>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}
