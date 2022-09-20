import {con} from "./connection.js"

export async function cadastrarTenis(tenis) {
    const comando = 
    `
        INSERT INTO TB_PRODUTO (ID_PRODUTO_MARCA,ID_PRODUTO_GENERO,ID_PRODUTO_TAMANHO,NM_PRODUTO,QTD_PRODUTO, VL_PRODUTO, DS_LANCAMENTO)
        VALUES(?, ?, ?, ?, ?, ?, ?)
    `
    
    const [linhas] = await con.query(comando, [tenis.marca, tenis.genero, tenis.tamanho, tenis.nome, tenis.quantidade, tenis.valor, tenis.lancamento]);
    tenis.id =resposta.insertid
    return tenis;
}