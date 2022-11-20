import { con } from './connection.js'

export async function inserirPedido(novoPedido) {
    const comando = `
    INSERT INTO TB_PEDIDO(
        ID_USUARIO,
        ID_USUARIO_ENDERECO,
        DT_PEDIDO,
        COD_NOTA_FISCAL,
        TP_FRETE, 
        VL_FRETE,
        DS_STATUS, 
        TP_PAGAMENTO
        )
    VALUES(?, ?, ?, ?, ?, ?, ?, ?);
    `

    const [info] = await con.query(comando, [
        novoPedido.idUsuario,
        novoPedido.idEndereco,  
        novoPedido.data,
        novoPedido.notaFiscal,
        novoPedido.tipoFrete,
        novoPedido.valorFrete,
        novoPedido.status,
        novoPedido.tipoPagamento
    ]);
    return info.insertId;
}




export async function inserirPagamento(idPedido, novoPagamento) {
    const comando = `
    INSERT INTO TB_PAGAMENTO_CARTAO(
        ID_PEDIDO,
        NM_CARTAO,
        NR_CARTAO,
        DT_VENCIMENTO,
        COD_SEGURANCA,
        NR_PARCELAS,
        DS_FORMA_PAGAMENTO
        )
    VALUES(?, ?, ?, ?, ?, ?,?);
    `

    const [info] = await con.query(comando, [
        idPedido,
        novoPagamento.nome,
        novoPagamento.numero,
        novoPagamento.vencimento,
        novoPagamento.codSeguranca,
        novoPagamento.parcelas,
        novoPagamento.formaPagamento
    ]);
    return info.affectedRows;
}






export async function inserirPedidoItem(idPedido, idProduto, qtd, valor) {
    const comando = `
    INSERT INTO TB_PEDIDO_ITEM(
        ID_PEDIDO,
        ID_PRODUTO,
        QTD_ITENS,
        VL_PRODUTO
        )
    VALUES(?, ?, ?, ?);
    `

    const [info] = await con.query(comando, [idPedido, idProduto, qtd, valor]);
    return info.affectedRows;
}



export async function listarPedido(){
    const comando= `

    SELECT 	TB_USUARIO.ID_USUARIO	IDUSUARIO,
        ID_PEDIDO				    ID,
        TB_USUARIO.NM_USUARIO	    NOME,
        ID_USUARIO_ENDERECO,
        VL_FRETE				    FRETE,
        DS_STATUS				    STATUS,
        TP_PAGAMENTO			    PAGAMENTO
    FROM TB_PEDIDO	
    JOIN TB_USUARIO
    ON TB_PEDIDO.ID_USUARIO = TB_USUARIO.ID_USUARIO;
`
    const [linhas] =await con.query(comando);
    return linhas;
}


export async function alterarPedido(pedido,id){
    const comando =`
        UPDATE tb_pedido
            SET DS_STATUS 		= ?	
        where ID_PEDIDO = ?;
    `

    const [resposta] = await con.query(comando, [pedido, id]);
    return resposta.affectedRows;
}



export async function buscarPedidoId(id){
    const comando=
    `
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
    where ID_PEDIDO=?;
    `
    const [linhas] =await con.query(comando, [id]);
    return linhas[0];
}



export async function listarPedidosUsuario(idUsuario) {
    const comando = `
    SELECT 	ID_PEDIDO		id_pedido,
        ID_USUARIO			id,
        DS_STATUS		 	situação,
        VL_frete 		    frete,
        COD_NOTA_FISCAL		notafiscal,
        DT_PEDIDO			datapedido
    FROM TB_PEDIDO 
    JOIN tb_produto
    ON TB_PEDIDO.ID_PEDIDO = tb_produto.ID_PRODUTO
    WHERE ID_USUARIO =?; 	
    `

    const [registros] = await con.query(comando, [idUsuario]);
    return registros;
}


export async function verificarSituacao(situação){
    const comando=
    `
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
    WHERE DS_STATUS like ?; 	
    `

    const [linhas] =await con.query(comando, [ `%${situação}%`]);
    return linhas;
}


export async function verificarConfirmados(){
    const comando=
    `
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
    WHERE DS_STATUS = 'aprovado'; 	
    `

    const [linhas] = await con.query(comando);
    return linhas;
}