import {con} from "./connection.js"

export async function cadastrarTenis(tenis) {
    const comando = 
    `
    INSERT INTO TB_PRODUTO (ID_PRODUTO_MARCA,ID_PRODUTO_GENERO,NM_PRODUTO,QTD_PRODUTO, VL_PRODUTO, DS_LANCAMENTO, NR_PRODUTO, IMG_PRODUTO)
                    VALUES(?,?,?, ?, ?, ?,?,?)
    `
    
    const [resposta] = await con.query(comando, [tenis.marca, tenis.genero, tenis.nome, tenis.quantidade, tenis.valor, tenis.lancamento, tenis.tamanho, tenis.imagem]);
    tenis.id = resposta.insertId;
    return tenis;
}



export async function alterarImagem(imagem, id) {
    const comando = 
        `UPDATE TB_PRODUTO
	    	SET IMG_PRODUTO     = ?
        WHERE  ID_PRODUTO	    = ?`
    
    
    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}



export async function listarTenis(){
    const comando=
    `SELECT ID_PRODUTO			ID,
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
    ON TB_PRODUTO.ID_PRODUTO_GENERO=TB_PRODUTO_GENERO.ID_PRODUTO_GENERO`
    const [linhas] =await con.query(comando);
    return linhas;
}



export async function buscarPorId(id){
    const comando=
    `SELECT ID_PRODUTO			as id,
        TB_PRODUTO_MARCA.NM_MARCA as MARCA,
        TB_PRODUTO_GENERO.DS_GENERO as GENERO,
        QTD_PRODUTO    		as QUANTIDADE,
        NM_PRODUTO       	as NOME,
        VL_PRODUTO       	as valor,
        DS_LANCAMENTO   	LANCAMENTO,
        NR_PRODUTO			NUMERO,
        IMG_PRODUTO			IMAGEM
    FROM TB_PRODUTO
    INNER JOIN TB_PRODUTO_MARCA
    ON TB_PRODUTO.ID_PRODUTO_MARCA=TB_PRODUTO_MARCA.ID_PRODUTO_MARCA
    INNER JOIN TB_PRODUTO_GENERO
    ON TB_PRODUTO.ID_PRODUTO_GENERO=TB_PRODUTO_GENERO.ID_PRODUTO_GENERO
    WHERE ID_PRODUTO = ?;`
    const [linhas] =await con.query(comando, [id]);
    return linhas[0];
}



export async function buscarPorNome(NOME){
    const comando=
    `SELECT ID_PRODUTO			ID,
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
    WHERE NM_PRODUTO like ?;`

    const [linhas] =await con.query(comando, [ `%${NOME}%`]);
    return linhas;
}



export async function deletarProduto(id){
    const comando =
   ` DELETE FROM TB_PRODUTO
    WHERE	ID_PRODUTO = ?`;

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;


}


export async function alterarProduto(id, tenis){
    const comando =
    `UPDATE TB_PRODUTO
        SET     ID_PRODUTO_MARCA			 = ?,
                ID_PRODUTO_GENERO 			 = ?,
                QTD_PRODUTO    		 		 = ?,
                NM_PRODUTO      			 = ?,
                VL_PRODUTO     				 = ?,
                DS_LANCAMENTO  				 = ?,
                NR_PRODUTO					 = ?
            where ID_PRODUTO  = ? `

    const [resposta] = await con.query(comando, [tenis.marca, tenis.genero, tenis.quantidade, tenis.nome, tenis.valor, tenis.lancamento, tenis.tamanho, id]);
    return resposta.affectedRows;

}

