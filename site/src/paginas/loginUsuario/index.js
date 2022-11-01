import './index.scss';
import axios from 'axios'

import { useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,  toast } from 'react-toastify';

import { LoginU } from '../../api/usuarioApi';
import LoadingBar  from 'react-top-loading-bar'
import storage from 'local-storage' 

import Barra from '../../componentes/barra'

export default function Index(){
    
    const [email, setEmail] =useState('');
    const [senha, setSenha] =useState('');
    const [erro, setErro] =useState('');

    const navigate = useNavigate();
    const ref = useRef();  


    async function clickCadastrar(){
        try{
            setTimeout(() => {
                navigate('/usuario/cadastrar')
             }, 3000);
        } catch (err){
            toast.error(err.message);
        }
    }

    async function entrarClick () {
        try {
            const r = await LoginU(email, senha);
            storage('cliente-logado', r);
            toast.dark('Usuário logado', { autoClose: 400, hideProgressBar: true });

            setTimeout(() => {
                navigate('/');
            }, 1500);
            
        }
        catch (err) {
            toast.error(err.response.data.erro);
        }
    }    

    return(
        <section>
            <LoadingBar color='#f11946' ref={ref} />    
            <div>
                <Barra/>
            </div>
            <div>
                <img className="imagem" src="/images/tenisLog.png" alt="" />
                
                <div className='login'>
                    
                    <h1 className='titulo-lg-user'>Iniciar Sessão</h1>

                    <div className='dig'>
                    <input type='text' placeholder='E-Mail:' className='e-mail' value={email} onChange ={e => setEmail(e.target.value)} />
                    
                    <input type='password' placeholder='Senha:' className='e-mail' value={senha} onChange ={e => setSenha(e.target.value)}/>
                    
                    
                    </div>

                    <button className="button" onClick={entrarClick} >ENTRAR</button>

                    <h1 className="reg">não esta Cadastrado ?</h1>
                    <h1 className="junt" onClick={clickCadastrar}>Cadastre-se</h1>

                    <div>
                       
                    </div>                   
                    
                </div>
            </div>
        </section>

    )
}