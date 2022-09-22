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
        tamanho:tamanho
    })
    return resposta.data;
}