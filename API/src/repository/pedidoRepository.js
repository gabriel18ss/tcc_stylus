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
