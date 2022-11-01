-- inserir administrador 
INSERT INTO TB_ADMIN (DS_EMAIL, DS_SENHA)
VALUES('junior', '1234');


INSERT INTO TB_PRODUTO_MARCA(NM_MARCA)
VALUES('jordan');

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
INSERT INTO TB_PRODUTO_TAMANHO (DS_TAMANHO)
VALUES(41);

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
            
            
-- alterar imagem
UPDATE TB_PRODUTO
		SET IMG_PRODUTO     = ''
WHERE  ID_PRODUTO			= 1;


-- deletar produto
DELETE FROM TB_PRODUTO
	WHERE ID_PRODUTO = 1;
    
    


select  * from TB_USUARIO; 

select * from TB_PRODUTO;

select * from TB_PEDIDO;	

select * from TB_PEDIDO_ITEM;

select * from tb_pagamento_cartao;

select * from tb_usuario_endereco;	




	


