INSERT INTO TB_ADMIN (DS_EMAIL, DS_SENHA)
VALUES('junior', '1234');


INSERT INTO TB_PRODUTO_MARCA(NM_MARCA)
VALUES('jordan');

INSERT INTO TB_PRODUTO_GENERO (DS_GENERO)
VALUES('feminino');

INSERT INTO TB_PRODUTO (ID_PRODUTO_MARCA,ID_PRODUTO_GENERO,NM_PRODUTO,QTD_PRODUTO, VL_PRODUTO, DS_LANCAMENTO, NR_PRODUTO, IMG_PRODUTO)
VALUES(2,2,'kkkkk', 50, 1000.99, true, 41, '');

INSERT INTO TB_PRODUTO_TAMANHO (DS_TAMANHO)
VALUES(41);

UPDATE TB_PRODUTO
		SET IMG_PRODUTO     = ''
WHERE  ID_PRODUTO			= 1;

select  * from TB_ADMIN; 

select  * from TB_PRODUTO_MARCA

select * from TB_PRODUTO_GENERO;

select * from TB_PRODUTO;

select * from TB_PRODUTO_TAMANHO;
