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