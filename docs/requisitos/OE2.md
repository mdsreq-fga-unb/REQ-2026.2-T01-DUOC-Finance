# Especificação de Requisitos: DUOC Finance (OE2)

<a id="oe2-eficiencia-e-otimizacao-administrativo-financeira"></a>
??? abstract "OE2: Aumentar a Eficiência Administrativo-Financeira"

    * **Natureza:** Tática e Operacional
    * **Valor de Negócio:** Reduz o tempo de processamento e consolida rotinas financeiras e reembolsos com rapidez e exatidão, mitigando erros manuais e eliminando custos operacionais invisíveis.

## CAR-03: Motor de Processamento e Fechamento Financeiro

### Requisitos Funcionais (RF)
- **RF-05:** Processar o fechamento financeiro mensal dos contratos ativos.
- **RF-06:** Calcular as provisões de folha de pagamento com base nas horas técnicas apontadas.
- **RF-07:** Calcular as comissões e benefícios variáveis atreladas a cada contrato em andamento.
- **RF-08:** Emitir relatório de conferência supervisionada para a diretoria.

---

## CAR-04: Fluxo Digital de Prestação de Contas e Reembolsos

### Requisitos Funcionais (RF)
<!-- - **RF-04.01:** Submeter o comprovante fiscal digitalizado na plataforma. -->
- **RF-09:** Vincular a prestação de contas ou reembolso operacional a um contrato específico.
- **RF-10:** Aprovar ou reprovar fluxos de reembolso pela coordenação técnica.
- **RF-11:** Consultar o histórico tempestivo das aprovações de reembolso operacional.



## Requisitos Não Funcionais (RNF)
- **RNF-01 (Desempenho / Confiabilidade):** O motor de cálculo deve utilizar precisão exata para atributos monetários e processar o fechamento consolidado em um ciclo restrito a poucas horas (~2 horas), assegurando respostas assíncronas.
- **RNF-02 (Usabilidade / Restrição de Design):** O painel deve aplicar o manual de marca da DUOC Arquitetura e Engenharia, utilizando a identidade vetorial.
- **RNF-03 (Suportabilidade / Segurança):** O tráfego dos relatórios financeiros deve ser executado sobre protocolos criptografados aderentes aos padrões de uma rede corporativa.
- **RNF-04 (Desempenho):** O upload de cupons fiscais deve ocorrer de forma otimizada para conexões 4G/5G flutuantes.

## Regras de Negócio (RN)

- **RN-01:** O processamento final do fechamento mensal requer obrigatoriamente a revisão e a supervisão manual de um perfil de acesso gerencial.
- **RN-02:** Apenas horas técnicas, Relatórios de Viagem Técnica (RVT) e despesas que possuam status de "homologado" podem compor a base de cálculo para a provisão.
- **RN-03:** O fluxo bloqueia o envio da solicitação caso nenhum anexo ou cupom fiscal comprobatório seja vinculado à despesa.
- **RN-04:** Reembolsos associados a viagens técnicas só serão processados se a data do cupom fiscal corresponder ao período de execução do respectivo contrato.
