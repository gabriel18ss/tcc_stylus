import {cadastrarTenis} from '../repository/cadastrarRepository.js'
import { Router } from 'express'

const server = Router();

server.post('/cadastrar', async (req, resp) => {
    try {
        const tenisParaInserir = req.body;

        const tenis = await cadastrarTenis(tenisParaInserir);
        resp.send(tenis);
    } 
    catch (err) {
        resp.send(400).send({
            erro:err.message
        })
    }
})

export default server;