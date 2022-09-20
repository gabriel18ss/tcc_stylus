import { con } from'./connection.js'



export async function login(email, senha){
    const comando=
    `select ID_FUNCIONARIO		id,
            ds_email		  email
       from TB_FUNCIONARIO
       where DS_EMAIL		= ?
         and DS_SENHA		= ? `

    const [linhas] = await con.query(comando, [email,senha]);
    return linhas[0]
}