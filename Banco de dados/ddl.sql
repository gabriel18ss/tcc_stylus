-- inserir administrador 
INSERT INTO TB_ADMIN (DS_EMAIL, DS_SENHA)
VALUES('junior', '1234');


INSERT INTO TB_PRODUTO_MARCA(NM_MARCA)
VALUES('jordan');

 insert into TB_PRODUTO_TAMANHO(ID_PRODUTO, ID_TAMANHO)
                          values (150, 5);

INSERT INTO TB_PRODUTO_GENERO (DS_GENERO)
VALUES('feminino');

select * from TB_PRODUTO_GENERO;

-- inserir tamanho
INSERT INTO TB_PRODUTO (ID_PRODUTO_MARCA,ID_PRODUTO_GENERO,NM_PRODUTO,QTD_PRODUTO, VL_PRODUTO, DS_LANCAMENTO, NR_PRODUTO, IMG_PRODUTO)
VALUES(2,2,'kkkkk', 50, 1000.99, true, 41, '');


-- inserir usuario
insert into TB_USUARIO( NM_USUARIO, DS_EMAIL, DS_SENHA, DS_CPF, DS_CEP, DS_NASCIMENTO)
VALUES('Junior', 'junior@gmail.com', '1234', '111111','04849', '2004-10-10');


-- inserir tamanho
INSERT INTO TB_TAMANHO (DS_TAMANHO)
VALUES(45);

-- inserir endereço
INSERT INTO TB_ENDERECO(NM_RUA, DS_CEP, DS_CIDADE, DS_ESTADO, DS_BAIRRO, NR_ENDERECO, DS_COMPLEMENTO)
VALUES('Bernardo de Claraval', '04832-000', 'São Paulo', 'São Paulo', 'Jardim Pousso Alegre', '403', 'Igreja São Judas');




-- inserir pagamento
INSERT INTO TB_PAGAMENTO_CARTAO(ID_PEDIDO, NM_CARTAO, NR_CARTAO, DT_VENCIMENTO, COD_SEGURANCA, NR_PARCELAS, DS_FORMA_PAGAMENTO)
					VALUES(1, 'Marcio Batista dos Santos', '5500 6688 2244', '28-08-2024', '11658', 2, 'debito');

-- inserir pedido
	INSERT INTO TB_PEDIDO(ID_USUARIO, ID_USUARIO_ENDERECO, DT_PEDIDO, COD_NOTA_FISCAL, TP_FRETE, VL_FRETE, DS_STATUS, TP_PAGAMENTO)
						VALUES(1, 1, '28-10-2022 18:00:00', 'AB1234', 'pago', 11.00, 'caminho', 'cartão');

-- inserir pedido item
INSERT INTO TB_PEDIDO_ITEM(ID_PEDIDO, ID_PRODUTO, QTD_ITENS, VL_PRODUTO)
						VALUES(1, 4, 4, 20.00);
-- inserir tamanhos em um produto

insert into TB_PRODUTO_TAMANHO(ID_PRODUTO, ID_TAMANHO)
                            values (1, 9);

-- buscar produto tamanho
 select ID_TAMANHO         			as ID,
            DS_TAMANHO            	as TAMANHO
        from TB_TAMANHO
        where ID_TAMANHO = 1;

-- alterar imagem
UPDATE TB_PRODUTO
		SET IMG_PRODUTO     = ''
WHERE  ID_PRODUTO			= 1;


-- deletar produto
DELETE FROM TB_PRODUTO
	WHERE ID_PRODUTO = 1;
    
-- listar Tamanho
 select ID_TAMANHO     		as ID,
          DS_TAMANHO			    	as TAMANHO
    from TB_TAMANHO;

-- LISTAR LANÇMENTOS
SELECT ID_PRODUTO			ID,
        TB_PRODUTO_MARCA.NM_MARCA,
        TB_PRODUTO_GENERO.DS_GENERO,
        QTD_PRODUTO    		QUANTIDADE,
        NM_PRODUTO       	NOME,
        VL_PRODUTO       	VALOR,
        DS_LANCAMENTO   	LANCAMENTO,
        NR_PRODUTO			NUMERO,
        IMG_PRODUTO			IMAGEM
    FROM TB_PRODUTO
    INNER JOIN TB_PRODUTO_MARCA
    ON TB_PRODUTO.ID_PRODUTO_MARCA=TB_PRODUTO_MARCA.ID_PRODUTO_MARCA
    INNER JOIN TB_PRODUTO_GENERO
    ON TB_PRODUTO.ID_PRODUTO_GENERO=TB_PRODUTO_GENERO.ID_PRODUTO_GENERO
    where DS_LANCAMENTO = 1;


-- LISTAR PEDIDO
SELECT 	TB_USUARIO.ID_USUARIO	IDUSUARIO,
		ID_PEDIDO				ID,
        TB_USUARIO.NM_USUARIO	NOME,
        ID_USUARIO_ENDERECO,
        VL_FRETE				FRETE,
        DS_STATUS				STATUS,
        TP_PAGAMENTO			PAGAMENTO
FROM TB_PEDIDO	
JOIN TB_USUARIO
ON TB_PEDIDO.ID_USUARIO = TB_USUARIO.ID_USUARIO;


-- LISTAR PEDIDOS DO USUARIO
SELECT 	TB_PRODUTO.NM_PRODUTO AS NOME, TB_PRODUTO.VL_PRODUTO AS VALOR, TB_PEDIDO.ID_PEDIDO, TB_PEDIDO.DT_PEDIDO AS DATA, TB_PEDIDO.DS_STATUS, tb_endereco.DS_CEP AS CEP, tb_endereco.NR_ENDERECO
FROM TB_PRODUTO	
LEFT JOIN TB_PEDIDO
ON TB_PRODUTO.ID_PRODUTO = TB_PEDIDO.ID_PEDIDO
LEFT JOIN tb_endereco
ON TB_PRODUTO.ID_PRODUTO = tb_endereco.ID_ENDERECO;

-- BUSCAR PEDIDO POR ID
 SELECT 	TB_USUARIO.ID_USUARIO	IDUSUARIO,
        ID_PEDIDO				    ID,
        TB_USUARIO.NM_USUARIO	    NOME,
        ID_USUARIO_ENDERECO,
        VL_FRETE				    FRETE,
        DS_STATUS				    STATUS,
        TP_PAGAMENTO			    PAGAMENTO
    FROM TB_PEDIDO	
    JOIN TB_USUARIO
    ON TB_PEDIDO.ID_USUARIO = TB_USUARIO.ID_USUARIO
    where ID_PEDIDO=2;

select *
from tb_pedido, tb_usuario;




-- ALTERAR STATUS PEDIDO

UPDATE tb_pedido
	SET DS_STATUS 		= "Pagamento Confirmado"	
where ID_PEDIDO = 2;

select ID_PRODUTO	ID,
		ID_TAMANHO	IDTAMANHO
FROM TB_PRODUTO
INNER JOIN TB_PRODUTO_TAMANHO
ON TB_PRODUTO.ID_PRODUTO_TAMANHO=tb_produto_tamanho.ID_PRODUTO_TAMANHO;



select  * from TB_USUARIO; 

select * from tb_produto;

select * from TB_PEDIDO;	

select * from TB_PEDIDO_ITEM;

select * from tb_pagamento_cartao;

select * from tb_endereco;	
select * from tb_produto_tamanho;	


drop table TB_;


alter TABLE tb_pedido drop column NM_USUARIO;

	


