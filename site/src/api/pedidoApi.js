import axios  from "axios";
import { API_URL } from "./config";
const api = axios.create({
    baseURL: API_URL
})

export async function salvarNovoPedido(idUsuario, novoPedido) {
    const resposta = await api.post('/pedido/' + idUsuario, novoPedido)
    return resposta.data;
}



export async function enviarImagem(id, imagem){

    const formData = new FormData();
    formData.append('capa', imagem);
    

    const resposta = await api.put(`/${id}/capa`, formData,{
        headers: {
            "Content-type": "multipart/form-data" 
        },
    });

    return resposta.status;
}

export async function listarTenis(){
    const resposta = await api.get ('/tenis');
    return resposta.data;
}


export async function buscarPorNome(NOME){
    const resposta = await api.get (`/tenis/busca?NOME=${NOME}`);
    return resposta.data;
}


export async function deletarProduto(id) {
    const resposta = await api.delete (`/tenis/${id}`);
    return resposta.status;
}


export async function buscarPorId(ID){
    const resposta = await api.get(`/tenis/${ID}`);
    return resposta.data;
}

export async function alterarTenis(id, marca, genero, nome, quantidade, valor, lancamento, tamanho) {
    const resposta = await api.put ('/tenis/' + id, {
        marca:marca,
        genero:genero,
        nome:nome,
        quantidade: quantidade,
        valor: valor,
        lancamento:lancamento,
        tamanho:tamanho,

    })

}


export function buscarImagem(imagem) {
    return `${api.getUri()}/${imagem}`
}


export async function buscarPedidoId(ID){
    const resposta = await api.get(`/consultar/pedido/${ID}`);
    return resposta.data;
}


export async function alterarPedido(status, id) {
    const resposta = await api.put ('/status', {
        status:status,
        id:id
        

    })
    return resposta.data;
}





export async function  listarPedidosUsuario(idUsuario) {
    const r = await api.get('/usuario/' + idUsuario + '/pedidos');
    return r.data;
}


export async function filtrarStatus(situação){
    const r = await api.get(`verificar/status?situação=${situação}`);
    return r.data;
    
}





