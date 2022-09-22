import {con} from "./connection.js"

export async function cadastrarTenis(tenis) {
    const comando = 
    `
    INSERT INTO TB_PRODUTO (ID_PRODUTO_MARCA,ID_PRODUTO_GENERO,NM_PRODUTO,QTD_PRODUTO, VL_PRODUTO, DS_LANCAMENTO, NR_PRODUTO)
                    VALUES(?,?,?, ?, ?, ?,?)
    `
    
    const [resposta] = await con.query(comando, [tenis.marca, tenis.genero, tenis.nome, tenis.quantidade, tenis.valor, tenis.lancamento, tenis.tamanho]);
    tenis.id = resposta.insertid;
    return tenis;
}