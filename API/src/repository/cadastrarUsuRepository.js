
import {con} from './connection.js';


export async function cadastrarUsuario(usu){
    const comando =
    `
    INSERT INTO TB_USUARIO (NM_USUARIO, DS_EMAIL, DS_SENHA, NR_CPF, NR_CEP, DT_NASCIMENTO)
    VALUES(?, ? ,? , ? ,? ,?)`

    const [resposta] = await con.query(comando,
        [ usu.nome, usu.email, usu.senha, usu.cpf, usu.cep, usu.nascimento]);
    usu.id = resposta.insertId;
    return usu;
}