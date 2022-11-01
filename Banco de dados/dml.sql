CREATE DATABASE DB_STYLUS;

USE DB_STYLUS;


-- PARTE DO ADMIN

CREATE TABLE TB_ADMIN (
    ID_ADMIN INT primary key auto_increment,
        DS_EMAIL    VARCHAR(50),
        DS_SENHA    VARCHAR(50)
);

-- TABELAS DE PRODUTO

CREATE TABLE TB_PRODUTO_GENERO(
    ID_PRODUTO_GENERO INT PRIMARY KEY AUTO_INCREMENT,
        DS_GENERO    VARCHAR(30)
);

CREATE TABLE TB_PRODUTO_MARCA(
    ID_PRODUTO_MARCA INT PRIMARY KEY AUTO_INCREMENT,
        NM_MARCA    VARCHAR(30)

);

CREATE TABLE TB_PRODUTO_TAMANHO(
    ID_PRODUTO_TAMANHO INT PRIMARY KEY AUTO_INCREMENT,
        DS_TAMANHO        INT

);


CREATE TABLE TB_PRODUTO(
    ID_PRODUTO INT PRIMARY KEY AUTO_INCREMENT,
    ID_PRODUTO_MARCA    	INT,
    ID_PRODUTO_GENERO  		INT,
        QTD_PRODUTO    		INT,
        NM_PRODUTO       	VARCHAR(50),
        VL_PRODUTO       	DECIMAL(10, 2),
        DS_LANCAMENTO   	boolean,
        NR_PRODUTO			INT,
        IMG_PRODUTO			VARCHAR(800),
    foreign key (ID_PRODUTO_GENERO) references TB_PRODUTO_GENERO (ID_PRODUTO_GENERO),
    foreign key (ID_PRODUTO_MARCA) references TB_PRODUTO_MARCA (ID_PRODUTO_MARCA)
   

);

-- TABELAS DE USUARIO 

CREATE TABLE TB_USUARIO(
    ID_USUARIO INT PRIMARY KEY AUTO_INCREMENT,
		NM_USUARIO			VARCHAR(50),
        DS_EMAIL		   	VARCHAR(50),
        DS_SENHA		   	VARCHAR(50),
		DS_CPF				VARCHAR(50),
		DS_CEP				VARCHAR(50),
        DS_NASCIMENTO		date
        
);

create table TB_ENDERECO (
	ID_ENDERECO		INT PRIMARY KEY AUTO_INCREMENT,
    ID_USUARIO		INT,
    NM_RUA			VARCHAR(100),
    DS_CEP			VARCHAR(20),
    DS_CIDADE		VARCHAR(100),
    DS_ESTADO		VARCHAR(50),
    DS_BAIRRO		VARCHAR(100),
    NR_ENDERECO		VARCHAR(15),
    DS_COMPLEMENTO  VARCHAR(100),
    FOREIGN KEY (ID_USUARIO)
    REFERENCES TB_USUARIO (ID_USUARIO)
);




insert into TB_USUARIO( NM_USUARIO, DS_EMAIL, DS_SENHA, DS_CPF, DS_CEP, DS_NASCIMENTO	)
VALUES('Junior', 'junior@gmail.com', '1234', '111111','04849', '2004-10-10');

select * from TB_USUARIO;



create table TB_USUARIO_LOGIN (

	ID_USUARIO_LOGIN	INT PRIMARY KEY AUTO_INCREMENT,
    ID_USUARIO			INT,
	DS_EMAIL			VARCHAR(50),
	DS_SENHA			VARCHAR(50),
    FOREIGN KEY (ID_USUARIO)
    REFERENCES TB_USUARIO (ID_USUARIO)
    
);

-- LISTAR PRODUTOS

SELECT ID_PRODUTO			ID,
		TB_PRODUTO_MARCA.NM_MARCA,
        TB_PRODUTO_GENERO.DS_GENERO,
        QTD_PRODUTO    		QUANTIDADE,
        NM_PRODUTO       	NOME,
        VL_PRODUTO       	VALOR,
        DS_LANCAMENTO   	LANCAMENTO,
        NR_PRODUTO			NUMERO
	FROM TB_PRODUTO
    INNER JOIN TB_PRODUTO_MARCA
	ON TB_PRODUTO.ID_PRODUTO_MARCA=TB_PRODUTO_MARCA.ID_PRODUTO_MARCA
    INNER JOIN TB_PRODUTO_GENERO
	ON TB_PRODUTO.ID_PRODUTO_GENERO=TB_PRODUTO_GENERO.ID_PRODUTO_GENERO
	WHERE ID_PRODUTO = 3;

SELECT ID_PRODUTO			ID,
        TB_PRODUTO_MARCA.NM_MARCA,
        TB_PRODUTO_GENERO.DS_GENERO,
        QTD_PRODUTO    		QUANTIDADE,
        NM_PRODUTO       	NOME,
        VL_PRODUTO       	VALOR,
        DS_LANCAMENTO   	LANCAMENTO,
        NR_PRODUTO			NUMERO
    FROM TB_PRODUTO
    INNER JOIN TB_PRODUTO_MARCA
    ON TB_PRODUTO.ID_PRODUTO_MARCA=TB_PRODUTO_MARCA.ID_PRODUTO_MARCA
    INNER JOIN TB_PRODUTO_GENERO
    ON TB_PRODUTO.ID_PRODUTO_GENERO=TB_PRODUTO_GENERO.ID_PRODUTO_GENERO
    WHERE NM_PRODUTO like  '%a%';
    
    
    
    -- alterar produto
UPDATE TB_PRODUTO
	SET     ID_PRODUTO_MARCA			 = 1,
			ID_PRODUTO_GENERO 			 = 1,
			QTD_PRODUTO    		 		 = 15,
			NM_PRODUTO      			 = 	"superstars",
			VL_PRODUTO     				 =	450.00,
			DS_LANCAMENTO  				 =	1,
			NR_PRODUTO					 =	38
		where ID_PRODUTO  = 5;


-- listar endereços
SELECT  ID_ENDERECO			ID,
		DS_RUA				RUA,
        DS_CEP				CEP,
        DS_CIDADE			CIDADE,
        DS_ESTADO			ESTADO,
        DS_BAIRRO			BAIRRO,
        DS_NUMERO			NUMERO,
        DS_COMPLEMENTO		COMPLEMENTO
FROM TB_ENDERECO;



-- TABELAS DE PEDIDO
create TABLE TB_PAGAMENTO_CARTAO(
	ID_PAGAMENTO_CARTAO		 INT PRIMARY KEY AUTO_INCREMENT,
	ID_PEDIDO				 int,
	NM_CARTAO 				 varchar(100) ,
	NR_CARTAO 				 varchar(100), 
	DT_VENCIMENTO			 varchar(100),
	COD_SEGURANCA			 varchar(100),
	NR_PARCELAS 			 int,
	DS_FORMA_PAGAMENTO		 varchar(100),
FOREIGN KEY (ID_PEDIDO) REFERENCES TB_PEDIDO(ID_PEDIDO)
);

CREATE TABLE TB_PEDIDO(
	ID_PEDIDO 				INT PRIMARY KEY AUTO_INCREMENT,
	ID_USUARIO 				int,
	ID_USUARIO_ENDERECO 	int,
	DT_PEDIDO 				datetime,
	COD_NOTA_FISCAL 		varchar(100),
	TP_FRETE 				varchar(100),
	VL_FRETE 				decimal(15,2) ,
	DS_STATUS 				varchar(100), 
	TP_PAGAMENTO 			varchar(100),
foreign key(ID_USUARIO) REFERENCES TB_USUARIO(ID_USUARIO),
FOREIGN KEY(ID_USUARIO_ENDERECO)references TB_USUARIO_ENDERECO(ID_USUARIO_ENDERECO)
);


CREATE TABLE TB_PEDIDO_ITEM(
	ID_PEDIDO_ITEM 		INT PRIMARY KEY AUTO_INCREMENT,
	ID_PEDIDO 			int, 
	ID_PRODUTO 			int,
	QTD_ITENS 			int,
	VL_PRODUTO			decimal(15,2),
FOREIGN KEY (ID_PEDIDO) REFERENCES TB_PEDIDO(ID_PEDIDO),
FOREIGN KEY (ID_PRODUTO) REFERENCES TB_PRODUTO(ID_PRODUTO)
);


delete from TB_USUARIO_ENDERECO
where ID_USUARIO_ENDERECO= 7;

delete from TB_PEDIDO
where ID_PEDIDO= 8;

delete from TB_USUARIO_ENDERECO
where ID_USUARIO_ENDERECO= 7;




