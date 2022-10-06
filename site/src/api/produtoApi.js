import axios  from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarTenis(marca, genero, nome, quantidade, valor, lancamento, tamanho) {
    const resposta = await api.post ('/cadastrar', {
        marca:marca,
        genero:genero,
        nome:nome,
        quantidade: quantidade,
        valor: valor,
        lancamento:lancamento,
        tamanho:tamanho,

    })
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


export async function buscarPorId(id){
    const resposta = await api.get(`/tenis/${id}`);
    return resposta.data;
}

