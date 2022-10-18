import {LoginU, cadastrarUsuario, cadastrarEndereco, listarDados, listarENDERECO, deletarEndereco, alterarEndereco} from '../repository/usuarioRepository.js'

import {Router} from "express";
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



server.post('/cadastrar/endereco', async(req, resp) =>{
    try {
        const novoEndereco = req.body;

        const enderecoCadastrado = await cadastrarEndereco(novoEndereco);

        resp.send(enderecoCadastrado)

    } catch (err){
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.get('/dados/:id',async (req,resp)=>{
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

server.get('/endereco',async (req,resp)=>{
    try {
        const resposta = await listarENDERECO();
        resp.send(resposta)
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





export default server;