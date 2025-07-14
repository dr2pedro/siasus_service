// @filename: BIDictionary.ts

/*
 *     Copyright 2025 Pedro Paulo Teixeira dos Santos

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import {StateCode} from "../../core/State.js";

const tipoGestao = {
    'MN': 'Municip. Pleno(NOAS)',
    'EP': 'Estado Pleno',
    'EC': 'Estado Convencional',
    'PA': 'Mun.At.Básica(NOAS)',
    'PB': 'Mun.At.Básica(NOB96)',
    'PG': 'Pacto de Gestão',
    'MP': 'Municipio Pleno(NOB)'
};
const tipoEstabelecimento =  {
    "74": 'ACADEMIA DA SAÚDE',
    '81': 'CENTRAL DE REGUALAÇÃO',
    '76': 'CENTRAL DE REGULAÇÃO MÉDICA DAS URGÊNCIAS',
    '71': 'CENTRO DE APOIO A SAÚDE DA FAMÍLIA-CASF',
    '69': 'CENTRO DE ATENÇÃO HEMOTERÁPICA E/OU HEMATOLÓGICA',
    '70': 'CENTRO DE ATENÇÃO PSICOSSOCIAL-CAPS',
    '61': 'CENTRO DE PARTO NORMAL',
    '02': 'CENTRO DE SAUDE/UNIDADE BASICA DE SAUDE',
    '64': 'CENTRAL DE REGULACAO DE SERVICOS DE SAUDE',
    '36': 'CLINICA ESPECIALIZADA/AMBULATORIO ESPECIALIZADO',
    '22': 'CONSULTORIO',
    '60': 'COOPERATIVA',
    '43': 'FARMACIA',
    '07': 'HOSPITAL ESPECIALIZADO',
    '05': 'HOSPITAL GERAL',
    '62': 'HOSPITAL DIA',
    '67': 'LABORATORIO CENTRAL DE SAUDE PUBLICA - LACEN',
    '80': 'ORIO DE SAUDE PUBLICA',
    '04': 'POLICLINICA',
    '79': 'OFICINA ORTOPEDICA',
    '01': 'POSTO DE SAUDE',
    '73': 'PRONTO ANTEDIMENTO',
    '21': 'PRONTO SOCORRO ESPECIALIZADO',
    '20': 'PRONTO SOCORRO GERAL',
    '68': 'SECRETARIA DE SAUDE',
    '77': 'SERVICO DE ATENCAO DOMICILIAR ISOLADO(HOME CARE)',
    '63': 'UNIDADE AUTORIZADORA',
    '72': 'UNIDADE DE ATENÇÃO À SAÚDE INDÍGENA',
    '78': 'UNIDADE DE ATENCAO EM REGIME RESIDENCIAL',
    '39': 'UNIDADE DE SERVICO DE APOIO DE DIAGNOSE E TERAPIA',
    '45': 'UNIDADE DE SAUDE DA FAMILIA',
    '50': 'UNIDADE DE VIGILANCIA EM SAUDE',
    '65': 'UNIDADE DE VIGILANCIA EPIDEMIOLOGIA (ANTIGO)',
    '66': 'UNIDADE DE VIGILANCIA SANITARIA (ANTIGO)',
    '15': 'UNIDADE MISTA',
    '42': 'UNIDADE MOVEL DE NIVEL PRE-HOSP-URGENCIA/EMERGENCIA',
    '32': 'UNIDADE MOVEL FLUVIAL',
    '40': 'UNIDADE MOVEL TERRESTRE',
    '75': 'TELESAÚDE',
    '09': 'PRONTO SOCORRO DE HOSPITAL GERAL (ANTIGO)',
    '12': 'PRONTO SOCORRO TRAUMATO-ORTOPEDICO (ANTIGO)',
    '-99': 'TIPO ESTABELECIMENTO NÃO INFORMADO'
};
const tipoFinanciamento = {
    "000000":   "Não discriminado/Não se aplica",
    "-999999":  "Não discriminado/Não se aplica",
    "010000":   "Atenção Básica (PAB)",
    "020000":   "Assistência Farmacêutica",
    "040001":   "Coleta de material",
    "040002":   "Diagnóstico em laboratório clínico",
    "040003":   "Coleta/exame anátomo-patológico colo uterino",
    "040004":   "Diagnóstico em neurologia",
    "040005":   "Diagnóstico em otorrinolaringologia/fonoaudiologia",
    "040006":   "Diagnóstico em psicologia/psiquiatria",
    "040007":   "Consultas médicas/outros profissionais de nível superior",
    "040008":   "Atenção domiciliar",
    "040009":   "Atendimento/acompanhamento em reabilitação física, mental, visual, auditiva e múltiplas deficiências",
    "040010":   "Atendimento/acompanhamento psicossocial",
    "040011":   "Atendimento/acompanhamento em saúde do idoso",
    "040012":   "Atendimento/acompanhamento de queimados",
    "040013":   "Atendimento/acompanhamento de diagnóstico de doenças endocrinas/metabólicas e nutricionais",
    "040014":   "Tratamento de doenças do sistema nervoso central e periférico",
    "040015":   "Tratamento de doenças do aparelho da visão",
    "040016":   "Tratamento em oncologia",
    "040017":   "Nefrologia",
    "040018":   "Tratamentos odontológicos",
    "040019":   "Cirurgia do sistema nervoso central e periférico",
    "040020":   "Cirurgias de ouvido, nariz e garganta",
    "040021":   "Deformidade labio-palatal e crânio-facial",
    "040022":   "Cirurgia do aparelho da visão",
    "040023":   "Cirurgia do aparelho circulatório",
    "040024":   "Cirurgia do aparelho digestivo, orgãos anexos e parede abdominal(inclui pré e pós operatório)",
    "040025":   "Cirurgia do aparelho geniturinário",
    "040026":   "Tratamento de queimados",
    "040027":   "Cirurgia reparadora para lipodistrofia",
    "040028":   "Outras cirurgias plásticas/reparadoras",
    "040029":   "Cirurgia orofacial",
    "040030":   "Sequenciais",
    "040031":   "Cirurgias em nefrologia",
    "040032":   "Transplantes de orgãos, tecidos e células",
    "040033":   "Medicamentos para transplante",
    "040034":   "OPM auditivas",
    "040035":   "OPM em odontologia",
    "040036":   "OPM em queimados",
    "040037":   "OPM em nefrologia",
    "040038":   "OPM para transplantes",
    "040039":   "Incentivos ao pré-natal e nascimento",
    "040040":   "Incentivo ao registro cívil de nascimento",
    "040041":   "Central Nacional de Regulação de Alta Complexidade (CNRAC)",
    "040042":   "Reguladores de Atividade hormonal - Inibidores de prolactina",
    "040043":   "Política Nacional de Cirurgias Eletivas",
    "040044":   "Redesignação e Acompanhamento",
    "040045":   "Projeto Olhar Brasil",
    "040046":   "Mamografia para Rastreamento",
    "040047":   "Projeto Olhar Brasil - Consulta",
    "040048":   "Projeto Olhar Brasil - Óculos",
    "040049":   "Implementar Cirg. CV Pediátrica",
    "040050":   "Cirurgias Eletivas - Componente I",
    "040051":   "Cirurgias Eletivas - Componente II",
    "040052":   "Cirurgias Eletivas - Componente III",
    "040053":   "Prótese Mamária - Exames",
    "040054":   "Prótese Mamária - Cirurgia",
    "040055":   "Transplante - Histocompatibilidade",
    "040056":   "Triagem Neonatal",
    "040057":   "Controle de qualidade do exame citopatológico do colo de útero",
    "040058":   "Exames do Leite Materno",
    "040059":   "Atenção as Pessoas em Situação de Violência Sexual",
    "040060":   "Sangue e Hemoderivados",
    "040061":   "Mamografia para rastreamento em faixa etária recomendada",
    "040062":   "Doenças Raras",
    "040063":   "Cadeiras de Rodas",
    "040064":   "Sistema de Frequencia Modulada Pessoal-FM",
    "040065":   "Medicamentos em Urgência",
    "040066":   "Cirurgias Eletivas - Componente Único",
    "040067":   "Atenção Especializada em Saúde Auditiva",
    "040068":   "Terapias Especializadas em Angiologia",
    "040069":   "Tratamento de Doença Macular",
    "040070":   "OPME Não Relacionados ao Ato Cirúrgico",
    "040071":   "Diagnóstico/tratamento em oncologia",
    "040072":   "Diagnóstico de trombofilia em gestante",
    "040073":   "Reabilitação Pós-COVID-19",
    "040074":   "Telemedicina em Urgência",
    "040075":   "Fisioterapia Cardiovascular",
    "040076":   "Hemodinâmica em atendimento de urgência",
    "040077":   "Exames Sorológicos e Imunológicos",
    "040078":   "QualiSUS Cardio",
    "040079":   "Pré-cirúrgico em Cirurgias Prioritárias",
    "040080":   "Reduçäo das Filas de Procedimentos Eletivos",
    "040081":   "Síndrome Respiratória Aguda Grave - SRAG",
    "040082":   "Alta Complexidade em Cardiologia",
    "040083":   "Cirurgia da Face e do Sistema Estomatognático",
    "040084":   "Neurocirurgias",
    "021012":   "FAEC CNRAC (21012-cód ant à tab unif-vál p/2008-01)",
    "021014":   "FAEC Eletiv(21014-cód ant à tab unif-vál p/2008-01)",
    "050000":   "Incentivo - MAC",
    "060000":   "Média e Alta Complexidade (MAC)",
    "070000":   "Vigilância em Saúde",
    "080000":   "Gestão do SUS"
};
const complexidade = {
    "0": "Não se Aplica",
    "1": "Atenção Básica",
    "2": "Média Complexidade",
    "3": "Alta Complexidade"
};
const caraterAtendimento = {
    "01":   "ELETIVO",
    "02":   "URGÊNCIA",
    "03":   "ACIDENTE NO LOCAL TRABALHO OU A SERViÇO DA EMPRESA",
    "04":   "ACIDENTE NO TRAJETO PARA O TRABALHO",
    "05":   "OUTROS TIPOS DE ACIDENTE DE TRÂNSITO",
    "06":   "OUTROS TIPOS LESÕES/ENVENENAMENTOS(AGENT.FIS./QUIM.)",
    "99":   "INFORMAÇÃO INEXISTENTE  (BPA-C)",
    "00":   "CARATER DE ATENDIMENTO NÃO INFORMADO",
};
const racaCor = {
    "00":   "RAÇA/COR NÃO EXIGIDO",
    "01":   "BRANCA",
    "02":   "PRETA",
    "03":   "PARDA",
    "04":   "AMARELA",
    "05":   "INDIGENA",
    "99":   "SEM INFORMAÇÃO"
}

export const BIDictionary = new Map<string, (value: any) => any> ([
    ['CNS_PAC', (value: string) => {
        const cleanStr = value.trim();
        if (!cleanStr) return '';
        return Array.from(cleanStr)
            .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
            .join('')
            .toUpperCase();
    }],
    ['GESTAO', (value: string) => {
        const lastFourDigits = value.slice(-4);
        if (lastFourDigits !== '0000') return value;
        const stateCodeDigits = value.slice(0, 2);
        const stateEntry = Object.entries(StateCode).find(([_, code]) => code === stateCodeDigits);
        return stateEntry ? stateEntry[0] + ' - Estadual' : value;
    }],
    ['CONDIC', (value: string) => tipoGestao[value as keyof typeof tipoGestao]],
    ['TPUPS', (value: string) => tipoEstabelecimento[value as keyof typeof tipoEstabelecimento]],
    ['MN_IND', (value: string) => value == "M" ? "Mantido" : "Individual"],
    ['TPFIN', (value: string) => tipoFinanciamento[value as keyof typeof tipoFinanciamento]],
    ['COMPLEX', (value: string) => complexidade[value as keyof typeof complexidade]],
    ['CATEND', (value: string) => caraterAtendimento[value as keyof typeof caraterAtendimento] ?? "CARATER DE ATENDIMENTO INVALIDO"],
    ['IDADEPAC', (value: string) => parseInt(value)],
    ['DTNASC', (value: string) => {
        if (!/^\d{8}$/.test(value)) return undefined; // garante que tem 8 dígitos

        const year = parseInt(value.slice(0, 4), 10);
        const month = parseInt(value.slice(4, 6), 10) - 1; // JS: 0 = janeiro
        const day = parseInt(value.slice(6, 8), 10);

        const date = new Date(year, month, day);
        return isNaN(date.getTime()) ? undefined : date;
    }],
    ['SEXOPAC', (value: string) => value == "M" ? "Masculino" : "Feminino"],
    ['RACACOR', (value: string) => racaCor[value as keyof typeof racaCor] ?? "INDEVIDO"],
    ['UFDIF', (value: string) => value == "0" ? "Mesma UF" : "UF diferente"],
    ['MNDIF', (value: string) => value == "0" ? "Mesmo município" : "Município diferente"]
]);