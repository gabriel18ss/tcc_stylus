import { LoginUsu } from '../repository/usuarioRepository.js'

import { Router } from "express";
const server = Router();


server.post('/usuario/login', async(req, resp) =>{
    try {
        const { email , senha } = req.body;
        const res  = await login( email,senha );

        if(!res){
            throw new Error('Credenciais inválidas')
        }
        resp.send(res)

    } catch (err){
        resp.status(400).send({
            erro: 'ocorreu um erro'
        });
    }
})


export default server;