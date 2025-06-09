-- Criação da tabela 'datasource'
CREATE TABLE IF NOT EXISTS datasource (tag VARCHAR(255) PRIMARY KEY, name VARCHAR(255));

-- Inserindo as fontes de dados
INSERT INTO datasource (tag, name) VALUES ('AB', 'APAC de Acompanhamento a Cirurgia Bariátrica - A Partir de Jan/2008 até Mar/2013');
INSERT INTO datasource (tag, name) VALUES ('ABO', 'APAC Acompanhamento Pós Cirurgia Bariátrica - A Partir de Abr/2013');
INSERT INTO datasource (tag, name) VALUES ('ACF', 'APAC Confeção de Fístula Arteriovenosa - A Partir de Jun/2014');
INSERT INTO datasource (tag, name) VALUES ('AD', 'APAC de Laudos Diversos - A Partir de Jan/2008');
INSERT INTO datasource (tag, name) VALUES ('AM', 'APAC de Medicamentos - A Partir de Jan/2008');
INSERT INTO datasource (tag, name) VALUES ('AN', 'APAC de Nefrologia - A Partir de Jan/2008 até Out/2014');
INSERT INTO datasource (tag, name) VALUES ('AQ', 'APAC de Quimioterapia - A Partir de Jan/2008');
INSERT INTO datasource (tag, name) VALUES ('AR', 'APAC de Radioterapia - A Partir de Jan/2008');
INSERT INTO datasource (tag, name) VALUES ('ATD', 'APAC Tratamento Dialítico - A Partir de Jun/2014');
INSERT INTO datasource (tag, name) VALUES ('PA', 'Produção Ambulatorial - A Partir de Jul/1994');
INSERT INTO datasource (tag, name) VALUES ('PS', 'Psicossocial - A Partir de Jan/2013');
INSERT INTO datasource (tag, name) VALUES ('SAD', 'Atenção Domiciliar - A Partir de Nov/2012');