import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ClipboardList, FileClock, Plus } from 'lucide-react'
import Button from '../components/ui/Button'
import { ReembolsosApi } from '../services/reembolsos.service'
import type { ReembolsoApi, StatusReembolso } from '../types/reembolso-api'

type FiltroStatus = StatusReembolso | 'TODOS'
const classes: Record<StatusReembolso,string> = {
  PENDENTE:'border-amber-200 bg-amber-50 text-amber-700',
  APROVADO:'border-emerald-200 bg-emerald-50 text-emerald-700',
  REJEITADO:'border-red-200 bg-red-50 text-red-700',
}
const nomes: Record<StatusReembolso,string> = {PENDENTE:'Pendente',APROVADO:'Aprovado',REJEITADO:'Rejeitado'}
const classeSelect = 'w-full h-11 rounded-lg border border-border bg-surface px-3.5 text-sm text-dark focus:outline-hidden focus:border-primary'
function dinheiro(c:number) {return new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(c/100)}
function dataBR(s:string) {return s.split('-').reverse().join('/')}
export default function ReembolsoHistoricoPage() {
  const [registros,setRegistros] = useState<ReembolsoApi[]>([])
  const [carregando,setCarregando] = useState(true)
  const [erro,setErro] = useState('')
  const [tentativa,setTentativa] = useState(0)
  const [contratoId,setContratoId] = useState('')
  const [periodo,setPeriodo] = useState('')
  const [status,setStatus] = useState<FiltroStatus>('TODOS')
  const [detalheId,setDetalheId] = useState<string|null>(null)
  const [baixando,setBaixando] = useState('')

  useEffect(()=>{
    let ativo=true
    void ReembolsosApi.meus().then(d=>{if(ativo)setRegistros(d)})
      .catch(e=>{if(ativo)setErro(e instanceof Error?e.message:'Erro na consulta.')})
      .finally(()=>{if(ativo)setCarregando(false)})
    return ()=>{ativo=false}
  },[tentativa])
  const contratos = useMemo(()=>[...new Map(registros.map(r=>[r.contrato.id,r.contrato])).values()].sort((a,b)=>a.nome.localeCompare(b.nome)),[registros])
  const periodos = useMemo(()=>[...new Set(registros.map(r=>r.dataDespesa.slice(0,7)))].sort().reverse(),[registros])
  const filtrados = useMemo(()=>registros.filter(r=>(!contratoId||r.contrato.id===contratoId)&&(!periodo||r.dataDespesa.startsWith(periodo))&&(status==='TODOS'||r.status===status)),[registros,contratoId,periodo,status])
  const detalhe = filtrados.find(r=>r.id===detalheId)
  async function baixar(item:ReembolsoApi) {
    setErro('');setBaixando(item.id)
    try {
      const blob = await ReembolsosApi.baixarComprovante(item.id)
      const url=URL.createObjectURL(blob)
      const a=document.createElement('a');a.href=url;a.download=item.comprovante.nomeOriginal
      document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000)
    } catch(e) {setErro(e instanceof Error?e.message:'Falha no comprovante.')}
    finally {setBaixando('')}
  }
  return <div className="space-y-6 pb-12">
    <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div><p className="mb-2 text-xs text-muted">Financeiro / Meus reembolsos</p><h1 className="text-2xl font-bold text-dark">Meus reembolsos</h1>
        <p className="text-sm text-muted">Acompanhe solicitações, status e pareceres financeiros.</p></div>
      <Link to="/reembolsos/solicitar"><Button><Plus className="h-4 w-4"/> Solicitar reembolso</Button></Link>
    </header>
    {erro && <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">{erro} <button className="underline ml-2" onClick={()=>{setCarregando(true);setErro('');setTentativa(n=>n+1)}}>Tentar novamente</button></div>}
    <section className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="px-5 py-5 border-b border-border"><h2 className="flex items-center gap-2 text-lg font-semibold"><ClipboardList className="h-5 w-5 text-primary"/> Minhas solicitações</h2></div>
      <div className="grid gap-4 p-5 sm:grid-cols-3">
        <div><label className="text-xs font-semibold" htmlFor="ct-reem">Contrato</label><select className={classeSelect} id="ct-reem" value={contratoId} onChange={e=>{setContratoId(e.target.value);setDetalheId(null)}}><option value="">Todos</option>{contratos.map(c=><option value={c.id} key={c.id}>{c.nome}</option>)}</select></div>
        <div><label className="text-xs font-semibold" htmlFor="mes-reem">Período</label><select className={classeSelect} id="mes-reem" value={periodo} onChange={e=>{setPeriodo(e.target.value);setDetalheId(null)}}><option value="">Todos</option>{periodos.map(m=><option value={m} key={m}>{m}</option>)}</select></div>
        <div><label className="text-xs font-semibold" htmlFor="status-reem">Status</label><select className={classeSelect} id="status-reem" value={status} onChange={e=>{setStatus(e.target.value as FiltroStatus);setDetalheId(null)}}><option value="TODOS">Todos</option><option value="PENDENTE">Pendente</option><option value="APROVADO">Aprovado</option><option value="REJEITADO">Rejeitado</option></select></div>
      </div>
      {carregando?<p className="p-8 text-sm text-muted">Carregando solicitações...</p>:
      filtrados.length===0?<div className="space-y-3 border-t border-border p-10 text-center"><FileClock className="mx-auto h-8 w-8 text-muted"/><h3 className="font-semibold">Nenhuma solicitação encontrada</h3><p className="text-sm text-muted">Você não possui reembolsos correspondentes aos filtros.</p><Button variant="secondary" onClick={()=>{setContratoId('');setPeriodo('');setStatus('TODOS')}}>Limpar filtros</Button></div>:
      <div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-surface-subtle text-xs uppercase text-muted"><tr><th className="px-5 py-3">Solicitação</th><th className="px-5 py-3">Despesa / contrato</th><th className="px-5 py-3">Valor</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Detalhe</th></tr></thead><tbody>
        {filtrados.map(r=><tr className="border-t border-border" key={r.id}><td className="px-5 py-4 font-semibold text-primary">{r.codigo} · {dataBR(r.dataDespesa)}</td><td className="px-5 py-4">{r.categoria}<span className="block text-xs text-muted">{r.contrato.nome}</span></td><td className="px-5 py-4">{dinheiro(r.valorCentavos)}</td><td className="px-5 py-4"><span className={'border rounded-md px-2 py-1 text-xs '+classes[r.status]}>{nomes[r.status]}</span></td><td className="px-5 py-4"><button className="text-primary font-semibold hover:underline" onClick={()=>setDetalheId(atual=>atual===r.id?null:r.id)}>{detalheId===r.id?'Ocultar':'Ver detalhes'}</button></td></tr>)}
      </tbody></table></div>}
      {!carregando && <p className="border-t border-border px-5 py-3 text-xs text-muted">{filtrados.length} de {registros.length} solicitações exibidas</p>}
    </section>
    {detalhe && <section className="rounded-xl border border-border bg-surface p-6 space-y-3 text-sm"><h2 className="text-lg font-semibold">{detalhe.codigo} · {nomes[detalhe.status]}</h2><p>{detalhe.descricao}</p><p><strong>Parecer:</strong> {detalhe.parecer||'Aguardando análise.'}</p><button className="text-primary font-semibold underline disabled:opacity-50" disabled={baixando===detalhe.id} onClick={()=>void baixar(detalhe)}>{baixando===detalhe.id?'Baixando...':'Baixar comprovante fiscal'}</button></section>}
  </div>
}
