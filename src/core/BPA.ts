// @filename: BPA.ts

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

import {Records} from "./Records.js";

export type PA_BPA = {
    // Código do Estabelecimento no CNES (Cadastro Nacional de Estabelecimentos de Saúde).
    'PA_CODUNI'?: string,
    // Código da Unidade da Federação (IBGE) + Código do Município (IBGE) do Gestor, ou UF0000 se o estabelecimento estiver sob Gestão Estadual.
    'PA_GESTAO'?: string,
    // Sigla do Tipo de Gestão no qual o Estado ou Município está habilitado.
    'PA_CONDIC'?: string,
    // Unidade da Federação + Código do Município onde está localizado o estabelecimento.
    'PA_UFMUN'?: string,
    // Código da Regra Contratual.
    'PA_REGCT'?: string,
    // Incremento Outros.
    'PA_INCOUT'?: string,
    // Incremento Urgência.
    'PA_INCURG'?: string,
    // Tipo de Estabelecimento.
    'PA_TPUPS'?: string,
    // Tipo de Prestador.
    'PA_TIPPRE'?: string,
    // Estabelecimento Mantido / Individual.
    'PA_MN_IND'?: string,
    // CNPJ do Estabelecimento executante.
    'PA_CNPJCPF'?: string,
    // CNPJ da Mantenedora do estabelecimento ou zeros, caso não a tenha.
    'PA_CNPJMNT'?: string,
    // CNPJ do Órgão que recebeu pela produção por cessão de crédito ou zeros, caso não o tenha.
    'PA_CNPJ_CC'?: string,
    // Data de Processamento / Movimento (AAAAMM).
    'PA_MVM'?: string,
    // Data da Realização do Procedimento / Competência (AAAAMM).
    'PA_CMP'?: string,
    // Código do Procedimento Ambulatorial.
    'PA_PROC_ID'?: string,
    // Tipo de Financiamento da produção.
    'PA_TPFIN'?: string,
    // Subtipo de Financiamento da produção.
    'PA_SUBFIN'?: string,
    // Complexidade do Procedimento.
    'PA_NIVCPL'?: string,
    // Instrumento de Registro (conforme explicado na página 2).
    'PA_DOCORIG'?: string,
    /*
        Número da APAC ou número de autorização do BPA-I, conforme o caso. No BPA-I, não é obrigatório, portanto, não é criticado.

        Lei de formação: UFAATsssssssd, onde: UF – Unid. da Federação, AA – ano, T – tipo, sssssss – sequencial, d – dígito.
     */
    'PA_AUTORIZ'?: string,
    // Número do CNS (Cartão Nacional de Saúde) do profissional de saúde executante.
    'PA_CNSMED'?: string,
    // Código da Ocupação do profissional na Classificação Brasileira de Ocupações (Ministério do Trabalho).
    'PA_CBOCOD'?: string,
    // Motivo de saída ou zeros, caso não tenha.
    'PA_MOTSAI'?: string,
    // Indicador de Óbito (APAC).
    'PA_OBITO'?: string,
    // Indicador de Encerramento (APAC).
    'PA_ENCERR'?: string,
    // Indicador de Permanência (APAC).
    'PA_PERMAN'?: string,
    // Indicador de Alta (APAC).
    'PA_ALTA'?: string,
    // Indicador de Transferência (APAC).
    'PA_TRANSF'?: string,
    // CID Principal (APAC ou BPA-I).
    'PA_CIDPRI'?: string,
    // CID Secundário (APAC).
    'PA_CIDSEC'?: string,
    // CID Causas Associadas (APAC).
    'PA_CIDCAS'?: string,
    // Caráter de Atendimento (APAC ou BPA-I).
    'PA_CATEND'?: string,
    // Idade do paciente em anos.
    'PA_IDADE'?: string,
    // Idade mínima do paciente para realização do procedimento.
    'IDADEMIN'?: string,
    // Idade máxima do paciente para realização do procedimento.
    'IDADEMAX'?: string,
    /*
        Compatibilidade com a faixa de idade do procedimento (SIGTAP – Sistema de Gerenciamento da Tabela de Procedimentos do SUS):

        0 = Idade não exigida; 1 = Idade compatível com o SIGTAP; 2 = Idade fora da faixa do SIGTAP; 3 = Idade inexistente; 4 = Idade EM BRANCO.
    */
    'PA_FLIDADE'?: string,
    // Sexo do paciente.
    'PA_SEXO'?: string,
    // Raça/Cor do paciente: 01 - Branca, 02 - Preta, 03 - Parda, 04 - Amarela, 05 - Indígena, 99 - Sem informação.
    'PA_RACACOR'?: string,
    // Código da Unidade da Federação + Código do Município de residência do paciente ou do estabelecimento, caso não se tenha a identificação do paciente, o que ocorre no (BPA).
    'PA_MUNPCN'?: string,
    // Quantidade Produzida (APRESENTADA).
    'PA_QTDPRO'?: string,
    // Quantidade Aprovada do procedimento.
    'PA_QTDAPR'?: string,
    // Valor Produzido (APRESENTADO).
    'PA_VALPRO'?: string,
    // Valor Aprovado do procedimento.
    'PA_VALAPR'?: string,
    /*
        Indica se a UF de residência do paciente é diferente da UF de localização do estabelecimento:
        0 = mesma UF; 1 = UF diferente.
    */
    'PA_UFDIF'?: string,
    /*
        Indica se o município de residência do paciente é diferente do município de localização do estabelecimento:
        0 = mesmo município; 1 = município diferente.
    */
    'PA_MNDIF'?: string,
    /*
        Diferença do Valor Unitário do procedimento praticado na Tabela Unificada com Valor Unitário praticado
        pelo Gestor da Produção, multiplicado pela Quantidade Aprovada.
    */
    'PA_DIF_VAL'?: string,
    // Valor Unitário do Procedimento da Tabela VPA.
    'NU_VPA_TOT'?: string,
    // Valor Unitário do Procedimento da Tabela SIGTAP.
    'NU_PA_TOT'?: string,
    /*
        Indicativo de situação da produção produzida:
        0 = não aprovado; 5 = aprovado total; 6 = aprovado parcial.
     */
    'PA_INDICA'?: string,
    // Código de Ocorrência.
    'PA_CODOCO'?: string,
    // Indicador de erro de Quantidade Produzida.
    'PA_FLQT'?: string,
    // Indicador de erro de corpo da APAC.
    'PA_FLER'?: string,
    // Etnia do paciente.
    'PA_ETNIA'?: string,
    // Valor do Complemento Federal.
    'PA_VL_CF'?: string,
    // Valor do Complemento Local.
    'PA_VL_CL'?: string,
    // Valor do Incremento.
    'PA_VL_INC'?: string,
    // Código do Serviço Especializado / Classificação CBO (de acordo com o CNES).
    'PA_SRC_C'?: string,
    // Código de Identificação Nacional de Equipes para registrar a atuação das equipes na execução de ações de saúde.
    'PA_INE'?: string,
    // Código da Natureza Juridica.
    'PA_NAT_JUR'?: string
    [key: string]: any
}

export type BPA_I = {
    // Código do Estabelecimento no CNES (Cadastro Nacional de Estabelecimentos de Saúde).
    'CODUNI': string,
    // Código da Unidade da Federação + Código do Município (IBGE) do Gestor, ou UF0000 se o estabelecimento estiver sob Gestão Estadual.
    'GESTAO': string,
    // Sigla do Tipo de Gestão no qual o Estado ou Município está habilitado.
    'CONDIC': string,
    // Código da Unidade da Federação + Código do Município onde está localizado o estabelecimento.
    'UFMUN': string,
    // Tipo de do Estabelecimento.
    'TPUPS': string,
    // Tipo de Prestador.
    'TIPPRE': string,
    // Estabelecimento Mantido / Individual.
    'MN_IND': string,
    // CNPJ do Estabelecimento executante.
    'CNPJCPF': string,
    // CNPJ da Mantenedora do estabelecimento ou zeros, caso não a tenha.
    'CNPJMNT': string,
    // CNPJ do Órgão que recebeu pela produção por cessão de crédito ou zeros, caso não o tenha.
    'CNPJ_CC': string,
    // Ano e mês de Processamento da produção (AAAAMM).
    'DT_PROCESS': string,
    // Ano e mês do Atendimento (AAAAMM).
    'DT_ATEND': string,
    // Código do Procedimento Ambulatorial.
    'PROC_ID': string,
    // Tipo de Financiamento da produção.
    'TPFIN': string,
    // Subtipo de Financiamento da produção.
    'SUBFIN': string,
    // Complexidade do Procedimento.
    'COMPLEX': string,
    /*
        Número da APAC ou número de autorização do BPA-I, conforme o caso. No BPA-I, não é obrigatório, portanto,
        não é criticado. Lei de formação: UFAATsssssssd, onde: UF – Unid. da Federação, AA – ano, T – tipo, sssssss –
        sequencial, d – dígito.
     */
    'AUTORIZ': string,
    // Número do CNS (Cartão Nacional de Saúde) do profissional de saúde executante.
    'CNSPROF': string,
    // Código da Ocupação do profissional na Classificação Brasileira de Ocupações (Ministério do Trabalho).
    'CBOPROF': string,
    // CID Principal.
    'CIDPRI': string,
    // Caráter de Atendimento.
    'CATEND': string,
    // Número do CNS (Cartão Nacional de Saúde) do paciente.
    'CNS_PAC': string,
    // Data de nascimento do Paciente.
    'DTNASC': string,
    // Tipo da Idade do paciente em anos, meses ou dias. Calculado a partir da data de nascimento.
    'TPIDADEPAC': string,
    // Idade do Paciente.
    'IDADEPAC': string,
    // Sexo do paciente.
    'SEXOPAC': string,
    // Raça/Cor do paciente: 01 - Branca, 02 - Preta, 03 - Parda, 04 - Amarela, 05 - Indígena, 99 - Sem informação.
    'RACACOR': string,
    /*
        Código da Unidade da Federação + Código do Município de residência do paciente ou do estabelecimento, caso
        não se tenha a identificação do paciente, o que ocorre no (BPA).
     */
    'MUNPAC': string,
    // Quantidade Produzida (APRESENTADA).
    'QT_APRES': string,
    // Quantidade Aprovada do procedimento.
    'QT_APROV': string,
    // Valor Produzido (APRESENTADO).
    'VL_APRES': string,
    // Valor Aprovado do procedimento.
    'VL_APROV': string,
    /*
        Indica se a UF de residência do paciente é diferente da UF de localização do estabelecimento:
        0 = mesma UF; 1 = UF diferente.
     */
    'UFDIF': string,
    /*
        Indica se o município de residência do paciente é diferente do município de localização do estabelecimento:
        0 = mesmo município; 1 = município diferente.
     */
    'MNDIF': string,
    /*
        Conteúdo definido conforme Portaria SAS Nº 508, de 28 de Setembro de 2010. Anexo I.
        Preencher somente se o campo RACACOR for 05 - Indígena. A partir da competência Out/2010.
     */
    'ETNIA': string,
    // Código da Natureza Jurídica.
    'NAT_JUR': string
}

export type BPA = Records & PA_BPA | Records & BPA_I;