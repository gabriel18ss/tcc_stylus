import {cadastrarTenis, alterarImagem} from '../repository/cadastrarRepository.js'

import multer from 'multer'
import { Router } from 'express'

const server = Router();
const upload = multer({ dest: 'storage/capaTenis'});


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

server.put('/cadastrar/:id/capa', upload.single('capa'), async (req, resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem, id);
        resp.status(204).send();
        if (resposta != 1)
            throw new Error('A imagem não foi salva.');
    } 
    catch (err) {
        resp.send(400).send({
            erro:err.message
        })
    }
})

export default server;