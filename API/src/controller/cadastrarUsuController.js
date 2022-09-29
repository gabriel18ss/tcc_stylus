
import {cadastrarUsuario} from '../repository/cadastrarUsuRepository.js'

import { Router} from 'express'
const server = Router();

server.post('/cadastrar', async (req, resp) => {

        try{
            const cadastrarU = req.body;

            const cad = await cadastrarUsuario(cadastrarU);

            resp.send(cad);

        } catch (err){
            resp.send(400).send({
                erro: err.message
            })

        }
})

export default server;