import { useEffect, useMemo, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { FileText, UploadCloud } from 'lucide-react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { ReembolsosApi } from '../services/reembolsos.service'
import type { ContratoReembolso, RvtReembolso } from '../types/reembolso-api'
import { useAuth } from '../auth/AuthContext'
import { PERMISSOES, possuiPapel } from '../auth/permissoes'

const CATEGORIAS = ['Alimentação', 'Transporte', 'Combustível', 'Hospedagem', 'Materiais emergenciais', 'Outros']
const MAX_BYTES = 5 * 1024 * 1024
const classeCampo = 'w-full h-11 rounded-lg border border-border bg-surface px-3.5 text-sm text-dark focus:outline-hidden focus:border-primary focus:ring-2 focus:ring-primary/20'
const classeRotulo = 'mb-1.5 block text-xs font-semibold text-dark'
function hojeISO() {
  const agora = new Date()
  return `${agora.getFullYear()}-${String(agora.getMonth()+1).padStart(2,'0')}-${String(agora.getDate()).padStart(2,'0')}`
}
function emCentavos(valor: string): number | null {
  const texto = valor.trim().replace(/^R\$\s*/, '')
  if (!/^(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d{1,2})?$/.test(texto)) return null
  const [inteiro,decimal=''] = texto.split(',')
  const centavos = Number(inteiro.replaceAll('.', '')) * 100 + Number(decimal.padEnd(2,'0'))
  return Number.isSafeInteger(centavos) && centavos > 0 && centavos <= 2_147_483_647 ? centavos : null
}
function dinheiro(c: number) { return new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(c/100) }

/** RF07 — envio real autenticado por JWT, sem fallback para mocks. */
export default function ReembolsoSolicitacaoPage() {
  const { usuario } = useAuth()
  const podeVincularRvt = possuiPapel(usuario?.papel, PERMISSOES.historicoRvt)
  const [contratos,setContratos] = useState<ContratoReembolso[]>([])
  const [rvts,setRvts] = useState<RvtReembolso[]>([])
  const [carregando,setCarregando] = useState(true)
  const [erroCarga,setErroCarga] = useState('')
  const [tentativa,setTentativa] = useState(0)
  const [categoria,setCategoria] = useState('')
  const [valor,setValor] = useState('')
  const [dataDespesa,setDataDespesa] = useState(hojeISO)
  const [contratoId,setContratoId] = useState('')
  const [rvtId,setRvtId] = useState('')
  const [descricao,setDescricao] = useState('')
  const [comprovante,setComprovante] = useState<File|null>(null)
  const [erroArquivo,setErroArquivo] = useState('')
  const [erroFormulario,setErroFormulario] = useState('')
  const [revisando,setRevisando] = useState(false)
  const [enviando,setEnviando] = useState(false)
  const [codigoCriado,setCodigoCriado] = useState('')

  useEffect(() => {
    let ativo = true
    async function carregar() {
      setCarregando(true); setErroCarga('')
      try {
        const [ativos,apontamentos] = await Promise.all([
          ReembolsosApi.listarContratosAtivos(),
          podeVincularRvt
            ? ReembolsosApi.listarMeusRvt().catch(() => [] as RvtReembolso[])
            : Promise.resolve([] as RvtReembolso[]),
        ])
        if (ativo) { setContratos(ativos); setRvts(apontamentos) }
      } catch (e) {
        if (ativo) setErroCarga(e instanceof Error ? e.message : 'Erro ao carregar contratos.')
      } finally { if (ativo) setCarregando(false) }
    }
    void carregar()
    return () => { ativo = false }
  },[tentativa, podeVincularRvt])

  const rvtsDoContrato = useMemo(() => rvts.filter(r => r.contrato.id === contratoId),[rvts,contratoId])
  const contrato = contratos.find(c=>c.id===contratoId)
  const centavos = emCentavos(valor)
  function escolherArquivo(e: ChangeEvent<HTMLInputElement>) {
    const arquivo = e.target.files?.[0] ?? null
    setComprovante(null); setErroArquivo('')
    if (!arquivo) return
    if (!['application/pdf','image/jpeg','image/png'].includes(arquivo.type)) {
      setErroArquivo('Selecione um PDF, JPG ou PNG.'); e.target.value=''; return
    }
    if (arquivo.size<1 || arquivo.size>MAX_BYTES) {
      setErroArquivo('O arquivo deve ter até 5 MB e não pode estar vazio.'); e.target.value=''; return
    }
    setComprovante(arquivo)
  }
  function revisar(e:FormEvent<HTMLFormElement>) {
    e.preventDefault(); setErroFormulario('')
    if (!categoria || !CATEGORIAS.includes(categoria) || !centavos || !dataDespesa || !contratoId || descricao.trim().length<10) {
      setErroFormulario('Informe categoria, valor maior que zero, data, contrato e descrição com ao menos 10 caracteres.'); return
    }
    if (!comprovante) { setErroArquivo('Anexe um comprovante fiscal obrigatório.'); return }
    setRevisando(true)
  }
  async function confirmar() {
    if (!centavos || !comprovante || enviando) return
    setEnviando(true); setErroFormulario('')
    try {
      const novo = await ReembolsosApi.criar({categoria,valorCentavos:centavos,dataDespesa,contratoId,rvtId:rvtId||null,descricao:descricao.trim(),comprovante})
      setCodigoCriado(novo.codigo)
    } catch(e) {
      setErroFormulario(e instanceof Error ? e.message : 'Falha ao enviar solicitação.')
    } finally { setEnviando(false) }
  }

  return <div className="space-y-6 pb-12">
    <header className="border-b border-border pb-4">
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="text-xl sm:text-2xl font-bold text-dark">Solicitar reembolso</h1>
        <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary-light text-primary border border-primary/20">
          RF07 · CAR-04
        </span>
      </div>
      <p className="mt-1 text-xs text-muted leading-relaxed">Registre sua despesa operacional vinculada a um contrato de obra.</p>
    </header>
    {codigoCriado ? <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 shadow-xs space-y-3">
      <h2 className="font-semibold text-lg">Solicitação enviada com sucesso</h2>
      <p>Protocolo <strong>{codigoCriado}</strong> registrado com status Pendente.</p>
      <Link className="text-primary font-semibold underline" to="/reembolsos/meus">Consultar meus reembolsos</Link>
    </section> : carregando ? <p className="text-sm text-muted">Carregando contratos...</p> : erroCarga ?
      <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-5 space-y-3">
        <p>{erroCarga}</p><Button variant="secondary" onClick={()=>setTentativa(v=>v+1)}>Tentar novamente</Button>
      </div> : contratos.length===0 ? <section className="rounded-xl border border-border bg-surface p-6 shadow-xs">
        <h2 className="font-semibold">Nenhum contrato disponível</h2><p className="text-sm text-muted">Peça ao gestor a vinculação a um contrato ativo.</p>
      </section> :
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(250px,0.9fr)]">
        <section className="rounded-xl border border-border bg-surface p-5 sm:p-7 shadow-xs space-y-5">
          <h2 className="text-lg font-semibold">{revisando?'Revisar solicitação':'Prestação de contas'}</h2>
          {erroFormulario && <p role="alert" className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">{erroFormulario}</p>}
          {revisando ? <div className="space-y-4 text-sm">
            <p><strong>Categoria:</strong> {categoria}</p>
            <p><strong>Valor:</strong> {dinheiro(centavos ?? 0)}</p>
            <p><strong>Data:</strong> {dataDespesa.split('-').reverse().join('/')}</p>
            <p><strong>Contrato:</strong> {contrato?.codigo} · {contrato?.nome}</p>
            <p><strong>RVT:</strong> {rvtId||'Sem vínculo'}</p>
            <p><strong>Descrição:</strong> {descricao}</p>
            <p><strong>Comprovante:</strong> {comprovante?.name}</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" disabled={enviando} onClick={()=>setRevisando(false)}>Voltar e editar</Button>
              <Button disabled={enviando} onClick={()=>void confirmar()}>{enviando?'Enviando...':'Confirmar solicitação'}</Button>
            </div>
          </div> : <form noValidate onSubmit={revisar} className="space-y-5">
            <div><label className={classeRotulo} htmlFor="categoria">Categoria da despesa *</label>
              <select className={classeCampo} id="categoria" value={categoria} onChange={e=>setCategoria(e.target.value)}>
                <option value="">Selecione a categoria</option>{CATEGORIAS.map(c=><option key={c} value={c}>{c}</option>)}
              </select></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Valor (R$) *" placeholder="Digite o valor da despesa" helperText="Exemplo: 185,90 — utilize vírgula para os centavos." inputMode="decimal" value={valor} onChange={e=>setValor(e.target.value)}/>
              <Input label="Data da despesa *" type="date" max={hojeISO()} value={dataDespesa} onChange={e=>setDataDespesa(e.target.value)}/>
            </div>
            <div><label className={classeRotulo} htmlFor="contrato">Contrato / obra *</label>
              <select className={classeCampo} id="contrato" value={contratoId} onChange={e=>{setContratoId(e.target.value);setRvtId('')}}>
                <option value="">Selecione um contrato ativo</option>
                {contratos.map(c=><option value={c.id} key={c.id}>{c.codigo} · {c.nome}</option>)}
              </select></div>
            <div><label className={classeRotulo} htmlFor="rvt">RVT vinculado (opcional)</label>
              <select className={classeCampo} id="rvt" disabled={!contratoId || !rvtsDoContrato.length} value={rvtId} onChange={e=>setRvtId(e.target.value)}>
                <option value="">Sem RVT vinculado</option>
                {rvtsDoContrato.map(r=><option key={r.id} value={r.id}>{r.dataJornada} · {r.escopoExecutado.slice(0,45)}</option>)}
              </select></div>
            <div><label className={classeRotulo} htmlFor="descricao">Descrição *</label>
              <textarea id="descricao" className={classeCampo+' h-24 py-3'} rows={3} value={descricao} maxLength={2000} onChange={e=>setDescricao(e.target.value)} placeholder="Descreva a despesa na obra (mínimo 10 caracteres)"/></div>
            <div><label className={classeRotulo} htmlFor="comprovante">Comprovante fiscal obrigatório *</label>
              <label className="flex cursor-pointer gap-3 rounded-lg border border-dashed border-border p-4" htmlFor="comprovante">
                <UploadCloud className="h-6 w-6 text-primary"/><span className="text-sm">{comprovante?.name||'Selecionar PDF, JPG ou PNG (até 5 MB)'}</span>
              </label>
              <input className="sr-only" id="comprovante" type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={escolherArquivo}/>
              {erroArquivo && <p role="alert" className="mt-1 text-sm text-red-700">{erroArquivo}</p>}
            </div>
            <Button type="submit">Revisar e solicitar</Button>
          </form>}
        </section>
        <aside className="space-y-5">
          <section className="rounded-xl border border-border bg-surface p-5 space-y-3">
            <h2 className="flex items-center gap-2 text-lg font-semibold"><FileText className="h-5 w-5 text-primary"/> Documentação fiscal</h2>
            <p className="text-sm">Anexe nota ou cupom fiscal legível, com data, estabelecimento e valor.</p>
          </section>
          <section className="rounded-xl border border-amber-200 bg-amber-50 p-5 space-y-3">
            <h2 className="text-lg font-semibold">Acompanhe a análise</h2>
            <p className="text-sm">Após enviar, acompanhe status e parecer em Meus reembolsos.</p>
          </section>
        </aside>
      </div>}
  </div>
}
