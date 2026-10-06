ALTER TABLE filmes ADD COLUMN diretor VARCHAR(100)

ALTER TABLE filmes ALTER COLUMN
ALTER TABLE filmes DROP COLUMN

UPDATE filmes SET nota = 9.0 WHERE id = 1
DELETE FROM filmes WHERE id = 



INSERT INTO filmes (titulo, ano_lancamento, duracao_minutos, nota, sinopse)
VALUES ('oppernhimer', 2023, 180, 9.0, 'filme sobre bomba.')

INSERT INTO filmes VALUES (DEFAULT, 'la ele', 2067, 190, 9.0, 'recebax')

SELECT * FROM filmes ORDER BY id ASC;

CREATE TABLE filmes(
	id SERIAL PRIMARY KEY,
	titulo VARCHAR(150) NOT NULL,
	ano_lancamento INTEGER NOT NULL,
	duracao_minutos INTEGER NOT NULL,
	nota NUMERIC(2,1) NOT NULL,
	sinopse TEXT
);


SELECT * FROM aluno ORDER BY id ASC;

INSERT INTO aluno (nome, ano_nascimento, matriculado, nota, nome_da_mae, nome_do_pai )
VALUES ('Jose', '2020-04-07', TRUE, 9.0, 'Flavia', 'Robson')

INSERT INTO aluno VALUES (DEFAULT, 'Jao', '2019-09-23', FALSE, 5.0, 'Laura', 'trevor')

INSERT INTO aluno VALUES (DEFAULT, 'Nicolas', '2010-05-31',  TRUE, 2.0, 'Juzelia', 'sr eletricidade')

CREATE TABLE aluno(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(150) NOT NULL,
	ano_nascimento DATE NOT NULL,,
	cpf VARCHAR(11) UNIQUE NOT NULL,
	nome_da_mae TEXT,
	nome_do_pai TEXT,
	data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE profuto(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(150) NOT NULL,
	validade DATE NOT NULL,
	val_passou BOOLEAN NOT NULL,
	 NUMERIC(2,1) NOT NULL,
	nome_da_mae TEXT,
	nome_do_pai TEXT
);