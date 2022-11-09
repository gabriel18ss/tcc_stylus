import axios  from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})




export async function cadastrarUsuario(nome, email, senha, cpf, cep, nascimento) {
    const resposta = await api.post ('/cadastrar/usuario', {
        nome:nome,
        email:email,
        senha:senha,
        cpf:cpf,
        cep:cep,
        nascimento:nascimento,

    })
    return resposta.data;
}


export async function LoginU (email, senha){
    const r = await api.post('/usuario/login', {
            email: email,
            senha: senha
         });
         return r.data;
}


export async function cadastrarEnd(idUsuario,rua, cep, cidade, estado, bairro,  numero, complemento) {
    const r = await api.post('/usuario/' + idUsuario + '/endereco', { rua, cep, cidade, estado, bairro, numero, complemento });
    return r.data;
}



export async function listaEndereco(idUsuario) {
    const r = await api.get('/usuario/' + idUsuario + '/endereco');
    return r.data;
}

export async function listaDados(idUsuario) {
    const r = await api.get('/usuario/' + idUsuario + '/dados');
    return r.data;
}

export async function deletarEndereco(id) {
    const resposta = await api.delete (`/endereco/${id}`);
    return resposta.status;
}


export async function alterarEndereco(id, cep, bairro, cidade, estado, rua, numero, complemento) {
    const resposta = await api.put (`/endereco/${id}`, {
        cep:cep,
        bairro:bairro,
        cidade:cidade,
        estado:estado,
        rua:rua,
        numero:numero,
        complemento:complemento

    })
    return resposta.data;
}