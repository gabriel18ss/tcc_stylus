import axios  from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function listarTenisNike(){
    const resposta = await api.get ('/consultar/nike');
    return resposta.data;
}

export async function listarTenisAdidas(){
    const resposta = await api.get ('/consultar/adidas');
    return resposta.data;
}

export async function listarTenisPuma(){
    const resposta = await api.get ('/consultar/puma');
    return resposta.data;
}


export async function listarTenisJordan(){
    const resposta = await api.get ('/consultar/jordan');
    return resposta.data;
}
