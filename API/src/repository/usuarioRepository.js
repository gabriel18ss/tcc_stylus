import { con } from './connection.js'

export async function cadastrarUsuario (usuario) {
    const comando =
       `insert into TB_USUARIO( NM_USUARIO, DS_EMAIL, DS_SENHA, DS_CPF, DS_CEP, DS_NASCIMENTO)
       VALUES(?, ?, ?, ?, ?, ?);`

    const [resposta] = await con.query(comando, [usuario.nome, usuario.email, usuario.senha, usuario.cpf, usuario.cep, usuario.nascimento]);
    usuario.id = resposta.insertid;
    return usuario;
        
}

export async function LoginU (email, senha) {
    const comando =
        `select ID_USUARIO			ID,
                NM_USUARIO  		NOME,
                DS_EMAIL    		EMAIL
         from 	TB_USUARIO
         where 	DS_EMAIL			= ?
         and 	DS_SENHA			= ? `

         const [linhas] = await con.query(comando, [email, senha])
         return linhas[0];
        
}

export async function cadastrarEndereco(endereco){
    const comando =
    `insert into TB_ENDERECO(DS_CEP, DS_BAIRRO, DS_CIDADE, DS_ESTADO, NM_RUA, NR_ENDERECO, DS_COMPLEMENTO)
                            values(?, ?, ?, ?, ?, ?, ?)`

    const [resposta] = await con.query (comando, [endereco.cep, endereco.bairro, endereco.cidade, endereco.estado, endereco.rua, endereco.numero, endereco.complemento]);
    endereco.id = resposta.insertId;
    return endereco;
}

export async function listarDados(id){
    const comando=
    `select ID_USUARIO        id,
            NM_USUARIO        nome,
            DS_EMAIL        email,
            DS_CPF            cpf,
            DS_CEP            cep,
            DS_NASCIMENTO    nascimento
    from TB_USUARIO
    where ID_USUARIO = ?`
    const [linhas] =await con.query(comando, [id]);
    return linhas[0];
}

export async function listarENDERECO(){
    const comando=
    `SELECT     ID_ENDERECO			ID,
                NM_RUA				RUA,
                DS_CEP				CEP,
                DS_CIDADE			CIDADE,
                DS_ESTADO			ESTADO,
                DS_BAIRRO			BAIRRO,
                NR_ENDERECO			NUMERO,
                DS_COMPLEMENTO		COMPLEMENTO
    FROM TB_ENDERECO`
    const [linhas] =await con.query(comando);
    return linhas;
}


export async function deletarEndereco(id){
    const comando =
   ` DELETE FROM TB_ENDERECO
    WHERE	ID_ENDERECO = ?`;

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;


}


export async function alterarEndereco(id, endereco){
    const comando =
    `UPDATE TB_ENDERECO
         SET    DS_CEP				= ?,
                DS_BAIRRO			= ?,
                DS_CIDADE			= ?,
                DS_ESTADO			= ?,
                NM_RUA				= ?,
                NR_ENDERECO			= ?,
                DS_COMPLEMENTO		= ?
            where ID_ENDERECO  = ? `

    const [resposta] = await con.query(comando, [endereco.cep, endereco.bairro, endereco.cidade, endereco.estado, endereco.rua, endereco.numero, endereco.complemento, id]);
    return resposta.affectedRows;

}