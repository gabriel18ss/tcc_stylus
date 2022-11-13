import './index.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useNavigate} from 'react-router-dom';

import { cadastrarUsuario } from '../../api/usuarioApi.js';

import { useState } from 'react';
import Barra from '../../componentes/barra';

export default function CadastrarUsuario (){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [nascimento, setNascimento] = useState('');


    const navigate = useNavigate();
    async function voltarClick(){
        try{
            setTimeout(() => {
                navigate('/usurio/login')
             }, 3000);
        }catch(err){
            toast.error(err.message);
        }
    }
 


    async function salvarClick(){
        try{
            const r = await cadastrarUsuario(nome, email, senha, cpf, cep, nascimento);
            toast.dark('Usuario Cadastrado 🥳 ');
            
        }
        
        catch (err){
            toast.error(err.message);
        }

        setTimeout(() => {
           navigate('/usuario/login')
        }, 3000);
        

    }

    return(
        <section>
            <Barra/>
            <main className="pagina-cadastro">
              
                <div>
                    <img className="imagem-1" src="/images/caixas walpaper.jpg" alt="imagem de fundo" />
                </div>

                <div className='pagina-principal'>
                 
                    <h1 className="titulo-login">Criar uma conta</h1>
                   
                    <div className='inputs-cd'>
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
            </section>
    )
}