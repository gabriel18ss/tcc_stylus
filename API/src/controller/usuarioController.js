import {LoginU, cadastrarUsuario, cadastrarEndereco, listarDados, listarENDERECO} from '../repository/usuarioRepository.js'

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

export default server;