import { con } from './connection.js'

export async function LoginUsu (email, senha) {
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