INSERT INTO TB_ADMIN (DS_EMAIL, DS_SENHA)
VALUES('junior', '1234');


INSERT INTO TB_PRODUTO_MARCA(NM_MARCA)
VALUES('jordan');

INSERT INTO TB_PRODUTO_GENERO (DS_GENERO)
VALUES('feminino');

select * from TB_PRODUTO_GENERO;

INSERT INTO TB_PRODUTO (ID_PRODUTO_MARCA,ID_PRODUTO_GENERO,NM_PRODUTO,QTD_PRODUTO, VL_PRODUTO, DS_LANCAMENTO, NR_PRODUTO, IMG_PRODUTO)
VALUES(2,2,'kkkkk', 50, 1000.99, true, 41, '');



insert into TB_USUARIO( NM_USUARIO, DS_EMAIL, DS_SENHA, DS_CPF, DS_CEP, DS_NASCIMENTO)
VALUES('Junior', 'junior@gmail.com', '1234', '111111','04849', '2004-10-10');



INSERT INTO TB_PRODUTO_TAMANHO (DS_TAMANHO)
VALUES(41);


-- alterar imagem
UPDATE TB_PRODUTO
		SET IMG_PRODUTO     = ''
WHERE  ID_PRODUTO			= 1;


-- deletar produto
DELETE FROM TB_PRODUTO
	WHERE ID_PRODUTO = 1;
    
    


select  * from TB_USUARIO; 

select * from TB_PRODUTO;

