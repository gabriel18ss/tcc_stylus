import {cadastrarTenis, alterarImagem, listarTenis, buscarPorId, buscarPorNome, deletarProduto, alterarProduto } from '../repository/cadastrarRepository.js'

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



server.put('/:id/capa', upload.single('capa'), async (req, resp) => {
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




server.get('/tenis',async (req,resp)=>{
    try {
        const resposta = await listarTenis();
        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.get('/tenis/busca',async (req,resp)=>{
    try {
        const {NOME} = req.query;

        const resposta = await buscarPorNome(NOME);

        if (!resposta)
            throw new Error ('Produto não foi encontrado')
            
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})




server.get('/tenis/:id',async (req,resp)=>{
    try {
        const {id} = req.params;

        const resposta = await buscarPorId(Number(id));

        if (!resposta)
            throw new Error ('Produto não foi encontrado')

        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.delete('/tenis/:id', async (req, resp) => {
    try{
        const { id } = req.params;

        const resposta = await deletarProduto(id);
        if (resposta != 1)
            throw new Error ('produto não pode ser removida');
        else
            resp.status (204).send();

    } catch(err) {
        resp.status(400).send({
            erro: err.messsage
        })
    }
})



server.put('/tenis/:id', async (req, resp) => {
    try{
        const { id } = req.params;
        const tenis = req.body;

        const resposta = await alterarProduto(id, tenis);
        if (resposta != 1)
            throw new Error ('produto não pode ser alterado');
        else
            resp.status (204).send();

    } catch(err) {
        resp.status(400).send({
            erro: err.messsage
        })
    }
})





export default server;