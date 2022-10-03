import './index.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { cadastrarUsuario } from '../../api/usuarioApi.js';

import { useState } from 'react';

export default function CadastrarUsuario (){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [nascimento, setNascimento] = useState('');


    async function salvarClick(){
        try{
            const r = await cadastrarUsuario(nome, email, senha, cpf, cep, nascimento);
            toast.dark('Usuario Cadastrado 🥳 ');
            
        }catch (err){
            toast.error(err.message);
        }

    }

    return(
      
            <main className="pagina-cadastro">
           
                <div>
                    <img className="imagem-1" src="/images/tes.png" alt="imagem de fundo" />
                </div>

                <div className='pagina-principal'>

                   <b className="voltar">voltar</b>
                 
                    <h1 className="titulo-1">Criar uma conta</h1>
                   
                    <div className='inputs'>
                    <input className="input-1" type='text' placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} />
                    <input className="input-1" type='text' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}/>
                    <input className="input-1" type='password' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)}/>
                    <input className="input-1" type='text' placeholder='CPF' value={cpf} onChange={e => setCpf(e.target.value)}/>
                    <input className="input-1" type='text' placeholder='CEP' value={cep} onChange={e => setCep(e.target.value)}/>
                    <input className="input-1" type='date' placeholder='Data de nascimento' value={nascimento} onChange={e => setNascimento(e.target.value)} />
                    </div>

                   
                    <button onClick={salvarClick} className="button-cad">Cadastrar</button>

                    <hr className='linha'/>

                </div>
        
            </main>
    
    )
}