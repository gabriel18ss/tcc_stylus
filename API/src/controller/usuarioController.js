import {LoginU, cadastrarUsuario, cadastrarEndereco, listarDados, listarEndereco, deletarEndereco, alterarEndereco} from '../repository/usuarioRepository.js'

import {Router} from "express";
import { listarPedidosUsuario } from '../repository/pedidoRepository.js';

const server = Router();


server.post('/cadastrar/usuario', async (req, resp) => {
    try {
        const novoUsuario = req.body;

        const usuarioInserido = await cadastrarUsuario(novoUsuario);
        
        resp.send(usuarioInserido)
    } 
    catch (err) {
        resp.send(400).send({
            erro:err.message
        })
    }
})

server.post('/usuario/login', async(req, resp) =>{
    try {
        const { email , senha } = req.body;
        const res  = await LoginU( email,senha );

        if(!res){
            throw new Error('Credenciais inválidas')
        }
        resp.send(res)

    } catch (err){
        resp.status(401).send({
            erro: err.message
        });
    }
})



server.get('/usuario/:id/endereco', async (req, resp) => {
    try {
        const id = req.params.id;
        
        const r = await listarEndereco(id);
        
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.post('/usuario/:id/endereco', async (req, resp) => {
    try {
        const id = req.params.id;
        const endereco = req.body;

        const r = await cadastrarEndereco(id, endereco);
        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})




server.get('/usuario/:id/dados',async (req,resp)=>{
    try {
        const {id} = req.params;

        const resposta = await listarDados(id);
       
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})



server.delete('/endereco/:id', async (req, resp) => {
    try{
        const { id } = req.params;

        const resposta = await deletarEndereco(id);
        if (resposta != 1)
            throw new Error ('Endereço não pode ser removida');
        else
            resp.status (204).send();

    } catch(err) {
        resp.status(400).send({
            erro: err.messsage
        })
    }
})


server.put('/endereco/:id', async (req, resp) => {
    try{
        const { id } = req.params;
        const endereco = req.body;

        const resposta = await alterarEndereco(id, endereco);
        if (resposta != 1)
            throw new Error ('Endereço não pode ser alterado');
        else
            resp.status (204).send();

    } catch(err) {
        resp.status(400).send({
            erro: err.messsage
        })
    }
})

server.get('/usuario/:id/pedidos', async (req, resp) => {
    try {
        const {id} = req.params;
        
        const r = await listarPedidosUsuario(id);
        
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})





export default server;