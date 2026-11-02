#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script de consolidação do Catálogo Unificado de Requisitos de Software
DUOC Finance — Cascata Ágil
"""

import os
import re
import glob

# 1. Metadados canônicos dos 40 Requisitos Funcionais
# Mapeamento estrito: RF -> (Nome, OE, CAR, UC, US, Role, MVP, Quad, VB, EC_str, RNs, RNFs, CT, Acao)
RF_META = {
    "RF01": {
        "nome": "Cadastrar colaborador",
        "oe": "OE1", "car": "CAR-01", "uc": "UC01", "us": "US01",
        "role": "ADMIN_FINANCEIRO", "mvp": "MVP", "quad": "Q1",
        "vb": "4", "ec": "1,67 (2 — Moderado)", "ip": "2,40",
        "rns": ["RN01", "RN03", "RN22", "RN23"],
        "rnfs": ["RNF02", "RNF03", "RNF19"],
        "ct": "CT-M1-01",
        "acao": "O Administrador Financeiro cadastra um novo colaborador no sistema informando dados pessoais, bancários validados e regime trabalhista, gerando credencial e link de ativação segura."
    },
    "RF02": {
        "nome": "Atualizar cadastro de colaborador",
        "oe": "OE1", "car": "CAR-01", "uc": "UC01", "us": "US02",
        "role": "ADMIN_FINANCEIRO", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "1,67 (2 — Moderado)", "ip": "1,80",
        "rns": ["RN23"],
        "rnfs": ["RNF02", "RNF03", "RNF19"],
        "ct": "CT-M1-02",
        "acao": "O Administrador Financeiro atualiza informações cadastrais ou bancárias de um colaborador ativo, propagando as alterações síncronas para rotinas financeiras com versionamento imutável."
    },
    "RF03": {
        "nome": "Registrar movimentação funcional",
        "oe": "OE1", "car": "CAR-01", "uc": "UC01", "us": "US03",
        "role": "ADMIN_FINANCEIRO", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "2,00 (2 — Moderado)", "ip": "1,50",
        "rns": ["RN04"],
        "rnfs": ["RNF02", "RNF03", "RNF19"],
        "ct": "CT-M1-03",
        "acao": "O Administrador Financeiro registra afastamentos, férias e rescisões contratuais, disparando a revogação automática e compulsória de credenciais e sessões de acesso."
    },
    "RF04": {
        "nome": "Submeter apontamento de campo",
        "oe": "OE1", "car": "CAR-02", "uc": "UC02", "us": "US04",
        "role": "TECNICO_CAMPO", "mvp": "MVP", "quad": "Q2",
        "vb": "4", "ec": "3,00 (3 — Alto)", "ip": "1,33",
        "rns": ["RN02"],
        "rnfs": ["RNF01", "RNF04"],
        "ct": "CT-M1-04",
        "acao": "O Técnico de Campo registra e submete via Web App/PWA as horas trabalhadas e o escopo técnico executado no canteiro de obras, vinculando evidências e fotos."
    },
    "RF05": {
        "nome": "Solicitar prévia de fechamento",
        "oe": "OE2", "car": "CAR-03", "uc": "UC04", "us": "US05",
        "role": "ADMIN_FINANCEIRO", "mvp": "MVP", "quad": "Q2",
        "vb": "4", "ec": "3,33 (3 — Alto)", "ip": "1,20",
        "rns": ["RN25", "RN31"],
        "rnfs": ["RNF05", "RNF06", "RNF10"],
        "ct": "CT-M2-01",
        "acao": "O Administrador Financeiro consolida uma prévia analítica da competência com a apuração automatizada de diárias técnicas e comissões para conferência supervisionada."
    },
    "RF06": {
        "nome": "Homologar fechamento financeiro",
        "oe": "OE2", "car": "CAR-03", "uc": "UC04", "us": "US06",
        "role": "ADMIN_FINANCEIRO", "mvp": "MVP", "quad": "Q1",
        "vb": "4", "ec": "2,33 (2 — Moderado)", "ip": "1,72",
        "rns": ["RN08", "RN17"],
        "rnfs": ["RNF05", "RNF06", "RNF10"],
        "ct": "CT-M2-02",
        "acao": "O Administrador Financeiro homologa definitivamente o lote de competência dos contratos selecionados, bloqueando apontamentos contra modificações e emitindo o extrato final."
    },
    "RF07": {
        "nome": "Submeter solicitação de reembolso",
        "oe": "OE2", "car": "CAR-04", "uc": "UC05", "us": "US07",
        "role": "TECNICO_CAMPO / GESTOR_OBRAS", "mvp": "MVP", "quad": "Q1",
        "vb": "4", "ec": "2,00 (2 — Moderado)", "ip": "2,00",
        "rns": ["RN06", "RN09"],
        "rnfs": ["RNF07"],
        "ct": "CT-M2-03",
        "acao": "O colaborador de campo solicita o reembolso de despesa operacional autorizada vinculada a um contrato ativo, anexando compulsoriamente comprovante fiscal digitalizado."
    },
    "RF08": {
        "nome": "Deliberar solicitação de reembolso",
        "oe": "OE2", "car": "CAR-04", "uc": "UC05", "us": "US08",
        "role": "ADMIN_FINANCEIRO", "mvp": "MVP", "quad": "Q1",
        "vb": "4", "ec": "2,00 (2 — Moderado)", "ip": "2,00",
        "rns": ["RN07", "RN27"],
        "rnfs": ["RNF06"],
        "ct": "CT-M2-04",
        "acao": "O Administrador Financeiro analisa reembolsos pendentes, deferindo ou indeferindo com parecer formal obrigatório em caso de recusa e limitação ao teto fiscal."
    },
    "RF09": {
        "nome": "Apropriar custos operacionais",
        "oe": "OE3", "car": "CAR-05", "uc": "UC06", "us": "US09",
        "role": "ADMIN_FINANCEIRO", "mvp": "MVP", "quad": "Q2",
        "vb": "3", "ec": "3,33 (3 — Alto)", "ip": "0,90",
        "rns": ["RN05", "RN09", "RN10", "RN11"],
        "rnfs": ["RNF10", "RNF11"],
        "ct": "CT-M3-01",
        "acao": "O Administrador Financeiro aloca os valores de diárias e reembolsos homologados aos respectivos contratos de obra e centros de custo com consistência transacional ACID."
    },
    "RF10": {
        "nome": "Consultar rastreabilidade de custos",
        "oe": "OE3", "car": "CAR-05", "uc": "UC06", "us": "US10",
        "role": "GESTOR_OBRAS / ADMIN_FINANCEIRO", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "2,00 (2 — Moderado)", "ip": "1,50",
        "rns": ["RN12"],
        "rnfs": ["RNF10"],
        "ct": "CT-M3-02",
        "acao": "Gestores e administradores consultam o detalhamento analítico da origem documental e aprobatória de cada lançamento de custo apropriado ao contrato."
    },
    "RF11": {
        "nome": "Filtrar indicadores de custos",
        "oe": "OE3", "car": "CAR-06", "uc": "UC07", "us": "US11",
        "role": "GESTOR_OBRAS / ADMIN_FINANCEIRO / ADMIN_SISTEMA", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "2,00 (2 — Moderado)", "ip": "1,50",
        "rns": ["RN14"],
        "rnfs": ["RNF09", "RNF10", "RNF12"],
        "ct": "CT-M3-03",
        "acao": "O usuário combina filtros dinâmicos de período, obra, colaborador e categoria de despesa no painel analítico de custos, preservando o sigilo salarial da equipe."
    },
    "RF12": {
        "nome": "Monitorar execução orçamentária",
        "oe": "OE3", "car": "CAR-06", "uc": "UC07", "us": "US12",
        "role": "GESTOR_OBRAS / ADMIN_FINANCEIRO", "mvp": "Pós-MVP", "quad": "Q4",
        "vb": "2", "ec": "3,00 (3 — Alto)", "ip": "0,67",
        "rns": ["RN13"],
        "rnfs": ["RNF09", "RNF10", "RNF12"],
        "ct": "CT-M3-04",
        "acao": "Gestores acompanham em tempo real indicadores comparativos entre o orçamento previsto e os custos reais realizados por contrato e categoria de despesa."
    },
    "RF13": {
        "nome": "Efetuar login no sistema",
        "oe": "OE4", "car": "CAR-07", "uc": "UC08", "us": "US13",
        "role": "TODOS OS USUÁRIOS", "mvp": "MVP", "quad": "Q1",
        "vb": "4", "ec": "1,00 (1 — Baixo)", "ip": "4,00",
        "rns": ["RN15"],
        "rnfs": ["RNF13", "RNF14"],
        "ct": "CT-M4-01",
        "acao": "O usuário autentica-se na aplicação web responsiva fornecendo credenciais corporativas válidas, obtendo token de sessão temporário com seu perfil RBAC associado."
    },
    "RF14": {
        "nome": "Gerenciar perfis de acesso",
        "oe": "OE4", "car": "CAR-07", "uc": "UC08", "us": "US14",
        "role": "ADMIN_SISTEMA", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "2,33 (2 — Moderado)", "ip": "1,29",
        "rns": ["RN16"],
        "rnfs": ["RNF14"],
        "ct": "CT-M4-02",
        "acao": "O Administrador do Sistema atribui ou atualiza os papéis de acesso canônicos dos usuários, aplicando imediatamente as restrições e privilégios da matriz RBAC."
    },
    "RF15": {
        "nome": "Consultar trilha de auditoria",
        "oe": "OE4", "car": "CAR-08", "uc": "UC09", "us": "US15",
        "role": "ADMIN_SISTEMA / ADMIN_FINANCEIRO", "mvp": "Pós-MVP", "quad": "Q4",
        "vb": "2", "ec": "3,00 (3 — Alto)", "ip": "0,67",
        "rns": ["RN17", "RN18", "RN19"],
        "rnfs": ["RNF15", "RNF16", "RNF17"],
        "ct": "CT-M4-03",
        "acao": "Perfis de auditoria consultam o histórico cronológico de operações sensíveis com filtros por data, operador, ação e módulo, exibindo estados anterior e posterior."
    },
    "RF16": {
        "nome": "Exportar relatório de auditoria",
        "oe": "OE4", "car": "CAR-08", "uc": "UC09", "us": "US16",
        "role": "ADMIN_SISTEMA", "mvp": "Pós-MVP", "quad": "Q4",
        "vb": "1", "ec": "3,00 (3 — Alto)", "ip": "0,33",
        "rns": ["RN18", "RN19"],
        "rnfs": ["RNF15", "RNF16", "RNF17"],
        "ct": "CT-M4-04",
        "acao": "O Administrador do Sistema exporta dossiês probatórios de auditoria em formatos PDF/CSV estruturados para atender a exigências legais e fiscais (Artigo 11 da CLT)."
    },
    "RF17": {
        "nome": "Ativar acesso inicial e recuperar credenciais",
        "oe": "OE4", "car": "CAR-07", "uc": "UC08", "us": "US17",
        "role": "TODOS OS USUÁRIOS", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "1,67 (2 — Moderado)", "ip": "1,80",
        "rns": ["RN15"],
        "rnfs": ["RNF14"],
        "ct": "CT-M4-09",
        "acao": "O colaborador ativa sua conta de primeiro acesso ou redefine credenciais esquecidas via link de uso único e temporário (30 minutos) encaminhado ao e-mail institucional."
    },
    "RF18": {
        "nome": "Encerrar sessão manualmente",
        "oe": "OE4", "car": "CAR-07", "uc": "UC08", "us": "US18",
        "role": "TODOS OS USUÁRIOS", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "1,00 (1 — Baixo)", "ip": "3,00",
        "rns": ["RN15"],
        "rnfs": ["RNF13"],
        "ct": "CT-M4-10",
        "acao": "O usuário autenticado encerra voluntariamente sua sessão de uso, provocando a invalidação imediata do token de autenticação no backend."
    },
    "RF19": {
        "nome": "Consultar apontamentos registrados",
        "oe": "OE1", "car": "CAR-02", "uc": "UC02", "us": "US19",
        "role": "TECNICO_CAMPO", "mvp": "MVP", "quad": "Q1",
        "vb": "4", "ec": "1,67 (2 — Moderado)", "ip": "2,40",
        "rns": ["RN16", "RN30"],
        "rnfs": ["RNF04"],
        "ct": "CT-M1-09",
        "acao": "O Técnico de Campo visualiza exclusivamente seus próprios apontamentos sob o princípio do menor privilégio, acompanhando status de homologação e pareceres."
    },
    "RF20": {
        "nome": "Importar presenças homologadas",
        "oe": "OE1", "car": "CAR-09", "uc": "UC03", "us": "US20",
        "role": "ADMIN_FINANCEIRO", "mvp": "Pós-MVP", "quad": "Q4",
        "vb": "2", "ec": "3,00 (3 — Alto)", "ip": "0,67",
        "rns": ["RN10"],
        "rnfs": ["RNF02"],
        "ct": "CT-M1-10",
        "acao": "O Administrador Financeiro importa registros de frequência biométrica homologados do sistema externo Shifton por competência, vinculando-os aos colaboradores."
    },
    "RF21": {
        "nome": "Estornar fechamento financeiro",
        "oe": "OE2", "car": "CAR-03", "uc": "UC04", "us": "US21",
        "role": "ADMIN_FINANCEIRO", "mvp": "Pós-MVP", "quad": "Q4",
        "vb": "2", "ec": "2,67 (3 — Alto)", "ip": "0,75",
        "rns": ["RN08", "RN17"],
        "rnfs": ["RNF08"],
        "ct": "CT-M2-09",
        "acao": "O Administrador Financeiro reabre competência homologada mediante justificativa formal obrigatória de no mínimo 15 caracteres, mantendo histórico auditável."
    },
    "RF22": {
        "nome": "Anexar evidências e geolocalização ao apontamento",
        "oe": "OE1", "car": "CAR-02", "uc": "UC02", "us": "US22",
        "role": "TECNICO_CAMPO", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "2,33 (2 — Moderado)", "ip": "1,29",
        "rns": ["RN24"],
        "rnfs": ["RNF04", "RNF07"],
        "ct": "CT-M1-11",
        "acao": "O Técnico de Campo anexa fotos, recibos e geolocalização do dispositivo ao formulário de apontamento para comprovação objetiva das atividades de campo."
    },
    "RF23": {
        "nome": "Bloquear acesso após tentativas falhas consecutivas",
        "oe": "OE4", "car": "CAR-07", "uc": "UC08", "us": "US23",
        "role": "ADMIN_SISTEMA", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "1,67 (2 — Moderado)", "ip": "1,80",
        "rns": ["RN20"],
        "rnfs": ["RNF14"],
        "ct": "CT-M4-12",
        "acao": "O sistema bloqueia preventivamente por 30 minutos a conta corporativa que acumular 5 tentativas de login com credenciais incorretas em até 15 minutos."
    },
    "RF24": {
        "nome": "Impor renovação periódica de senhas",
        "oe": "OE4", "car": "CAR-07", "uc": "UC08", "us": "US24",
        "role": "ADMIN_SISTEMA", "mvp": "Pós-MVP", "quad": "Q3",
        "vb": "2", "ec": "2,00 (2 — Moderado)", "ip": "1,00",
        "rns": ["RN21"],
        "rnfs": ["RNF14"],
        "ct": "CT-M4-13",
        "acao": "O sistema força a redefinição de senhas com mais de 90 dias de vigência, impedindo a reutilização das últimas 5 senhas adotadas."
    },
    "RF25": {
        "nome": "Cadastrar tipo de contratação do colaborador",
        "oe": "OE1", "car": "CAR-01", "uc": "UC01", "us": "US25",
        "role": "ADMIN_FINANCEIRO", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "1,67 (2 — Moderado)", "ip": "1,80",
        "rns": ["RN22"],
        "rnfs": ["RNF02"],
        "ct": "CT-M1-12",
        "acao": "O Administrador Financeiro define o enquadramento de contratação do profissional (Diarista, CLT ou Prestador de Serviço PJ), balizando as regras de cálculo."
    },
    "RF26": {
        "nome": "Consultar histórico de alterações cadastrais e bancárias",
        "oe": "OE1", "car": "CAR-01", "uc": "UC01", "us": "US26",
        "role": "ADMIN_FINANCEIRO", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "2,33 (2 — Moderado)", "ip": "1,29",
        "rns": ["RN23"],
        "rnfs": ["RNF02"],
        "ct": "CT-M1-13",
        "acao": "Administrador e colaborador visualizam o histórico cronológico de versões da ficha cadastral e bancária, com autor da modificação e carimbo UTC."
    },
    "RF27": {
        "nome": "Configurar tabela de valores de diárias técnicas",
        "oe": "OE2", "car": "CAR-03", "uc": "UC04", "us": "US27",
        "role": "ADMIN_FINANCEIRO", "mvp": "MVP", "quad": "Q1",
        "vb": "4", "ec": "1,67 (2 — Moderado)", "ip": "2,40",
        "rns": ["RN25", "RN31"],
        "rnfs": ["RNF06"],
        "ct": "CT-M2-10",
        "acao": "O Administrador Financeiro parametriza categorias de diárias técnicas com seus valores monetários vigentes e períodos de aplicação para apuração automática."
    },
    "RF28": {
        "nome": "Submeter solicitação de adiantamento operacional",
        "oe": "OE2", "car": "CAR-04", "uc": "UC05", "us": "US28",
        "role": "TECNICO_CAMPO", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "2,00 (2 — Moderado)", "ip": "1,50",
        "rns": ["RN26"],
        "rnfs": ["RNF07"],
        "ct": "CT-M2-11",
        "acao": "O Técnico de Campo registra pedido de liberação prévia de numerário operacional para despesas emergenciais de canteiro vinculadas a um contrato ativo."
    },
    "RF29": {
        "nome": "Deliberar solicitação de adiantamento operacional",
        "oe": "OE2", "car": "CAR-04", "uc": "UC05", "us": "US29",
        "role": "ADMIN_FINANCEIRO", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "2,00 (2 — Moderado)", "ip": "1,50",
        "rns": ["RN27"],
        "rnfs": ["RNF06"],
        "ct": "CT-M2-12",
        "acao": "O Administrador Financeiro analisa adiantamentos pendentes, aprovando a liberação dos recursos ou indeferindo com justificativa registrada e notificação ao autor."
    },
    "RF30": {
        "nome": "Consultar comparativo histórico de custos entre contratos",
        "oe": "OE3", "car": "CAR-05", "uc": "UC06", "us": "US30",
        "role": "GESTOR_OBRAS / ADMIN_FINANCEIRO", "mvp": "Pós-MVP", "quad": "Q4",
        "vb": "2", "ec": "2,67 (3 — Alto)", "ip": "0,75",
        "rns": ["RN28"],
        "rnfs": ["RNF09", "RNF10", "RNF12"],
        "ct": "CT-M3-09",
        "acao": "Gestores comparam séries históricas de despesas e custos apropriados entre contratos de obras similares, subsidiando orçamentos e estimativas futuras."
    },
    "RF31": {
        "nome": "Configurar alertas de execução orçamentária",
        "oe": "OE3", "car": "CAR-06", "uc": "UC07", "us": "US31",
        "role": "GESTOR_OBRAS", "mvp": "Pós-MVP", "quad": "Q4",
        "vb": "2", "ec": "2,67 (3 — Alto)", "ip": "0,75",
        "rns": ["RN29"],
        "rnfs": ["RNF09", "RNF10", "RNF12"],
        "ct": "CT-M3-10",
        "acao": "O Gestor Operacional de Obras parametriza limiares percentuais de consumo orçamentário que disparam avisos preventivos visuais e por e-mail contra desvios."
    },
    "RF32": {
        "nome": "Deliberar apontamento de campo",
        "oe": "OE1", "car": "CAR-02", "uc": "UC02", "us": "US32",
        "role": "GESTOR_OBRAS", "mvp": "MVP", "quad": "Q1",
        "vb": "4", "ec": "1,67 (2 — Moderado)", "ip": "2,40",
        "rns": ["RN02", "RN05", "RN10", "RN30"],
        "rnfs": ["RNF04"],
        "ct": "CT-M1-15",
        "acao": "O Gestor Operacional de Obras delibera sobre apontamentos pendentes da sua alçada, homologando para faturamento ou rejeitando com parecer mínimo de 15 caracteres."
    },
    "RF33": {
        "nome": "Cadastrar contrato de obra",
        "oe": "OE3", "car": "CAR-05", "uc": "UC06", "us": "US33",
        "role": "GESTOR_OBRAS / ADMIN_FINANCEIRO", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "1,67 (2 — Moderado)", "ip": "1,80",
        "rns": ["RN09", "RN11"],
        "rnfs": ["RNF10", "RNF11"],
        "ct": "CT-M3-11",
        "acao": "O Gestor ou Administrador cadastra novos contratos de obras, especificando cliente, prazos de vigência, valor global e gestor técnico responsável."
    },
    "RF34": {
        "nome": "Cadastrar centro de custo de obra",
        "oe": "OE3", "car": "CAR-06", "uc": "UC07", "us": "US34",
        "role": "GESTOR_OBRAS", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "1,67 (2 — Moderado)", "ip": "1,80",
        "rns": ["RN09", "RN11"],
        "rnfs": ["RNF09", "RNF10"],
        "ct": "CT-M3-12",
        "acao": "O Gestor Operacional cadastra centros de custos associados aos contratos ativos, habilitando o rateio direcionado de mão de obra e despesas operacionais."
    },
    "RF35": {
        "nome": "Retificar apontamento de campo",
        "oe": "OE1", "car": "CAR-02", "uc": "UC02", "us": "US35",
        "role": "TECNICO_CAMPO", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "1,67 (2 — Moderado)", "ip": "1,80",
        "rns": ["RN02"],
        "rnfs": ["RNF04", "RNF07"],
        "ct": "CT-M1-16",
        "acao": "O Técnico de Campo retifica dados ou anexos de apontamento pendente (em até 5 dias úteis) ou corrige e reenvia registro rejeitado para nova homologação."
    },
    "RF36": {
        "nome": "Exportar dados consolidados em planilha",
        "oe": "OE1", "car": "CAR-10", "uc": "UC10", "us": "US36",
        "role": "ADMIN_FINANCEIRO", "mvp": "Pós-MVP", "quad": "Q3",
        "vb": "2", "ec": "1,67 (2 — Moderado)", "ip": "1,20",
        "rns": [],
        "rnfs": ["RNF02"],
        "ct": "CT-M1-17",
        "acao": "O Administrador Financeiro exporta apontamentos, presenças e despesas consolidadas em planilhas abertas CSV e XLSX para conciliação contábil legada."
    },
    "RF37": {
        "nome": "Atualizar contrato de obra",
        "oe": "OE3", "car": "CAR-05", "uc": "UC06", "us": "US33",
        "role": "GESTOR_OBRAS / ADMIN_FINANCEIRO", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "1,67 (2 — Moderado)", "ip": "1,80",
        "rns": ["RN09", "RN11"],
        "rnfs": ["RNF10", "RNF11"],
        "ct": "CT-M3-13",
        "acao": "O Gestor ou Administrador atualiza dados contratuais vigentes (aditivos de prazo, valor e responsáveis), mantendo a rastreabilidade histórica."
    },
    "RF38": {
        "nome": "Consultar contratos de obra",
        "oe": "OE3", "car": "CAR-05", "uc": "UC06", "us": "US33",
        "role": "GESTOR_OBRAS / ADMIN_FINANCEIRO", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "1,00 (1 — Baixo)", "ip": "3,00",
        "rns": [],
        "rnfs": ["RNF10"],
        "ct": "CT-M3-14",
        "acao": "Usuários autorizados consultam a listagem e o detalhamento dos contratos de obras ativos, concluídos ou suspensos, com filtros por cliente e período."
    },
    "RF39": {
        "nome": "Atualizar centro de custo de obra",
        "oe": "OE3", "car": "CAR-06", "uc": "UC07", "us": "US34",
        "role": "GESTOR_OBRAS", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "1,67 (2 — Moderado)", "ip": "1,80",
        "rns": ["RN09", "RN11"],
        "rnfs": ["RNF09", "RNF10"],
        "ct": "CT-M3-15",
        "acao": "O Gestor Operacional altera parâmetros e nomenclaturas de centros de custo existentes sem quebrar vínculos com lançamentos históricos apropriados."
    },
    "RF40": {
        "nome": "Definir tetos orçamentários de obra",
        "oe": "OE3", "car": "CAR-06", "uc": "UC07", "us": "US34",
        "role": "GESTOR_OBRAS", "mvp": "MVP", "quad": "Q1",
        "vb": "3", "ec": "2,00 (2 — Moderado)", "ip": "1,50",
        "rns": ["RN13", "RN29"],
        "rnfs": ["RNF09", "RNF10"],
        "ct": "CT-M3-16",
        "acao": "O Gestor Operacional estipula tetos monetários orçados por categoria de despesa, permitindo apuração do orçamento global previsto e acionamento de alertas."
    }
}

# 2. Regras de Negócio (RN01 a RN31)
RNS_DATA = [
    {
        "code": "RN01",
        "title": "Unicidade e Validação Cadastral por CPF",
        "oe": "OE1",
        "modulo": "Módulo 1",
        "car": "CAR-01",
        "cat": "Integridade Cadastral",
        "rfs": ["RF01", "RF02"],
        "enunciado": "Os dados cadastrais de colaboradores utilizam o CPF como identificador unívoco no sistema, validando os dígitos verificadores pelo algoritmo oficial e impedindo registros duplicados."
    },
    {
        "code": "RN02",
        "title": "Janela Temporal para Submissão e Edição de Apontamento",
        "oe": "OE1",
        "modulo": "Módulo 1",
        "car": "CAR-02",
        "cat": "Controle de Apontamentos",
        "rfs": ["RF04", "RF19", "RF32", "RF35"],
        "enunciado": "O apontamento diário de campo (RVT) deve ser submetido até as 23h59 do dia subsequente à prestação do serviço; após submissão e homologação, a edição é bloqueada, permitindo retificação apenas após deliberação de recusa com justificativa obrigatória."
    },
    {
        "code": "RN03",
        "title": "Validação Prévia de Dados Bancários e Chave Pix",
        "oe": "OE1",
        "modulo": "Módulo 1",
        "car": "CAR-01",
        "cat": "Validação Financeira",
        "rfs": ["RF01"],
        "enunciado": "Contas bancárias cadastradas devem passar por validação de formato de agência e conta conforme padrão Febraban, além de verificação de sintaxe para chaves Pix."
    },
    {
        "code": "RN04",
        "title": "Revogação Automática de Credenciais em Afastamento ou Rescisão",
        "oe": "OE1",
        "modulo": "Módulo 1",
        "car": "CAR-01",
        "cat": "Ciclo de Vida & Acesso",
        "rfs": ["RF03"],
        "enunciado": "O registro de rescisão ou afastamento funcional com status inativo revoga de forma imediata e compulsória todas as credenciais ativas e encerra as sessões abertas do colaborador."
    },
    {
        "code": "RN05",
        "title": "Pré-requisito de Homologação de Apontamentos para Fechamento",
        "oe": "OE2",
        "modulo": "Módulo 2",
        "car": "CAR-03",
        "cat": "Fluxo de Aprovação",
        "rfs": ["RF05", "RF06"],
        "enunciado": "A rotina de consolidação e homologação financeira processa exclusivamente apontamentos de campo que tenham sido formalmente homologados pelo Gestor Operacional de Obras."
    },
    {
        "code": "RN06",
        "title": "Janela Temporal para Prestação de Contas de Reembolso",
        "oe": "OE2",
        "modulo": "Módulo 2",
        "car": "CAR-04",
        "cat": "Controle Temporal",
        "rfs": ["RF07", "RF28"],
        "enunciado": "Despesas operacionais elegíveis a reembolso devem ser submetidas em até 5 dias úteis após a realização do gasto, acompanhadas obrigatoriamente de comprovante fiscal."
    },
    {
        "code": "RN07",
        "title": "Bloqueio e Justificativa Obrigatória em Recusa de Despesa",
        "oe": "OE2",
        "modulo": "Módulo 2",
        "car": "CAR-04",
        "cat": "Imutabilidade Contábil",
        "rfs": ["RF08", "RF29"],
        "enunciado": "A recusa de despesa pelo Administrador Financeiro exige parecer com no mínimo 20 caracteres; despesas homologadas não podem sofrer exclusão lógica."
    },
    {
        "code": "RN08",
        "title": "Comprovante Fiscal Obrigatório para Homologação de Reembolso",
        "oe": "OE2",
        "modulo": "Módulo 2",
        "car": "CAR-04",
        "cat": "Comprovação Fiscal",
        "rfs": ["RF07", "RF08", "RF28", "RF29"],
        "enunciado": "Nenhuma despesa ou prestação de contas de adiantamento pode ser homologada para pagamento sem ao menos um comprovante fiscal legível anexado e validado."
    },
    {
        "code": "RN09",
        "title": "Rateio Proporcional de Custos Indiretos por Contrato",
        "oe": "OE3",
        "modulo": "Módulo 3",
        "car": "CAR-05",
        "cat": "Apropriação & Rateio",
        "rfs": ["RF07", "RF09", "RF28", "RF33", "RF34", "RF37", "RF39"],
        "enunciado": "Custos de equipes que atuam simultaneamente em mais de um contrato ativo devem ser rateados proporcionalmente às horas trabalhadas registradas em cada obra."
    },
    {
        "code": "RN10",
        "title": "Garantia de Consistência Transacional no Rateio de Custos",
        "oe": "OE3",
        "modulo": "Módulo 3",
        "car": "CAR-05",
        "cat": "Consistência Transacional",
        "rfs": ["RF09", "RF37"],
        "enunciado": "A gravação do rateio financeiro entre centros de custo deve ser atômica (ACID); qualquer falha em uma das parcelas reverte a operação integralmente."
    },
    {
        "code": "RN11",
        "title": "Parametrização Obrigatória de Centros de Custo por Contrato",
        "oe": "OE3",
        "modulo": "Módulo 3",
        "car": "CAR-05",
        "cat": "Parametrização Orçamentária",
        "rfs": ["RF10", "RF30", "RF38"],
        "enunciado": "Todo contrato cadastrado deve possuir ao menos um centro de custo vinculado antes de receber qualquer apropriação de despesa ou diária técnica."
    },
    {
        "code": "RN12",
        "title": "Segregação de Despesas Administrativas e Operacionais",
        "oe": "OE3",
        "modulo": "Módulo 3",
        "car": "CAR-05",
        "cat": "Segregação de Despesas",
        "rfs": ["RF09", "RF10"],
        "enunciado": "Custos de deslocamento e hospedagem são alocados separadamente das despesas de materiais operacionais, viabilizando relatórios segregados por natureza de gasto."
    },
    {
        "code": "RN13",
        "title": "Bloqueio Preventivo por Extrapolação de Teto Orçamentário",
        "oe": "OE3",
        "modulo": "Módulo 3",
        "car": "CAR-06",
        "cat": "Controle de Teto Orçamentário",
        "rfs": ["RF11", "RF12", "RF31", "RF40"],
        "enunciado": "Lançamentos de despesas operacionais que ultrapassem 100% do teto orçamentário parametrizado para o contrato demandam autorização formal com justificativa registrada."
    },
    {
        "code": "RN14",
        "title": "Sigilo e Não-Exposição de Remunerações Individuais em Painéis",
        "oe": "OE3",
        "modulo": "Módulo 3",
        "car": "CAR-06",
        "cat": "Sigilo & Privacidade Salarial",
        "rfs": ["RF11", "RF12", "RF34", "RF39"],
        "enunciado": "Painéis analíticos acessíveis por gestores operacionais exibem montantes agregados de custos por contrato, ocultando remunerações e dados bancários individuais dos colaboradores."
    },
    {
        "code": "RN15",
        "title": "Autenticação por JWT com Sessão Temporal Limitada",
        "oe": "OE4",
        "modulo": "Módulo 4",
        "car": "CAR-07",
        "cat": "Segurança de Autenticação",
        "rfs": ["RF13", "RF17", "RF18"],
        "enunciado": "Tokens de autenticação JWT possuem validade máxima estrita de 8 horas, exigindo nova autenticação após expiração; links de ativação ou recuperação expiram em 30 minutos."
    },
    {
        "code": "RN16",
        "title": "Princípio do Menor Privilégio e Segregação de Funções (SoD)",
        "oe": "OE4",
        "modulo": "Módulo 4",
        "car": "CAR-07",
        "cat": "Autorização RBAC Estrita",
        "rfs": ["RF14"],
        "enunciado": "Cada perfil de usuário acessa estritamente os recursos indispensáveis à sua função; perfis operacionais de campo não possuem acesso a rotinas financeiras de homologação."
    },
    {
        "code": "RN17",
        "title": "Registro Atômico de Mutações em Trilha de Auditoria",
        "oe": "OE4",
        "modulo": "Módulo 4",
        "car": "CAR-08",
        "cat": "Imutabilidade de Trilha de Auditoria",
        "rfs": ["RF15", "RF16"],
        "enunciado": "Toda mutação cadastral, financeira ou de aprovação gera registro síncrono e obrigatório em trilha de auditoria na mesma transação atômica do banco de dados."
    },
    {
        "code": "RN18",
        "title": "Composição Mínima Obrigatória do Registro de Log de Auditoria",
        "oe": "OE4",
        "modulo": "Módulo 4",
        "car": "CAR-08",
        "cat": "Composição Atômica de Log UTC",
        "rfs": ["RF15", "RF16"],
        "enunciado": "Cada log registra compulsoriamente: carimbo de data/hora em UTC, identificador do usuário autor, endereço IP, entidade afetada, ação executada e snapshot de antes/depois dos dados."
    },
    {
        "code": "RN19",
        "title": "Política de Retenção Quinquenal de Logs",
        "oe": "OE4",
        "modulo": "Módulo 4",
        "car": "CAR-08",
        "cat": "Retenção Quinquenal CLT/LGPD",
        "rfs": ["RF15", "RF16"],
        "enunciado": "Os registros da trilha de auditoria são mantidos de forma íntegra por no mínimo 5 anos fiscais (1.825 dias), assegurando conformidade defensiva com o Artigo 11 da CLT e Artigo 16 da LGPD."
    },
    {
        "code": "RN20",
        "title": "Limite de Tentativas de Autenticação",
        "oe": "OE4",
        "modulo": "Módulo 4",
        "car": "CAR-07",
        "cat": "Proteção Anti-Brute Force",
        "rfs": ["RF23"],
        "enunciado": "O acúmulo de 5 tentativas consecutivas de login incorretas em uma janela de 15 minutos bloqueia temporariamente a conta corporativa por 30 minutos."
    },
    {
        "code": "RN21",
        "title": "Política de Expiração e Histórico de Senhas",
        "oe": "OE4",
        "modulo": "Módulo 4",
        "car": "CAR-07",
        "cat": "Política de Senhas & Histórico",
        "rfs": ["RF24"],
        "enunciado": "Credenciais de acesso possuem validade máxima de 90 dias, exigindo redefinição mandatória e impedindo a reutilização de qualquer uma das últimas 5 senhas adotadas."
    },
    {
        "code": "RN22",
        "title": "Tipos de Contratação Válidos",
        "oe": "OE1",
        "modulo": "Módulo 1",
        "car": "CAR-01",
        "cat": "Enquadramento Contratual",
        "rfs": ["RF01", "RF25"],
        "enunciado": "O sistema restringe o vínculo de contratação às opções Diarista, CLT ou Prestador de Serviço (PJ), aplicando regras específicas de apuração de diárias e rateio para cada categoria."
    },
    {
        "code": "RN23",
        "title": "Versionamento Obrigatório de Dados Cadastrais e Bancários",
        "oe": "OE1",
        "modulo": "Módulo 1",
        "car": "CAR-01",
        "cat": "Versionamento Cadastral",
        "rfs": ["RF02", "RF26"],
        "enunciado": "Alterações em campos de dados pessoais, bancários ou funcionais geram novo snapshot na tabela histórica com carimbo temporal UTC e identificador do autor, sem sobrescrever valores anteriores."
    },
    {
        "code": "RN24",
        "title": "Captura de Geolocalização Não Bloqueante",
        "oe": "OE1",
        "modulo": "Módulo 1",
        "car": "CAR-02",
        "cat": "Geolocalização Resiliente",
        "rfs": ["RF04", "RF22"],
        "enunciado": "O sistema tenta capturar coordenadas geográficas no momento do anexo de evidências; caso a permissão seja negada ou o sinal GPS indisponível, o anexo prossegue normalmente com a sinalização correspondente."
    },
    {
        "code": "RN25",
        "title": "Vigência dos Valores de Diárias Técnicas",
        "oe": "OE2",
        "modulo": "Módulo 2",
        "car": "CAR-03",
        "cat": "Tabela de Diárias Vigente",
        "rfs": ["RF05", "RF27"],
        "enunciado": "O cálculo de prévia e fechamento utiliza estritamente os valores nominais de diárias técnicas vigentes na competência de realização da atividade de campo."
    },
    {
        "code": "RN26",
        "title": "Elegibilidade do Adiantamento Operacional",
        "oe": "OE2",
        "modulo": "Módulo 2",
        "car": "CAR-04",
        "cat": "Elegibilidade de Adiantamento",
        "rfs": ["RF28"],
        "enunciado": "A solicitação de adiantamento operacional é restrita a colaboradores alocados em contratos ativos e demanda justificativa de aplicação dos recursos."
    },
    {
        "code": "RN27",
        "title": "Notificação de Pendências Financeiras",
        "oe": "OE2",
        "modulo": "Módulo 2",
        "car": "CAR-04",
        "cat": "Mensageria & Notificação",
        "rfs": ["RF08", "RF29"],
        "enunciado": "A decisão de homologação ou recusa em solicitações de reembolso e adiantamento dispara notificação automática de status para o colaborador solicitante."
    },
    {
        "code": "RN28",
        "title": "Comparativo Histórico de Custos",
        "oe": "OE3",
        "modulo": "Módulo 3",
        "car": "CAR-05",
        "cat": "Base Histórica de Custos",
        "rfs": ["RF30"],
        "enunciado": "Análises comparativas de despesas históricas consolidam dados de contratos com ao menos um fechamento financeiro previamente homologado."
    },
    {
        "code": "RN29",
        "title": "Disparo de Alertas Preventivos de Extrapolação Orçamentária",
        "oe": "OE3",
        "modulo": "Módulo 3",
        "car": "CAR-06",
        "cat": "Alertas Preventivos de Desvio",
        "rfs": ["RF31", "RF40"],
        "enunciado": "Quando o montante de custos apropriados a uma categoria atinge o limiar percentual parametrizado pelo gestor, o sistema emite avisos visuais no painel e alertas por e-mail."
    },
    {
        "code": "RN30",
        "title": "Justificativa Obrigatória e Bloqueio na Deliberação de Apontamentos",
        "oe": "OE1",
        "modulo": "Módulo 1",
        "car": "CAR-02",
        "cat": "Justificativa Obrigatória & Bloqueio",
        "rfs": ["RF19", "RF32", "RF35"],
        "enunciado": "O Gestor Operacional de Obras deve registrar compulsoriamente parecer justificatório com no mínimo 15 caracteres ao rejeitar um apontamento de campo. A aprovação transiciona o status para 'Homologado' e bloqueia compulsoriamente a edição do registro pelo colaborador (RN02), habilitando-o para as rotinas financeiras (RN05)."
    },
    {
        "code": "RN31",
        "title": "Parametrização e Fórmulas de Diárias e Comissões Técnicas de Campo",
        "oe": "OE2",
        "modulo": "Módulo 2",
        "car": "CAR-03",
        "cat": "Fórmula Paramétrica de Remuneração",
        "rfs": ["RF05", "RF27"],
        "enunciado": "A apuração de remuneração variável de campo combina a quantidade de diárias homologadas multiplicadas pelo valor vigente com os percentuais de comissão pactuados por contrato."
    }
]

# 3. Requisitos Não Funcionais (RNF01 a RNF20)
RNFS_DATA = [
    {
        "code": "RNF01",
        "title": "Operar em modo offline para coleta de dados em canteiros sem conectividade",
        "urps_class": "reliability",
        "urps_label": "URPS+ Confiabilidade",
        "sommerville": "Produto — Confiabilidade",
        "scope_label": "Módulo 1 / OE1",
        "is_transversal": False,
        "rfs": ["RF04", "RF19", "RF22", "RF32", "RF35"],
        "metric": "A aplicação web responsiva (Web App / PWA) em dispositivo móvel deve armazenar localmente, sem perda de dados, no mínimo 100 apontamentos com fotos compactadas sem sinal de rede; exibir alerta visual quando o armazenamento local atingir 80% da capacidade; e sincronizar automaticamente em até 30 segundos após restabelecida a conexão."
    },
    {
        "code": "RNF02",
        "title": "Garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos",
        "urps_class": "performance",
        "urps_label": "URPS+ Desempenho",
        "sommerville": "Produto — Desempenho",
        "scope_label": "Módulo 1 / OE1",
        "is_transversal": False,
        "rfs": ["RF01", "RF02", "RF03", "RF20", "RF25", "RF26", "RF36"],
        "metric": "O tempo de resposta para busca, paginação e renderização da ficha unificada de qualquer colaborador deve ser inferior ou igual a 2,0 segundos em 95% das requisições sob carga nominal (concorrência típica de até 50 usuários simultâneos autenticados a 10 req/s)."
    },
    {
        "code": "RNF03",
        "title": "Proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito",
        "urps_class": "security",
        "urps_label": "URPS+ Segurança (+)",
        "sommerville": "Produto — Segurança",
        "scope_label": "Transversal (T) / OE1",
        "is_transversal": True,
        "rfs": ["RF01", "RF02", "RF03", "RF13", "RF23"],
        "metric": "100% dos dados pessoais e cadastrais confidenciais (CPF, dados de conta bancária, chave Pix e remuneração) armazenados em banco devem utilizar criptografia AES-256 em repouso, e 100% das comunicações de rede devem transitar sob protocolo TLS 1.3 (em conformidade com o princípio de segurança do Art. 6º, VII da LGPD)."
    },
    {
        "code": "RNF04",
        "title": "Garantir usabilidade e agilidade no preenchimento de apontamentos de campo",
        "urps_class": "usability",
        "urps_label": "URPS+ Usabilidade",
        "sommerville": "Produto — Usabilidade",
        "scope_label": "Módulo 1 / OE1",
        "is_transversal": False,
        "rfs": ["RF04", "RF19", "RF22", "RF32", "RF35"],
        "metric": "O preenchimento completo de um apontamento diário de campo deve ser concluído por usuários em primeiro uso, sem suporte externo ou treinamento prévio, em no máximo 5 passos/telas, com taxa de conclusão bem-sucedida ≥ 90% em teste de usabilidade."
    },
    {
        "code": "RNF05",
        "title": "Processar rotina de fechamento financeiro em até 5,0 segundos",
        "urps_class": "performance",
        "urps_label": "URPS+ Desempenho",
        "sommerville": "Produto — Desempenho",
        "scope_label": "Módulo 2 / OE2",
        "is_transversal": False,
        "rfs": ["RF05", "RF06", "RF21", "RF27"],
        "metric": "O cálculo consolidado da prévia ou homologação da competência de fechamento contendo até 500 apontamentos e 200 despesas deve ser concluído pelo backend em tempo inferior ou igual a 5,0 segundos em 95% das execuções sob carga nominal."
    },
    {
        "code": "RNF06",
        "title": "Garantir exatidão aritmética centesimal em cálculos monetários",
        "urps_class": "reliability",
        "urps_label": "URPS+ Confiabilidade",
        "sommerville": "Produto — Confiabilidade",
        "scope_label": "Módulo 2 / OE2",
        "is_transversal": False,
        "rfs": ["RF05", "RF06", "RF07", "RF08", "RF21", "RF27", "RF28", "RF29"],
        "metric": "Todas as rotinas de cálculo de diárias, comissões, reembolsos e rateios devem operar com representação decimal exata (tipo Decimal/Numeric com no mínimo 4 casas de precisão interna e arredondamento padrão bancário para 2 casas), garantindo divergência zero em auditoria centesimal."
    },
    {
        "code": "RNF07",
        "title": "Garantir robustez e segurança no processamento e armazenamento de comprovantes",
        "urps_class": "security",
        "urps_label": "URPS+ Segurança / Usabilidade",
        "sommerville": "Produto — Segurança",
        "scope_label": "Módulo 2 / OE2",
        "is_transversal": False,
        "rfs": ["RF04", "RF07", "RF08", "RF22", "RF28", "RF29", "RF35"],
        "metric": "Arquivos de comprovantes devem aceitar formatos PDF, JPEG e PNG com validação estrita de magic bytes no backend, tamanho máximo de 10 MB por arquivo e escaneamento preventivo contra ameaças, com compressão automática sem perda de legibilidade fiscal."
    },
    {
        "code": "RNF08",
        "title": "Garantir rastreabilidade probatória e não-repúdio em operações de estorno",
        "urps_class": "security",
        "urps_label": "URPS+ Segurança (+)",
        "sommerville": "Produto — Segurança",
        "scope_label": "Módulo 2 / OE2",
        "is_transversal": False,
        "rfs": ["RF06", "RF08", "RF21", "RF29"],
        "metric": "Operações de estorno, cancelamento ou retificação financeira exigem registro síncrono de justificativa textual com no mínimo 20 caracteres, gerando log de auditoria append-only associado ao identificador do usuário e IP de origem antes da confirmação da mutação."
    },
    {
        "code": "RNF09",
        "title": "Garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos",
        "urps_class": "performance",
        "urps_label": "URPS+ Desempenho",
        "sommerville": "Produto — Desempenho",
        "scope_label": "Módulo 3 / OE3",
        "is_transversal": False,
        "rfs": ["RF09", "RF10", "RF11", "RF12", "RF30", "RF31", "RF33", "RF34", "RF37", "RF38", "RF39", "RF40"],
        "metric": "A aplicação de filtros por período, contrato e centro de custo no painel analítico deve carregar e renderizar os gráficos e tabelas agregadas em tempo inferior ou igual a 3,0 segundos em 95% das consultas para bases históricas de até 10.000 lançamentos."
    },
    {
        "code": "RNF10",
        "title": "Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais",
        "urps_class": "security",
        "urps_label": "URPS+ Segurança / Legal",
        "sommerville": "Externo — Legislativo (LGPD)",
        "scope_label": "Módulo 3 / OE3",
        "is_transversal": False,
        "rfs": ["RF05", "RF06", "RF09", "RF10", "RF11", "RF12", "RF30", "RF31", "RF33", "RF34", "RF37", "RF38", "RF39", "RF40"],
        "metric": "Consultas analíticas executadas por perfis operacionais ou de gestão de obra não devem expor valores salariais individuais ou dados bancários de colaboradores, exibindo unicamente montantes agregados de mão de obra."
    },
    {
        "code": "RNF11",
        "title": "Garantir consistência transacional ACID na apropriação concorrente de custos",
        "urps_class": "reliability",
        "urps_label": "URPS+ Confiabilidade",
        "sommerville": "Produto — Confiabilidade",
        "scope_label": "Módulo 3 / OE3",
        "is_transversal": False,
        "rfs": ["RF09", "RF10", "RF30", "RF33", "RF37", "RF38"],
        "metric": "A rotina de rateio e apropriação de custos diretos deve ser executada sob nível de isolamento Serializable/Repeatable Read no banco de dados PostgreSQL, impedindo lançamentos duplicados ou rateios parciais em concorrência."
    },
    {
        "code": "RNF12",
        "title": "Assegurar responsividade do painel em resoluções de desktop e tablet",
        "urps_class": "usability",
        "urps_label": "URPS+ Usabilidade",
        "sommerville": "Produto — Usabilidade",
        "scope_label": "Módulo 3 / OE3",
        "is_transversal": False,
        "rfs": ["RF11", "RF12", "RF30", "RF31", "RF34", "RF39", "RF40"],
        "metric": "O painel analítico e telas de consulta de custos devem ser totalmente navegáveis e visualmente consistentes em larguras de tela a partir de 768 px (tablets verticais) e 1024 px (tablets horizontais e desktops)."
    },
    {
        "code": "RNF13",
        "title": "Expirar token de acesso temporário em no máximo 8 horas",
        "urps_class": "security",
        "urps_label": "URPS+ Segurança (+)",
        "sommerville": "Produto — Segurança",
        "scope_label": "Módulo 4 / OE4",
        "is_transversal": False,
        "rfs": ["RF13", "RF17", "RF18", "RF23"],
        "metric": "Tokens de autenticação JWT possuem expiração máxima estrita de 8 horas (28.800 segundos), exigindo nova autenticação após o término do período; requisições com token expirado retornam HTTP 401 Unauthorized."
    },
    {
        "code": "RNF14",
        "title": "Validar perfil de autorização em 100% das rotas de API com dados protegidos",
        "urps_class": "security",
        "urps_label": "URPS+ Segurança / Legal",
        "sommerville": "Externo — Legislativo (LGPD)",
        "scope_label": "Transversal (T) / OE4",
        "is_transversal": True,
        "rfs": ["RF13", "RF14", "RF17", "RF18", "RF23", "RF24"],
        "metric": "100% dos endpoints de backend que manipulam dados corporativos passam por guard/filtro RBAC que valida papel e competência do usuário, rejeitando tentativas não autorizadas com HTTP 403 Forbidden em menos de 15 ms."
    },
    {
        "code": "RNF15",
        "title": "Garantir consistência transacional e atomicidade na gravação de logs de auditoria",
        "urps_class": "reliability",
        "urps_label": "URPS+ Confiabilidade",
        "sommerville": "Produto — Confiabilidade",
        "scope_label": "Transversal (T) / OE4",
        "is_transversal": True,
        "rfs": ["RF15", "RF16"],
        "metric": "Em 100% das mutações cadastrais e financeiras, o registro correspondente de auditoria é confirmado na mesma transação atômica ACID do banco de dados, com perda zero e latência de persistência ≤ 50 ms."
    },
    {
        "code": "RNF16",
        "title": "Reter registros de auditoria por no mínimo 5 anos contra expurgo físico indevido",
        "urps_class": "reliability",
        "urps_label": "URPS+ Confiabilidade / Legal",
        "sommerville": "Externo — Legal (CLT Art. 11 / LGPD)",
        "scope_label": "Transversal (T) / OE4",
        "is_transversal": True,
        "rfs": ["RF15", "RF16"],
        "metric": "Inexistência comprovada de rotinas ou permissões de exclusão de registros com tempo de retenção inferior a 5 anos fiscais (1.825 dias), garantindo substrato defensivo em conformidade com o Artigo 11 da CLT."
    },
    {
        "code": "RNF17",
        "title": "Realizar backup automático diário com restauração verificada",
        "urps_class": "reliability",
        "urps_label": "URPS+ Confiabilidade",
        "sommerville": "Produto — Confiabilidade",
        "scope_label": "Transversal (T) / OE4",
        "is_transversal": True,
        "rfs": ["RF15", "RF16"],
        "metric": "Rotina automatizada de backup completo diário do banco de dados e arquivos de mídia, com retenção de 30 dias e testes automatizados periódicos de restauração em até 4 horas com perda máxima (RPO) de 24 horas."
    },
    {
        "code": "RNF18",
        "title": "Garantir disponibilidade mínima mensal do sistema",
        "urps_class": "reliability",
        "urps_label": "URPS+ Confiabilidade",
        "sommerville": "Produto — Confiabilidade",
        "scope_label": "Transversal (T) / OE4",
        "is_transversal": True,
        "rfs": ["RF01", "RF04", "RF05", "RF09", "RF13"],
        "metric": "Disponibilidade mínima mensal de 99,5%, medida por monitoramento sintético contínuo, com avisos de janelas de manutenção com antecedência mínima de 48 horas e execução restrita à madrugada (22h às 06h)."
    },
    {
        "code": "RNF19",
        "title": "Garantir acessibilidade digital nas interfaces do sistema",
        "urps_class": "usability",
        "urps_label": "URPS+ Usabilidade",
        "sommerville": "Produto — Usabilidade (WCAG)",
        "scope_label": "Transversal (T) / OE1",
        "is_transversal": True,
        "rfs": ["RF01", "RF02", "RF03", "RF04", "RF11", "RF12"],
        "metric": "Formulários e telas de apontamento e consulta devem atender aos critérios de conformidade WCAG 2.1 nível AA, incluindo navegação integral por teclado, contraste mínimo de 4.5:1 e rotulagem acessível ARIA sem erros críticos."
    },
    {
        "code": "RNF20",
        "title": "Validar integridade de payloads em todas as rotas de escrita da API",
        "urps_class": "reliability",
        "urps_label": "URPS+ Confiabilidade / Segurança",
        "sommerville": "Produto — Confiabilidade",
        "scope_label": "Transversal (T) / OE4",
        "is_transversal": True,
        "rfs": ["RF01", "RF04", "RF07", "RF09", "RF13", "RF14"],
        "metric": "100% das requisições POST/PUT/PATCH são submetidas a validação formal de schema e sanitização contra injection antes do processamento, respondendo HTTP 400 Bad Request com detalhes estruturados em caso de inconsistência."
    }
]

# Mapas de nomes para tags bidirecionais
RN_NAMES = {rn["code"]: rn["title"] for rn in RNS_DATA}
RNF_NAMES = {rnf["code"]: rnf["title"] for rnf in RNFS_DATA}

# 4. Critérios de Aceitação Canônicos dos 40 RFs
try:
    from scripts.rf_criteria import RF_CRITERIA
    crit_map = RF_CRITERIA
except ImportError:
    import sys, os
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    from rf_criteria import RF_CRITERIA
    crit_map = RF_CRITERIA

print(f'Captured {len(crit_map)} acceptance criteria')

# 5. Montagem do documento unificado index.md
lines = []

lines.append('<a id="visao-geral-e-modelo-metodologico"></a>')
lines.append('# Catálogo Geral de Requisitos de Software')
lines.append('')
lines.append('Este capítulo consolida o **Catálogo Geral de Requisitos de Software** do sistema ***DUOC Finance***, unificando a especificação detalhada dos **Requisitos Funcionais (RF01 a RF40)**, das **Regras de Negócio (RN01 a RN31)** e dos **Requisitos Não Funcionais (RNF01 a RNF20)** em torno dos quatro **Objetivos Específicos (OE)** e suas respectivas **Características (CAR)**, definidas na [Solução Proposta](../visao-produto/solucao-proposta.md#oe1-padronizar-e-unificar-os-dados).')
lines.append('')
lines.append('Todos os elementos estão interligados por **vínculos bidirecionais navegáveis**: ao consultar um Requisito Funcional, é possível transicionar diretamente para suas Regras de Negócio e Requisitos Não Funcionais condicionantes e, a partir de qualquer regra ou métrica, retornar imediatamente aos requisitos que a executam.')
lines.append('')

# Deck de navegação rápida
lines.append('<div class="catalog-nav-deck">')
lines.append('  <a href="#catalogo-funcionais" class="catalog-nav-btn">')
lines.append('    <span class="nav-btn-badge">40</span>')
lines.append('    <span class="nav-btn-text">Requisitos Funcionais</span>')
lines.append('  </a>')
lines.append('  <a href="#catalogo-regras-de-negocio" class="catalog-nav-btn">')
lines.append('    <span class="nav-btn-badge">31</span>')
lines.append('    <span class="nav-btn-text">Regras de Negócio</span>')
lines.append('  </a>')
lines.append('  <a href="#catalogo-nao-funcionais" class="catalog-nav-btn">')
lines.append('    <span class="nav-btn-badge">20</span>')
lines.append('    <span class="nav-btn-text">Requisitos Não Funcionais</span>')
lines.append('  </a>')
lines.append('  <a href="rastreabilidade.md" class="catalog-nav-btn catalog-nav-btn-ext">')
lines.append('    <span class="nav-btn-text">Pirâmide & Rastreabilidade Miro ↗</span>')
lines.append('  </a>')
lines.append('  <a href="priorizacao.md" class="catalog-nav-btn catalog-nav-btn-ext">')
lines.append('    <span class="nav-btn-text">Matriz 4 × 4 de Priorização ↗</span>')
lines.append('  </a>')
lines.append('</div>')
lines.append('')

# Atores Canônicos
lines.append('<a id="atores-do-sistema-e-matriz-canonica-de-papeis-rbac"></a>')
lines.append('### Atores Canônicos do Sistema')
lines.append('')
lines.append('O ecossistema operacional do ***DUOC Finance*** é estruturado em torno de **quatro papéis de autorização (RBAC)**:')
lines.append('')
lines.append('| Papel (Ator) | Código RBAC | Escopo Operacional e Responsabilidades Funcionais | Perfil Organizacional na DUOC |')
lines.append('| :--- | :---: | :--- | :--- |')
lines.append('| **Técnico de Campo** | `TECNICO_CAMPO` | Realiza apontamentos diários de horas e serviços em canteiro (RF04), anexa evidências fotográficas e geolocalização (RF22), submete reembolsos de despesas operacionais (RF07) e visualiza extratos de diárias e prévias apuradas (RF21, RF35). | Eletricistas, encarregados de instalação e montadores que atuam diretamente nos canteiros de obra. |')
lines.append('| **Gestor de Obras** | `GESTOR_OBRAS` | Homologa ou rejeita apontamentos de campo de sua equipe (RF19, RF32), cadastra novos contratos de obra e equipes (RF30), parametriza centros de custo (RF38), define tetos orçamentários (RF40) e acompanha painéis de custos em tempo real (RF11, RF12, RF31, RF34, RF39). | Engenheiros residentes, coordenadores de contratos e diretores de engenharia. |')
lines.append('| **Administrador Financeiro** | `ADMIN_FINANCEIRO` | Mantém o cadastro unificado de colaboradores e dados bancários (RF01, RF02, RF03, RF25, RF26), configura a tabela vigente de diárias (RF27), emite prévias (RF05), homologa fechamentos mensais (RF06), delibera despesas e reembolsos (RF08, RF29), dispara apropriações de custos (RF09) e exporta dados consolidados (RF36). | Auxiliar-Administradora (Maria Beatryz), que centraliza Departamento Pessoal, Contas a Pagar e Finanças. |')
lines.append('| **Administrador do Sistema** | `ADMIN_SISTEMA` | Gerencia perfis e atribuição de papéis de usuários (RF14), monitora a segurança da plataforma, expiração de senhas e bloqueios por tentativas falhas (RF23, RF24), e audita eventos probatórios (RF15, RF16). | Sócios-diretores e equipe técnica responsável pela sustentação de TI e governança da segurança da informação. |')
lines.append('')
lines.append('---')
lines.append('')

# Seção do Catálogo de RFs com Barra de Busca e Gaveta de Filtros
lines.append('<a id="catalogo-funcionais"></a>')
lines.append('<a id="especificacao-modular-dos-requisitos"></a>')
lines.append('<a id="catalogo-geral-consolidado"></a>')
lines.append('## Catálogo Geral de Requisitos Funcionais (Cards Interativos)')
lines.append('')
lines.append('Utilize a barra de pesquisa e os filtros rápidos abaixo para navegar dinamicamente entre os **91 Itens Estruturantes** do catálogo (**40 Requisitos Funcionais**, **31 Regras de Negócio** e **20 Requisitos Não Funcionais**). Cada card consolida a especificação oficial, critérios de aceitação DoR/DoD e rastreabilidade direta com os **elementos estruturantes do projeto** como <a href="../visao-produto/solucao-proposta.md#oe1-padronizar-e-unificar-os-dados" class="req-tag req-tag-oe"># OEs ↗</a>, <a href="../visao-produto/solucao-proposta.md#23-caracteristicas-do-produto-car" class="req-tag req-tag-car"># CARs ↗</a>, <a href="../mvp/backlog.md" class="req-tag req-tag-us"># USs ↗</a>, <a href="priorizacao.md#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix"># Matriz 4 × 4 ↗</a>, <a href="governanca-conformidade.md" class="req-tag req-tag-law"># Governança & CLT/LGPD ↗</a>, <a href="#catalogo-regras-de-negocio" class="req-tag req-tag-rn"># RNs ↗</a> e <a href="#catalogo-nao-funcionais" class="req-tag req-tag-rnf"># RNFs ↗</a>.')
lines.append('')

# HTML Toolbar com Barra de Busca e Gaveta Esticável de 4 Abas de Filtros
lines.append('<div class="req-toolbar">')
lines.append('  <div class="req-search-row">')
lines.append('    <div class="req-search-wrapper">')
lines.append('      <span class="req-search-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>')
lines.append('      <input type="text" id="req-search-input" class="req-search-input" placeholder="Buscar por código (ex: RF04, RN15, RNF03), termo (ex: apontamento, LGPD, token), ator ou CAR..." autocomplete="off">')
lines.append('      <button id="req-search-clear" class="req-search-clear" title="Limpar busca">×</button>')
lines.append('    </div>')
lines.append('    <button type="button" id="req-toggle-filters-btn" class="req-toggle-filters-btn" aria-expanded="false">')
lines.append('      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>')
lines.append('      <span>Filtros</span>')
lines.append('      <span class="req-filter-indicator"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>')
lines.append('    </button>')
lines.append('  </div>')
lines.append('  <div id="req-filters-drawer" class="req-filters-drawer" style="display: none;">')
lines.append('    <div class="req-filter-tabs-header">')
lines.append('      <button type="button" class="req-filter-tab-btn active" data-filter-tab="tipo">Tipo de Item</button>')
lines.append('      <button type="button" class="req-filter-tab-btn" data-filter-tab="modulos">Módulos & OEs</button>')
lines.append('      <button type="button" class="req-filter-tab-btn" data-filter-tab="mvp">Escopo (MVP)</button>')
lines.append('      <button type="button" class="req-filter-tab-btn" data-filter-tab="prioridade">Prioridade (Matriz)</button>')
lines.append('    </div>')
lines.append('    <div class="req-filter-tabs-body">')
lines.append('      <div class="req-filter-tab-pane active" data-filter-pane="tipo">')
lines.append('        <button class="req-filter-pill active" data-filter-type="type" data-filter="all">Todos os Tipos (91)</button>')
lines.append('        <button class="req-filter-pill" data-filter-type="type" data-filter="rf">Requisitos Funcionais · RF (40)</button>')
lines.append('        <button class="req-filter-pill" data-filter-type="type" data-filter="rn">Regras de Negócio · RN (31)</button>')
lines.append('        <button class="req-filter-pill" data-filter-type="type" data-filter="rnf">Requisitos Não Funcionais · RNF (20)</button>')
lines.append('      </div>')
lines.append('      <div class="req-filter-tab-pane" data-filter-pane="modulos">')
lines.append('        <button class="req-filter-pill active" data-filter-type="oe" data-filter="all">Todos os Módulos (91)</button>')
lines.append('        <button class="req-filter-pill" data-filter-type="oe" data-filter="oe1">Módulo 1: OE1 (Dados e Pessoal)</button>')
lines.append('        <button class="req-filter-pill" data-filter-type="oe" data-filter="oe2">Módulo 2: OE2 (Fechamento e Reembolsos)</button>')
lines.append('        <button class="req-filter-pill" data-filter-type="oe" data-filter="oe3">Módulo 3: OE3 (Custos e Orçamento)</button>')
lines.append('        <button class="req-filter-pill" data-filter-type="oe" data-filter="oe4">Módulo 4: OE4 (Segurança e Auditoria)</button>')
lines.append('        <button class="req-filter-pill" data-filter-type="oe" data-filter="transversal">Transversais (T)</button>')
lines.append('      </div>')
lines.append('      <div class="req-filter-tab-pane" data-filter-pane="mvp">')
lines.append('        <button class="req-filter-pill active" data-filter-type="mvp" data-filter="all">Todo o Escopo (91)</button>')
lines.append('        <button class="req-filter-pill" data-filter-type="mvp" data-filter="mvp">Escopo MVP (88)</button>')
lines.append('        <button class="req-filter-pill" data-filter-type="mvp" data-filter="pos-mvp">Evolutivo Pós-MVP (3)</button>')
lines.append('      </div>')
lines.append('      <div class="req-filter-tab-pane" data-filter-pane="prioridade">')
lines.append('        <button class="req-filter-pill active" data-filter-type="quad" data-filter="all">Todas as Prioridades (91)</button>')
lines.append('        <button class="req-filter-pill" data-filter-type="quad" data-filter="q1">Q1 — MVP / Alta Prioridade / Mandatório</button>')
lines.append('        <button class="req-filter-pill" data-filter-type="quad" data-filter="q2">Q2 — Planejado / Complexo</button>')
lines.append('        <button class="req-filter-pill" data-filter-type="quad" data-filter="q3">Q3 — Secundário / Evolutivo</button>')
lines.append('        <button class="req-filter-pill" data-filter-type="quad" data-filter="q4">Q4 — Fora de Escopo</button>')
lines.append('      </div>')
lines.append('    </div>')
lines.append('  </div>')
lines.append('  <div class="req-toolbar-footer">')
lines.append('    <div class="req-count-wrapper">')
lines.append('      <span class="req-count-label">Itens Exibidos:</span>')
lines.append('      <span id="req-count-badge" class="req-count-badge">91 de 91</span>')
lines.append('    </div>')
lines.append('    <div class="req-actions-wrapper">')
lines.append('      <button type="button" id="req-expand-all" class="req-action-btn" title="Expandir todos os cards visíveis"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg> Expandir Todos</button>')
lines.append('      <button type="button" id="req-collapse-all" class="req-action-btn" title="Recolher todos os cards visíveis"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline></svg> Recolher Todos</button>')
lines.append('    </div>')
lines.append('  </div>')
lines.append('</div>')
lines.append('')
lines.append('<div id="req-no-results" class="req-no-results" style="display: none;">')
lines.append('  <p><strong>Nenhum item encontrado</strong> para a busca e filtros aplicados.</p>')
lines.append('  <p class="req-no-results-hint">Tente limpar os filtros ou buscar por outro termo ou código (ex: RF01, RN15, RNF03).</p>')
lines.append('</div>')
lines.append('')
lines.append('')

OE_ANCHORS = {
    "OE1": "oe1-padronizar-e-unificar-os-dados",
    "OE2": "oe2-aumentar-a-eficiencia-administrativo-financeira",
    "OE3": "oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato",
    "OE4": "oe4-garantir-seguranca-e-governanca-de-dados"
}

# Iteração dos 40 RFs
for i in range(1, 41):
    rf_code = f"RF{i:02d}"
    meta = RF_META[rf_code]
    crit_text = crit_map.get(rf_code, "Critério formal validado e aprovado em especificação modular.")
    
    # Classes de Quadrante e MVP
    quad_class = f"req-quad-{meta['quad'].lower()}"
    quad_label = {
        "Q1": "Q1 — Candidatos ao MVP (Alta Prioridade)",
        "Q2": "Q2 — Planejamento / Complexo",
        "Q3": "Q3 — Baixa Prioridade / Evolutivo",
        "Q4": "Q4 — Fora de Escopo"
    }.get(meta["quad"], meta["quad"])
    quad_short_label = {
        "Q1": "Alta Prioridade",
        "Q2": "Planejado",
        "Q3": "Evolutivo",
        "Q4": "Fora do MVP"
    }.get(meta["quad"], meta["quad"])
    
    mvp_class = "req-pill-mvp" if meta["mvp"] == "MVP" else "req-pill-posmvp"
    mvp_full_label = "Candidato ao MVP" if meta["mvp"] == "MVP" else "Backlog Evolutivo (Pós-MVP)"
    
    status_class = "req-status-dev" if meta["mvp"] == "MVP" else "req-status-plan"
    status_label = "Em Desenvolvimento (Sprint Backlog)" if meta["mvp"] == "MVP" else "Planejado (Release 2)"
    
    oe_num = meta["oe"].lower()
    oe_name = {
        "OE1": "Padronizar e Unificar os Dados",
        "OE2": "Acelerar Fechamento e Eficiência Administrativa",
        "OE3": "Transparência de Custos por Contrato de Obra",
        "OE4": "Segurança, Governança e Conformidade Legal"
    }.get(meta["oe"], "")
    
    search_terms = f"{rf_code} {meta['nome']} {meta['oe']} {meta['car']} {meta['role']} {meta['mvp']} {meta['quad']} {meta['ct']} {meta['acao']} {' '.join(meta['rns'])} {' '.join(meta['rnfs'])}".lower()
    
    oe_anchor_map = {
        "OE1": "oe1-padronizar-e-unificar-os-dados",
        "OE2": "oe2-aumentar-a-eficiencia-administrativo-financeira",
        "OE3": "oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato",
        "OE4": "oe4-garantir-seguranca-e-governanca-de-dados"
    }
    oe_anchor = oe_anchor_map.get(meta["oe"], "oe1-padronizar-e-unificar-os-dados")
    car_anchor = meta["car"].lower()
    
    # Regras de Negócio tags ricas
    if meta["rns"]:
        rn_tags_html = " ".join([f'<a href="#{rn.lower()}" class="req-tag req-tag-rn"># {rn} · {RN_NAMES.get(rn, "")} ↗</a>' for rn in meta["rns"]])
    else:
        rn_tags_html = '<span class="req-tag-none">—</span>'
        
    # RNFs tags ricas
    if meta["rnfs"]:
        rnf_tags_list = [f'<a href="#{rnf.lower()}" class="req-tag req-tag-rnf"># {rnf} · {RNF_NAMES.get(rnf, "")} ↗</a>' for rnf in meta["rnfs"]]
        rnf_tags_list.append('<a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>')
        rnf_tags_html = " ".join(rnf_tags_list)
    else:
        rnf_tags_html = '<a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>'

    lines.append(f'<details class="req-card req-card-rf req-card-{oe_num}" id="{rf_code.lower()}" data-type="rf" data-rf="{rf_code}" data-oe="{meta["oe"].lower()}" data-car="{meta["car"].lower()}" data-mvp="{meta["mvp"].lower()}" data-quad="{meta["quad"].lower()}" data-role="{meta["role"]}" data-text="{search_terms}" data-search-text="{search_terms}">')
    lines.append('  <summary class="req-card-summary">')
    lines.append('    <div class="req-summary-chips">')
    lines.append(f'      <span class="req-pill req-pill-priority {quad_class}"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>{quad_short_label}</span></span>')
    lines.append('    </div>')
    lines.append('    <div class="req-title-row">')
    lines.append(f'      <h3 class="req-card-title">{rf_code} - {meta["nome"]}</h3>')
    lines.append('      <span class="req-expand-icon" aria-hidden="true">')
    lines.append('        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>')
    lines.append('      </span>')
    lines.append('    </div>')
    lines.append('  </summary>')
    lines.append('')
    lines.append('  <div class="req-card-expansion">')
    lines.append('    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->')
    lines.append('    <div class="req-lumio-meta">')
    lines.append('      <div class="req-lumio-row">')
    lines.append('        <span class="req-lumio-label">')
    lines.append('          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>')
    lines.append('          <span>Prioridade</span>')
    lines.append('        </span>')
    lines.append('        <div class="req-lumio-val">')
    lines.append(f'          <span class="req-lumio-tag req-tag-quad req-quad-{meta["quad"].lower()}">{quad_label}</span>')
    lines.append(f'          <span class="req-lumio-tag req-tag-mvp {mvp_class}">{mvp_full_label}</span>')
    lines.append('        </div>')
    lines.append('      </div>')
    lines.append('      <div class="req-lumio-row">')
    lines.append('        <span class="req-lumio-label">')
    lines.append('          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>')
    lines.append('          <span>Status</span>')
    lines.append('        </span>')
    lines.append('        <div class="req-lumio-val">')
    lines.append(f'          <span class="req-lumio-tag req-tag-status {status_class}"><span class="req-status-dot"></span>{status_label}</span>')
    lines.append('        </div>')
    lines.append('      </div>')
    lines.append('      <div class="req-lumio-row">')
    lines.append('        <span class="req-lumio-label">')
    lines.append('          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>')
    lines.append('          <span>Objetivo Específico</span>')
    lines.append('        </span>')
    lines.append('        <div class="req-lumio-val">')
    lines.append(f'          <a href="../visao-produto/solucao-proposta.md#{oe_anchor}" class="req-lumio-tag req-tag-oe"># {meta["oe"]} · {oe_name} ↗</a>')
    lines.append('        </div>')
    lines.append('      </div>')
    lines.append('      <div class="req-lumio-row">')
    lines.append('        <span class="req-lumio-label">')
    lines.append('          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>')
    lines.append('          <span>Características (CAR)</span>')
    lines.append('        </span>')
    lines.append('        <div class="req-lumio-val">')
    lines.append(f'          <a href="../visao-produto/solucao-proposta.md#{car_anchor}" class="req-lumio-tag req-tag-car"># {meta["car"]} ↗</a>')
    lines.append('        </div>')
    lines.append('      </div>')
    lines.append('      <div class="req-lumio-row">')
    lines.append('        <span class="req-lumio-label">')
    lines.append('          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>')
    lines.append('          <span>Responsável (Ator)</span>')
    lines.append('        </span>')
    lines.append('        <div class="req-lumio-val">')
    lines.append(f'          <span class="req-lumio-tag req-tag-role"># {meta["role"]}</span>')
    lines.append('        </div>')
    lines.append('      </div>')
    lines.append('    </div>')
    lines.append('')
    lines.append('    <div class="req-expanded-desc">')
    lines.append('      <span class="req-checklist-title">Ação Observável do Usuário</span>')
    lines.append('      <div class="req-desc-box">')
    lines.append(f'        <p class="req-desc-text"><strong>Ação do Usuário:</strong> {meta["acao"]}</p>')
    lines.append('      </div>')
    lines.append('    </div>')
    lines.append('')
    lines.append('    <div class="req-tabs-nav" role="tablist">')
    lines.append('      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>')
    lines.append('      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>')
    lines.append('      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>')
    lines.append('    </div>')
    lines.append('')
    lines.append('    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->')
    lines.append('    <div class="req-tab-pane active" data-pane="criterios">')
    lines.append('      <div class="req-checklist-container">')
    lines.append('        <div class="req-checklist-header">')
    lines.append('          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>')
    lines.append('          <span class="req-checklist-badge">4 de 4 Verificados</span>')
    lines.append('        </div>')
    lines.append('        <div class="req-checklist-item">')
    lines.append('          <div class="req-check-box">')
    lines.append('            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>')
    lines.append('          </div>')
    lines.append('          <div class="req-check-body">')
    lines.append('            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>')
    lines.append(f'            <p class="req-check-text">{crit_text}</p>')
    lines.append('          </div>')
    lines.append('        </div>')
    lines.append('        <div class="req-checklist-item">')
    lines.append('          <div class="req-check-box">')
    lines.append('            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>')
    lines.append('          </div>')
    lines.append('          <div class="req-check-body">')
    lines.append('            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>')
    lines.append(f'            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes ({rn_tags_html}) e perfil canônico de acesso <code>{meta["role"]}</code> autenticado.</p>')
    lines.append('          </div>')
    lines.append('        </div>')
    lines.append('        <div class="req-checklist-item">')
    lines.append('          <div class="req-check-box">')
    lines.append('            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>')
    lines.append('          </div>')
    lines.append('          <div class="req-check-body">')
    lines.append('            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>')
    lines.append(f'            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade ({rnf_tags_html}).</p>')
    lines.append('          </div>')
    lines.append('        </div>')
    lines.append('        <div class="req-checklist-item">')
    lines.append('          <div class="req-check-box">')
    lines.append('            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>')
    lines.append('          </div>')
    lines.append('          <div class="req-check-body">')
    lines.append('            <span class="req-check-tag">Homologação de QA & Rastreabilidade de Teste</span>')
    lines.append(f'            <p class="req-check-text">Cenário de teste formalmente coberto e homologado pelo Caso de Teste <span class="req-tag req-tag-ct"># {meta["ct"]}</span>.</p>')
    lines.append('          </div>')
    lines.append('        </div>')
    lines.append('      </div>')
    lines.append('    </div>')
    lines.append('')
    lines.append('    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->')
    lines.append('    <div class="req-tab-pane" data-pane="rastreabilidade">')
    lines.append('      <div class="req-trace-grid">')
    lines.append('        <div class="req-trace-item">')
    lines.append('          <span class="req-trace-title">Objetivo Estratégico (OE)</span>')
    lines.append(f'          <a href="../visao-produto/solucao-proposta.md#{oe_anchor}" class="req-tag req-tag-oe"># {meta["oe"]} · {oe_name} ↗</a>')
    lines.append('        </div>')
    lines.append('        <div class="req-trace-item">')
    lines.append('          <span class="req-trace-title">Característica de Produto (CAR)</span>')
    lines.append(f'          <a href="../visao-produto/solucao-proposta.md#{car_anchor}" class="req-tag req-tag-car"># {meta["car"]} ↗</a>')
    lines.append('        </div>')
    lines.append('        <div class="req-trace-item">')
    lines.append('          <span class="req-trace-title">História de Usuário (Backlog)</span>')
    lines.append(f'          <a href="../mvp/backlog.md#{meta["us"].lower()}" class="req-tag req-tag-us"># {meta["us"]} ↗</a>')
    lines.append('        </div>')
    lines.append('        <div class="req-trace-item">')
    lines.append('          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>')
    lines.append(f'          <span class="req-tag req-tag-role"># {meta["role"]}</span>')
    lines.append('        </div>')
    lines.append('        <div class="req-trace-item">')
    lines.append('          <span class="req-trace-title">Caso de Teste Associado</span>')
    lines.append(f'          <span class="req-tag req-tag-ct"># {meta["ct"]}</span>')
    lines.append('        </div>')
    lines.append('        <div class="req-trace-item req-trace-full">')
    lines.append('          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>')
    lines.append(f'          <div class="req-tags-wrap">{rn_tags_html}</div>')
    lines.append('        </div>')
    lines.append('        <div class="req-trace-item req-trace-full">')
    lines.append('          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>')
    lines.append(f'          <div class="req-tags-wrap">{rnf_tags_html}</div>')
    lines.append('        </div>')
    lines.append('      </div>')
    lines.append('    </div>')
    lines.append('')
    lines.append('    <!-- ABA 3: Priorização & Score 4x4 com Quadrante Colorido -->')
    lines.append('    <div class="req-tab-pane" data-pane="priorizacao">')
    lines.append('      <div class="req-metrics-grid">')
    lines.append('        <div class="req-metric-card req-quad-card req-quad-' + meta["quad"].lower() + '">')
    lines.append('          <span class="metric-label">Quadrante na Matriz 4×4</span>')
    lines.append(f'          <span class="metric-val-quad {quad_class}">{quad_label}</span>')
    lines.append('        </div>')
    lines.append('        <div class="req-metric-card">')
    lines.append('          <span class="metric-label">Valor de Negócio (VB)</span>')
    lines.append(f'          <span class="metric-val">{meta["vb"]} <small>/ 4</small></span>')
    lines.append('        </div>')
    lines.append('        <div class="req-metric-card">')
    lines.append('          <span class="metric-label">Esforço Consolidado (EC)</span>')
    lines.append(f'          <span class="metric-val">{meta["ec"]}</span>')
    lines.append('        </div>')
    lines.append('        <div class="req-metric-card">')
    lines.append('          <span class="metric-label">Índice de Prioridade (IP)</span>')
    lines.append(f'          <span class="metric-val">{meta["ip"]}</span>')
    lines.append('        </div>')
    lines.append('      </div>')
    lines.append('      <div class="req-metrics-footer">')
    lines.append(f'        <span>Cálculo formal ponderado: <code>IP = VB / EC</code> (Score: <strong>{meta["ip"]}</strong>). Enquadramento: <strong>{meta["mvp"]}</strong>.</span>')
    lines.append(f'        <a href="priorizacao.md#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-{meta["quad"].lower()}">Ver Posição no Mapa da Matriz 4×4 ↗</a>')
    lines.append('      </div>')
    lines.append('    </div>')
    lines.append('')
    lines.append('  </div>')
    lines.append('</details>')
    lines.append('')

# Mensagem de busca vazia
lines.append('<div id="req-no-results" class="req-no-results" style="display:none;">')
lines.append('  <div class="req-no-results-icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>')
lines.append('  <h3>Nenhum requisito encontrado para os filtros selecionados</h3>')
lines.append('  <p>Tente ajustar os termos da pesquisa ou selecione o filtro "Todos (40)".</p>')
lines.append('</div>')
lines.append('')
lines.append('---')
lines.append('')

# Catálogo Geral de Regras de Negócio (RN01 a RN31)
lines.append('<a id="catalogo-regras-de-negocio"></a>')
lines.append('<a id="catalogo-geral-de-regras-de-negocio-rn01-a-rn31"></a>')
lines.append('## Catálogo Geral de Regras de Negócio (RN01 a RN31)')
lines.append('')
lines.append('As **31 Regras de Negócio (RN01 a RN31)** governam a lógica de domínio, integridade contábil, controles temporais e políticas de segurança da informação do ***DUOC Finance***. Cada card abaixo detalha a regra oficial e lista os **Requisitos Funcionais Executores** correspondentes em links bidirecionais navegáveis:')
lines.append('')

for rn in RNS_DATA:
    oe_clean = rn["oe"].lower()
    oe_anchor = OE_ANCHORS.get(rn["oe"], "oe1-padronizar-e-unificar-os-dados")
    car_anchor = rn["car"].lower()
    rf_tags_html = " ".join([
        f'<a href="#{rf.lower()}" class="req-tag req-tag-rf"># {rf} · {RF_META[rf]["nome"]} ↗</a>'
        for rf in rn["rfs"] if rf in RF_META
    ])
    
    rn_search = f"{rn['code']} {rn['title']} {rn['oe']} {rn['modulo']} {rn['car']} {rn['cat']} {rn['enunciado']} {' '.join(rn['rfs'])} regra negocio dominio".lower()
    lines.append(f'<details class="req-card req-card-rn" id="{rn["code"].lower()}" data-type="rn" data-rn="{rn["code"]}" data-oe="{oe_clean}" data-car="{car_anchor}" data-mvp="mvp" data-quad="q1" data-text="{rn_search}" data-search-text="{rn_search}">')
    lines.append('  <summary class="req-card-summary">')
    lines.append('    <div class="req-summary-chips">')
    lines.append('      <span class="req-pill req-pill-priority req-pill-rn">')
    lines.append('        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>')
    lines.append('        <span>Regra de Domínio</span>')
    lines.append('      </span>')
    lines.append(f'      <span class="req-pill req-pill-cat-rn">{rn["cat"]}</span>')
    lines.append('    </div>')
    lines.append('    <div class="req-title-row">')
    lines.append(f'      <h3 class="req-card-title">{rn["code"]} — {rn["title"]}</h3>')
    lines.append('      <span class="req-expand-icon" aria-hidden="true">')
    lines.append('        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>')
    lines.append('      </span>')
    lines.append('    </div>')
    lines.append('  </summary>')
    lines.append('')
    lines.append('  <div class="req-card-expansion">')
    lines.append('    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->')
    lines.append('    <div class="req-lumio-meta">')
    lines.append('      <div class="req-lumio-row">')
    lines.append('        <span class="req-lumio-label">')
    lines.append('          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>')
    lines.append('          <span>Módulo & OE</span>')
    lines.append('        </span>')
    lines.append('        <div class="req-lumio-val">')
    lines.append(f'          <a href="../visao-produto/solucao-proposta.md#{oe_anchor}" class="req-lumio-tag req-tag-oe"># {rn["oe"]} · {rn["modulo"]} ↗</a>')
    lines.append('        </div>')
    lines.append('      </div>')
    lines.append('      <div class="req-lumio-row">')
    lines.append('        <span class="req-lumio-label">')
    lines.append('          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>')
    lines.append('          <span>Característica (CAR)</span>')
    lines.append('        </span>')
    lines.append('        <div class="req-lumio-val">')
    lines.append(f'          <a href="../visao-produto/solucao-proposta.md#{car_anchor}" class="req-lumio-tag req-tag-car"># {rn["car"]} ↗</a>')
    lines.append('        </div>')
    lines.append('      </div>')
    lines.append('      <div class="req-lumio-row">')
    lines.append('        <span class="req-lumio-label">')
    lines.append('          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>')
    lines.append('          <span>Categoria de Domínio</span>')
    lines.append('        </span>')
    lines.append('        <div class="req-lumio-val">')
    lines.append(f'          <span class="req-lumio-tag req-tag-rn-cat">{rn["cat"]}</span>')
    lines.append('        </div>')
    lines.append('      </div>')
    lines.append('      <div class="req-lumio-row">')
    lines.append('        <span class="req-lumio-label">')
    lines.append('          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>')
    lines.append('          <span>RFs Executores (Bidirecional)</span>')
    lines.append('        </span>')
    lines.append('        <div class="req-lumio-val">')
    lines.append(f'          {rf_tags_html}')
    lines.append('        </div>')
    lines.append('      </div>')
    lines.append('    </div>')
    lines.append('')
    lines.append('    <!-- Enunciado Oficial da Regra -->')
    lines.append('    <div class="req-expanded-desc">')
    lines.append('      <div class="req-checklist-header">')
    lines.append('        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>')
    lines.append('      </div>')
    lines.append('      <div class="req-desc-box">')
    lines.append(f'        <p class="req-desc-text"><strong>Regra de Negócio:</strong> {rn["enunciado"]}</p>')
    lines.append('      </div>')
    lines.append('    </div>')
    lines.append('  </div>')
    lines.append('</details>')
    lines.append('')

lines.append('---')
lines.append('')

# Catálogo de Requisitos Não Funcionais (RNF01 a RNF20)
lines.append('<a id="catalogo-nao-funcionais"></a>')
lines.append('<a id="catalogo-de-requisitos-nao-funcionais"></a>')
lines.append('## Catálogo de Requisitos Não Funcionais (RNF01 a RNF20)')
lines.append('')
lines.append('Os **20 Requisitos Não Funcionais (RNF01 a RNF20)** especificam os atributos de qualidade sistêmica e restrições de arquitetura do ***DUOC Finance***, classificados simultaneamente pelo modelo **URPS+** e pela taxonomia de **Sommerville**:')
lines.append('')
lines.append('<a id="rnfs-transversais"></a>')
lines.append('!!! info "Pacote Transversal de Atributos de Qualidade (T)"')
lines.append('    Os requisitos **RNF03** (Criptografia AES-256 / TLS 1.3), **RNF14** (Autorização RBAC em 100% dos endpoints), **RNF15** (Consistência e Atomicidade de Logs), **RNF16** (Retenção Quinquenal CLT Art. 11), **RNF17** (Rotina de Backup Diário), **RNF18** (Disponibilidade ≥ 99,5%), **RNF19** (Acessibilidade WCAG 2.1 AA) e **RNF20** (Validação de Schema em Escritas) compõem o **Pacote Transversal (T)** obrigatório, aplicando-se de forma pervasiva a todas as telas, rotinas e histórias de usuário do produto.')
lines.append('')

for rnf in RNFS_DATA:
    urps_clean = rnf["urps_class"].lower()
    is_trans = rnf["is_transversal"]
    
    rf_tags_html = " ".join([
        f'<a href="#{rf.lower()}" class="req-tag req-tag-rf"># {rf} · {RF_META[rf]["nome"]} ↗</a>'
        for rf in rnf["rfs"] if rf in RF_META
    ])
    
    if is_trans:
        oe_clean = "transversal"
    elif "OE1" in rnf["scope_label"]:
        oe_clean = "oe1"
    elif "OE2" in rnf["scope_label"]:
        oe_clean = "oe2"
    elif "OE3" in rnf["scope_label"]:
        oe_clean = "oe3"
    elif "OE4" in rnf["scope_label"]:
        oe_clean = "oe4"
    else:
        oe_clean = "transversal"
        
    rnf_mvp = "pos-mvp" if rnf["code"] in ["RNF01", "RNF08"] else "mvp"
    rnf_quad = "q3" if rnf["code"] in ["RNF01", "RNF08"] else "q1"
    rnf_search = f"{rnf['code']} {rnf['title']} {rnf['urps_label']} {rnf['sommerville']} {rnf['scope_label']} {rnf['metric']} {' '.join(rnf['rfs'])} requisito nao funcional atributo qualidade dod".lower()
    
    lines.append(f'<details class="req-card req-card-rnf" id="{rnf["code"].lower()}" data-type="rnf" data-rnf="{rnf["code"]}" data-oe="{oe_clean}" data-mvp="{rnf_mvp}" data-quad="{rnf_quad}" data-text="{rnf_search}" data-search-text="{rnf_search}">')
    lines.append('  <summary class="req-card-summary">')
    lines.append('    <div class="req-summary-chips">')
    lines.append('      <span class="req-pill req-pill-priority req-pill-rnf">')
    lines.append('        <svg class="req-priority-flag req-rnf-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>')
    lines.append(f'        <span>{rnf["urps_label"]}</span>')
    lines.append('      </span>')
    if is_trans:
        lines.append('      <span class="req-pill req-pill-transversal">Pacote Transversal (T)</span>')
    else:
        lines.append(f'      <span class="req-pill req-pill-scope">{rnf["scope_label"]}</span>')
    lines.append('    </div>')
    lines.append('    <div class="req-title-row">')
    lines.append(f'      <h3 class="req-card-title">{rnf["code"]} — {rnf["title"]}</h3>')
    lines.append('      <span class="req-expand-icon" aria-hidden="true">')
    lines.append('        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>')
    lines.append('      </span>')
    lines.append('    </div>')
    lines.append('  </summary>')
    lines.append('')
    lines.append('  <div class="req-card-expansion">')
    lines.append('    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->')
    lines.append('    <div class="req-lumio-meta">')
    lines.append('      <div class="req-lumio-row">')
    lines.append('        <span class="req-lumio-label">')
    lines.append('          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>')
    lines.append('          <span>Classificação URPS+</span>')
    lines.append('        </span>')
    lines.append('        <div class="req-lumio-val">')
    lines.append(f'          <span class="req-lumio-tag req-tag-urps">{rnf["urps_label"]}</span>')
    lines.append('        </div>')
    lines.append('      </div>')
    lines.append('      <div class="req-lumio-row">')
    lines.append('        <span class="req-lumio-label">')
    lines.append('          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>')
    lines.append('          <span>Taxonomia Sommerville</span>')
    lines.append('        </span>')
    lines.append('        <div class="req-lumio-val">')
    lines.append(f'          <span class="req-lumio-tag req-tag-sommerville">{rnf["sommerville"]}</span>')
    lines.append('        </div>')
    lines.append('      </div>')
    lines.append('      <div class="req-lumio-row">')
    lines.append('        <span class="req-lumio-label">')
    lines.append('          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>')
    lines.append('          <span>Escopo de Aplicação</span>')
    lines.append('        </span>')
    lines.append('        <div class="req-lumio-val">')
    if is_trans:
        lines.append('          <span class="req-lumio-tag req-tag-scope">Pacote Transversal (T) — Aplicação Compulsória em 100% dos Endpoints e Telas</span>')
    else:
        lines.append(f'          <span class="req-lumio-tag req-tag-scope">{rnf["scope_label"]}</span>')
    lines.append('        </div>')
    lines.append('      </div>')
    lines.append('      <div class="req-lumio-row">')
    lines.append('        <span class="req-lumio-label">')
    lines.append('          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>')
    lines.append('          <span>RFs Cobertos (Bidirecional)</span>')
    lines.append('        </span>')
    lines.append('        <div class="req-lumio-val">')
    lines.append(f'          {rf_tags_html}')
    lines.append('        </div>')
    lines.append('      </div>')
    lines.append('    </div>')
    lines.append('')
    lines.append('    <!-- Métrica Técnica -->')
    lines.append('    <div class="req-expanded-desc">')
    lines.append('      <div class="req-checklist-header">')
    lines.append('        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>')
    lines.append('      </div>')
    lines.append('      <div class="req-desc-box">')
    lines.append(f'        <p class="req-desc-text"><strong>Métrica Técnica:</strong> {rnf["metric"]}</p>')
    lines.append('      </div>')
    lines.append('    </div>')
    lines.append('  </div>')
    lines.append('</details>')
    lines.append('')

lines.append('---')
lines.append('')

# Histórico de Versão
lines.append('## Histórico de Versão')
lines.append('')
lines.append('| Versão | Data | Descrição | Autor(es) | Revisor(es) |')
lines.append('| :---: | :---: | :--- | :--- | :--- |')
lines.append('| `4.2` | 02/11/2026 | **Padronização Expandida & Links Bidirecionais:** migração das Regras de Negócio (cards vermelhos) e Requisitos Não Funcionais (cards azuis) para a arquitetura expansível padronizada dos RFs; estabelecimento da linkagem bidirecional recíproca entre Características de Produto (CAR-01 a CAR-10) e Requisitos Funcionais; saneamento de rotas e âncoras relativas do MkDocs. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |')
lines.append('| `4.1` | 30/10/2026 | **Desacoplamento e Interconexão Bidirecional Total:** separação da Pirâmide de Abstração e Matriz-Síntese no documento exclusivo `rastreabilidade.md`; remoção da seção preliminar de Casos de Uso do Catálogo; reestruturação completa das 31 Regras de Negócio e 20 Requisitos Não Funcionais em cards visuais interativos com links bidirecionais diretos para os Requisitos Funcionais executores; integração com deck de navegação rápida. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |')
lines.append('| `4.0` | 29/10/2026 | Consolidação do Catálogo Unificado de Requisitos: centralização dos 40 RFs em Cards de Rastreabilidade Total interativos com links para OEs, CARs, USs, Matriz 4×4 e RNFs; introdução de barra de pesquisa instantânea e filtros rápidos por Módulo e MVP. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |')
lines.append('| `3.8` | 29/10/2026 | Atendimento à issue #126: consolidação das especificações nos módulos, atualização da rastreabilidade e das referências do catálogo; alinhamento de RN02, RF32, RF35 e casos de teste para correção de apontamentos rejeitados. | Matheus Saraiva Camargo | Matheus Ribeiro Szervinsk |')
lines.append('| `3.7` | 28/10/2026 | Sincronização com a Priorização e o Backlog: confirmação da alocação no MVP de RF32 a RF35 e de RF36 no backlog evolutivo, refletida nas histórias US32 a US36. | Paulo Nery | Matheus Ribeiro Szervinsk |')
lines.append('| `3.6` | 13/10/2026 | Auditoria de integridade e qualidade metodológica: restauração do Mapeamento de Necessidades do Cliente e Grafo de Interdependência; padronização estrita de RF24 e métricas de RNF02 e RNF05. | Matheus Ribeiro Szervinsk | Eric Araújo |')
lines.append('| `3.0` | 08/10/2026 | Atendimento ao feedback docente: conversão dos critérios de aceitação para texto corrido verificável orientado a valor. | Paulo Nery | Matheus Ribeiro Szervinsk |')
lines.append('| `1.0` | 07/09/2026 | Criação e estruturação da especificação inicial de requisitos de software (Unidade 2). | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |')

out_content = "\n".join(lines) + "\n"

with open('docs/requisitos/index.md', 'w', encoding='utf-8') as out_f:
    out_f.write(out_content)

print(f'docs/requisitos/index.md written successfully ({len(out_content)} bytes, {len(lines)} lines)')