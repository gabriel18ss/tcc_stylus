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


