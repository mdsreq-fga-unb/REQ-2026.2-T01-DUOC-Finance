import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ClipboardCheck, FileWarning, Info } from 'lucide-react'
import Button from '../components/ui/Button'
import { ReembolsosApi } from '../services/reembolsos.service'
import type { ReembolsoApi } from '../types/reembolso-api'

type Decisao='APROVAR'|'REJEITAR'
function dinheiro(n:number){return new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(n/100)}
export default function ReembolsoDeliberacaoPage(){
  const {id}=useParams<{id:string}>()
  const navigate=useNavigate()
  const [item,setItem]=useState<ReembolsoApi|null>(null)
  const [carregando,setCarregando]=useState(true)
  const [erro,setErro]=useState('')
  const [parecer,setParecer]=useState('')
  const [decisao,setDecisao]=useState<Decisao|null>(null)
  const [enviando,setEnviando]=useState(false)
  const [baixando,setBaixando]=useState(false)
  useEffect(()=>{
    let ativo=true
    if(!id)return undefined
    void ReembolsosApi.detalhe(id).then(r=>{if(ativo)setItem(r)}).catch(e=>{if(ativo)setErro(e instanceof Error?e.message:'Erro na consulta.')}).finally(()=>{if(ativo)setCarregando(false)})
    return ()=>{ativo=false}
  },[id])
  function revisar(d:Decisao){
    if(parecer.trim().length<10){setErro('Parecer obrigatório com pelo menos 10 caracteres.');setDecisao(null);return}
    setErro('');setDecisao(d)
  }
  async function confirmar(){
    if(!id||!decisao||enviando)return
    setEnviando(true);setErro('')
    try {await ReembolsosApi.deliberar(id,decisao,parecer.trim());navigate('/reembolsos/administracao')}
    catch(e){setErro(e instanceof Error?e.message:'Erro ao deliberar.');setDecisao(null)}
    finally{setEnviando(false)}
  }
  async function baixar(){
    if(!item||baixando)return
    setBaixando(true);setErro('')
    try {
      const blob=await ReembolsosApi.baixarComprovante(item.id)
      const url=URL.createObjectURL(blob)
      const a=document.createElement('a');a.href=url;a.download=item.comprovante.nomeOriginal
      document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000)
    }catch(e){setErro(e instanceof Error?e.message:'Falha no comprovante.')}
    finally{setBaixando(false)}
  }
  if(!id)return <section className="rounded-xl border border-border bg-surface p-6 space-y-3"><h1 className="text-xl font-semibold">Solicitação inválida</h1><p role="alert">Identificador não informado.</p><Link className="text-primary underline" to="/reembolsos/administracao">Voltar</Link></section>
  if(carregando)return <p className="p-8 text-sm text-muted">Carregando solicitação...</p>
  if(!item||item.status!=='PENDENTE')return <section className="rounded-xl border border-border bg-surface p-6 space-y-3"><h1 className="text-xl font-semibold">Solicitação indisponível para deliberação</h1><p role="alert">{erro||'A solicitação já foi deliberada ou não está disponível.'}</p><Link className="text-primary underline" to="/reembolsos/administracao">Voltar</Link></section>
  return <div className="space-y-6 pb-12">
    <header className="border-b border-border pb-4">
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="text-xl sm:text-2xl font-bold text-dark">Deliberar reembolso</h1>
        <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary-light text-primary border border-primary/20">
          RF08 · CAR-04
        </span>
      </div>
      <p className="text-xs text-muted mt-1 leading-relaxed">Confira o documento e registre a decisão financeira.</p>
    </header>
    <section className="rounded-xl border border-border bg-surface p-5 shadow-xs"><h2 className="font-semibold">Fila de reembolsos · Pendente</h2><p className="mt-3 text-primary font-semibold">{item.codigo} · {item.solicitante.email} · {item.contrato.nome} · {dinheiro(item.valorCentavos)}</p></section>
    {erro&&<div role="alert" className="p-4 border border-red-200 bg-red-50 text-sm text-red-700 rounded-lg">{erro}</div>}
    <div className="grid gap-5 lg:grid-cols-2">
      <section className="rounded-xl border border-border bg-surface p-5 shadow-xs space-y-4 text-sm"><h2 className="text-lg font-semibold flex items-center gap-2"><ClipboardCheck className="h-5 w-5 text-primary"/> Conferência da solicitação</h2>
        <p><strong>Solicitante:</strong> {item.solicitante.email}</p><p><strong>Contrato:</strong> {item.contrato.codigo} · {item.contrato.nome}</p><p><strong>Categoria:</strong> {item.categoria}</p><p><strong>Data:</strong> {item.dataDespesa.split('-').reverse().join('/')}</p><p><strong>Valor:</strong> {dinheiro(item.valorCentavos)}</p><p><strong>Descrição:</strong> {item.descricao}</p>
        <div className="rounded-lg border border-border bg-surface-subtle p-4 space-y-3"><h3 className="flex items-center gap-2 font-semibold"><FileWarning className="h-5 w-5 text-primary"/> Comprovante fiscal</h3><p>{item.comprovante.nomeOriginal}</p><Button variant="outline" disabled={baixando} onClick={()=>void baixar()}>{baixando?'Baixando...':'Baixar comprovante para conferir'}</Button></div>
        <Link className="inline-block text-primary underline" to="/reembolsos/administracao">Voltar à listagem</Link>
      </section>
      <section className="rounded-xl border border-border bg-surface p-5 shadow-xs space-y-4">
        <h2 className="text-lg font-semibold">Parecer financeiro</h2><p className="text-sm text-muted">O parecer é obrigatório para aprovar ou reprovar. Confira o comprovante antes de decidir.</p>
        {decisao?<div className="space-y-4"><div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm"><h3 className="font-semibold flex items-center gap-2"><Info className="h-4 w-4"/> Revisar {decisao==='APROVAR'?'aprovação':'reprovação'}</h3><p className="mt-2">Solicitação: {item.codigo}</p><p>Valor: {dinheiro(item.valorCentavos)}</p><p>Parecer: {parecer.trim()}</p></div><div className="flex flex-wrap gap-3"><Button disabled={enviando} onClick={()=>void confirmar()}>{enviando?'Enviando...':'Confirmar decisão'}</Button><Button disabled={enviando} variant="secondary" onClick={()=>setDecisao(null)}>Voltar e editar</Button></div></div>:
        <div className="space-y-4"><label className="block text-xs font-semibold text-dark" htmlFor="parecer">Parecer obrigatório *</label><textarea id="parecer" rows={5} maxLength={1500} value={parecer} onChange={e=>setParecer(e.target.value)} className="w-full border border-border rounded-lg bg-surface p-3 text-sm text-dark focus:outline-hidden focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Descreva a justificativa da decisão"/><div className="flex flex-wrap gap-3"><Button onClick={()=>revisar('APROVAR')}>Revisar aprovação</Button><Button variant="secondary" onClick={()=>revisar('REJEITAR')}>Revisar reprovação</Button></div></div>}
      </section>
    </div>
  </div>
}
