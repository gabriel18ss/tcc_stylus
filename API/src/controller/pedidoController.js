import {alterarPedido, inserirPagamento, inserirPedido, inserirPedidoItem, listarPedido} from '../repository/pedidoRepository.js'
import randomString from 'randomstring';

import {Router} from "express";
import { criarNovoPedido } from '../service/novoProdutoService.js';
import { buscarPorId } from '../repository/cadastrarRepository.js';
const server = Router();

server.post('/pedido/:idUsuario/', async (req, resp) => {
    try {
        const { idUsuario } = req.params;
        const info = req.body;

       const novoPedido = criarNovoPedido(idUsuario, info);

       const idPedidoCriado = await inserirPedido(novoPedido);
       const idPagamento = await inserirPagamento(idPedidoCriado, info.cartao)
       
       for(let item of info.produtos){
            const prod = await buscarPorId(item.ID);
            const idPedidoItemCriado = await inserirPedidoItem(idPedidoCriado, prod.ID, item.qtd, prod.valor)
       }

       resp.status(204).send();
    }
    catch (err) {
        console.log(err);
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.get('/consultar/pedido',async (req,resp)=>{
    try {
        const resposta = await listarPedido();
        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.put('/pedido/:id', async (req, resp) => {
    try{
        const id  = req.params.id;
        const pedido = req.body;

        const resposta = await alterarPedido(id, pedido);
        if (resposta != 1)
            throw new Error ('Pedido não foi alterado');
        else
            resp.status(204).send();

    } catch(err) {
        resp.status(400).send({
            erro: err.messsage
        })
    }
})



export default server;