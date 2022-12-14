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

export async function listarEndereco(idUsuario) {
    const comando = `
    select ID_USUARIO_ENDERECO			ID,
        NM_RUA					RUA,
        DS_CEP					CEP,
        DS_CIDADE			 CIDADE,
        DS_ESTADO			 ESTADO,
        DS_BAIRRO			 BAIRRO,
        NR_ENDERECO			 NUMERO,
        DS_COMPLEMENTO 		COMPLEMENTO
    from TB_USUARIO_ENDERECO
    where ID_USUARIO = ?;
    `

    const [registros] = await con.query(comando, [idUsuario]);
    return registros;
}



export async function cadastrarEndereco(idUsuario, endereco) {
    const comando = `
    insert into TB_USUARIO_ENDERECO (ID_USUARIO, NM_RUA, DS_CEP, DS_CIDADE, DS_ESTADO, DS_BAIRRO, NR_ENDERECO, DS_COMPLEMENTO)
                                values (?, ?,?, ?, ?, ?, ?, ?);
    `

    const [info] = await con.query(comando, [idUsuario, endereco.rua, endereco.cep, endereco.cidade, endereco.estado, endereco.bairro,  endereco.numero, endereco.complemento]);
    return info.insertId;
}








export async function listarDados(idUsuario){
    const comando=
    `select ID_USUARIO        ID,
            NM_USUARIO        NOME,
            DS_EMAIL           EMAIL,
            DS_CPF            CPF,
            DS_CEP            CEP,
            DS_NASCIMENTO    NASCIMENTO
    from TB_USUARIO
    where ID_USUARIO = ?`
    const [linhas] =await con.query(comando, [idUsuario]);
    return linhas[0];
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