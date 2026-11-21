import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Clock3, Eye, FileText, ReceiptText, Search, Wallet } from 'lucide-react'
import Button from '../components/ui/Button'
import { ReembolsosApi } from '../services/reembolsos.service'
import type { ReembolsoApi, StatusReembolso } from '../types/reembolso-api'

type Filtro = StatusReembolso|'TODOS'
const abas: {id:Filtro;nome:string}[]=[{id:'PENDENTE',nome:'Pendente'},{id:'APROVADO',nome:'Aprovado'},{id:'REJEITADO',nome:'Rejeitado'},{id:'TODOS',nome:'Todos'}]
const nomes:Record<StatusReembolso,string>={PENDENTE:'Pendente',APROVADO:'Aprovado',REJEITADO:'Rejeitado'}
function dinheiro(n:number){return new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(n/100)}
function buscaNormalizada(n:string){return n.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase()}
function Cartao({titulo,valor,Icone}:{titulo:string;valor:string;Icone:typeof Clock3}){return <div className="rounded-xl border border-border bg-surface p-4"><div className="flex items-center justify-between text-xs text-muted">{titulo}<Icone className="h-4 w-4 text-primary"/></div><strong className="mt-4 block text-2xl text-dark">{valor}</strong></div>}

export default function ReembolsosAdminPage(){
  const [registros,setRegistros]=useState<ReembolsoApi[]>([])
  const [carregando,setCarregando]=useState(true)
  const [erro,setErro]=useState('')
  const [tentativa,setTentativa]=useState(0)
  const [status,setStatus]=useState<Filtro>('PENDENTE')
  const [busca,setBusca]=useState('')
  const [detalheId,setDetalheId]=useState<string|null>(null)
  useEffect(()=>{
    let ativo=true
    void ReembolsosApi.administrativos().then(r=>{if(ativo)setRegistros(r)}).catch(e=>{if(ativo)setErro(e instanceof Error?e.message:'Falha na consulta.')}).finally(()=>{if(ativo)setCarregando(false)})
    return ()=>{ativo=false}
  },[tentativa])
  const pendentes=registros.filter(r=>r.status==='PENDENTE')
  const aprovados=registros.filter(r=>r.status==='APROVADO')
  const filtrados=useMemo(()=>registros.filter(r=>(status==='TODOS'||r.status===status)&&buscaNormalizada([r.codigo,r.solicitante.email,r.contrato.nome,r.categoria].join(' ')).includes(buscaNormalizada(busca.trim()))),[registros,status,busca])
  const detalhe=filtrados.find(r=>r.id===detalheId)
  return <div className="space-y-6 pb-12">
    <header><p className="mb-2 text-xs text-muted">Financeiro / Reembolsos</p><h1 className="text-2xl font-bold text-dark">Reembolsos e adiantamentos</h1><p className="text-sm text-muted">Organize solicitações e acompanhe análises financeiras.</p></header>
    {erro&&<div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">{erro}<button className="ml-3 underline" onClick={()=>{setCarregando(true);setErro('');setTentativa(x=>x+1)}}>Tentar novamente</button></div>}
    <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      <Cartao titulo="Aguardando aprovação" valor={dinheiro(pendentes.reduce((s,r)=>s+r.valorCentavos,0))} Icone={Clock3}/>
      <Cartao titulo="Total aprovado" valor={dinheiro(aprovados.reduce((s,r)=>s+(r.valorAprovadoCentavos??r.valorCentavos),0))} Icone={CheckCircle2}/>
      <Cartao titulo="Reembolsos" valor={String(registros.length).padStart(2,'0')} Icone={ReceiptText}/>
      <Cartao titulo="Adiantamentos" valor="—" Icone={Wallet}/>
    </section>
    <section className="rounded-xl border border-border bg-surface overflow-hidden">
      <div className="flex gap-4 border-b border-border px-4" role="tablist" aria-label="Filtrar por situação">
        {abas.map(a=><button key={a.id} type="button" role="tab" aria-selected={status===a.id} className={'py-4 px-2 text-sm border-b-2 '+(status===a.id?'border-primary text-primary font-semibold':'border-transparent text-muted')} onClick={()=>{setStatus(a.id);setDetalheId(null)}}>{a.nome}</button>)}
      </div>
      <div className="relative max-w-sm m-4"><Search className="absolute left-3 top-3 h-4 w-4 text-muted"/><input aria-label="Buscar reembolso" type="search" placeholder="Buscar código, colaborador ou contrato..." value={busca} onChange={e=>{setBusca(e.target.value);setDetalheId(null)}} className="h-10 w-full border border-border rounded-lg pl-9 pr-3 text-sm"/></div>
      {carregando?<p className="p-8 text-sm">Carregando reembolsos...</p>:filtrados.length===0?<div className="p-10 text-center space-y-3"><FileText className="h-8 w-8 mx-auto text-muted"/><p>Nenhum reembolso encontrado</p><Button variant="secondary" onClick={()=>{setBusca('');setStatus('PENDENTE')}}>Limpar filtros</Button></div>:
      <div className="overflow-x-auto"><table className="w-full min-w-[800px] text-left text-sm"><thead className="bg-surface-subtle text-xs text-muted"><tr><th className="p-3">Solicitação</th><th className="p-3">Colaborador (conta)</th><th className="p-3">Contrato / obra</th><th className="p-3">Valor</th><th className="p-3">Status</th><th className="p-3">Ações</th></tr></thead><tbody>{filtrados.map(r=><tr className="border-t border-border" key={r.id}><td className="p-3 font-semibold">{r.codigo}</td><td className="p-3">{r.solicitante.email}</td><td className="p-3">{r.contrato.nome}</td><td className="p-3">{dinheiro(r.valorCentavos)}</td><td className="p-3">{nomes[r.status]}</td><td className="p-3 whitespace-nowrap"><button onClick={()=>setDetalheId(v=>v===r.id?null:r.id)} className="text-primary font-semibold hover:underline inline-flex gap-1 items-center"><Eye className="h-4 w-4"/> Detalhes</button>{r.status==='PENDENTE'&&<Link className="ml-4 font-semibold text-primary hover:underline" to={`/reembolsos/administracao/${r.id}/deliberar`}>Deliberar</Link>}</td></tr>)}</tbody></table></div>}
      {!carregando&&<p className="px-4 py-3 border-t border-border text-xs text-muted">{filtrados.length} solicitação(ões) exibidas (até 100 registros recentes)</p>}
    </section>
    {detalhe&&<section className="rounded-xl border border-border bg-surface p-6 space-y-2 text-sm"><h2 className="font-semibold text-lg">Conferência · {detalhe.codigo}</h2><p>{detalhe.categoria} · {dinheiro(detalhe.valorCentavos)}</p><p>{detalhe.descricao}</p><p><strong>Parecer:</strong> {detalhe.parecer||'Aguardando análise.'}</p>{detalhe.status==='PENDENTE'&&<Link className="text-primary font-semibold underline" to={`/reembolsos/administracao/${detalhe.id}/deliberar`}>Abrir deliberação</Link>}</section>}
  </div>
}
