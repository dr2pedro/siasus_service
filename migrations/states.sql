-- Criação da tabela 'state'
CREATE TABLE IF NOT EXISTS state (id INTEGER PRIMARY KEY, state VARCHAR(255), tag VARCHAR(255));

-- Região Norte
INSERT INTO state (id, state, tag) VALUES (11, 'Rondônia', 'RO');
INSERT INTO state (id, state, tag) VALUES (12, 'Acre', 'AC');
INSERT INTO state (id, state, tag) VALUES (13, 'Amazonas', 'AM');
INSERT INTO state (id, state, tag) VALUES (14, 'Roraima', 'RR');
INSERT INTO state (id, state, tag) VALUES (15, 'Pará', 'PA');
INSERT INTO state (id, state, tag) VALUES (16, 'Amapá', 'AP');
INSERT INTO state (id, state, tag) VALUES (17, 'Tocantins', 'TO');

-- Região Nordeste
INSERT INTO state (id, state, tag) VALUES (21, 'Maranhão', 'MA');
INSERT INTO state (id, state, tag) VALUES (22, 'Piauí', 'PI');
INSERT INTO state (id, state, tag) VALUES (23, 'Ceará', 'CE');
INSERT INTO state (id, state, tag) VALUES (24, 'Rio Grande do Norte', 'RN');
INSERT INTO state (id, state, tag) VALUES (25, 'Paraíba', 'PB');
INSERT INTO state (id, state, tag) VALUES (26, 'Pernambuco', 'PE');
INSERT INTO state (id, state, tag) VALUES (27, 'Alagoas', 'AL');
INSERT INTO state (id, state, tag) VALUES (28, 'Sergipe', 'SE');
INSERT INTO state (id, state, tag) VALUES (29, 'Bahia', 'BA');

-- Região Sudeste
INSERT INTO state (id, state, tag) VALUES (31, 'Minas Gerais', 'MG');
INSERT INTO state (id, state, tag) VALUES (32, 'Espírito Santo', 'ES');
INSERT INTO state (id, state, tag) VALUES (33, 'Rio de Janeiro', 'RJ');
INSERT INTO state (id, state, tag) VALUES (35, 'São Paulo', 'SP');

-- Região Sul
INSERT INTO state (id, state, tag) VALUES (41, 'Paraná', 'PR');
INSERT INTO state (id, state, tag) VALUES (42, 'Santa Catarina', 'SC');
INSERT INTO state (id, state, tag) VALUES (43, 'Rio Grande do Sul', 'RS');

-- Região Centro-Oeste
INSERT INTO state (id, state, tag) VALUES (50, 'Mato Grosso do Sul', 'MS');
INSERT INTO state (id, state, tag) VALUES (51, 'Mato Grosso', 'MT');
INSERT INTO state (id, state, tag) VALUES (52, 'Goiás', 'GO');
INSERT INTO state (id, state, tag) VALUES (53, 'Distrito Federal', 'DF');