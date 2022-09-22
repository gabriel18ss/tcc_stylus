import {cadastrarTenis} from '../repository/cadastrarRepository.js'
import { Router } from 'express'

const server = Router();

server.post('/cadastrar', async (req, resp) => {
    try {
        const novoTenis = req.body;

        const tenisInserido = await cadastrarTenis(novoTenis);
        
        resp.send(tenisInserido)
    } 
    catch (err) {
        resp.send(400).send({
            erro:err.message
        })
    }
})

export default server;