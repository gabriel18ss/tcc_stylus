import './index.scss';
import axios from 'axios';
import Barra from '../../componentes/barra'

import { useNavigate } from 'react-router-dom';
import { login } from '../../api/adminapi';
import './index.scss';

import LoadingBar  from 'react-top-loading-bar'
import { useState, useRef } from 'react';



export default function Index(){ 

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro]  = useState('');
   
    

    const navigate = useNavigate();
    const ref =useRef();


async function entrarClick() {
    ref.current.continuousStart();

    try{
    const r = await axios.post('http://localhost:5000/admin/login', { 
        email: email,
        senha: senha
    });
            setTimeout(() => {
                navigate('/cadastrar');
            }, 3000);

    } catch (err) {
            ref.current.complete();
            if(err.response.status === 401)
            setErro(err.response.data.erro);
    }
  }


       return(
        <section className='page-login'>
             <LoadingBar color='#f11946' ref={ref} />
            <Barra/>
            <div className='faixa-l'>
                <div className='fundo'>
                    <h1 className='titulo-adm'>administrador</h1>
            </div>
                <div className='log'>
                    <h1 className='titulo-adm2'>login</h1>
                    <input type='text' placeholder='Informe seu e-mail' value={email} onChange={e => setEmail(e.target.value)} className='input2'/>
                
                    <input type='password' placeholder='Informe a sua senha' value={senha} onChange={e => setSenha(e.target.value)} className='input2'></input>

                    <button onClick={entrarClick}  className='botao-adm'>ENTRAR</button>
                    {erro}
                </div>
            </div>
        </section>
    )
}

    
    
