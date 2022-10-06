import './index.scss';
import axios from 'axios';
import Barra from '../../componentes/barra'

import { useNavigate } from 'react-router-dom';
import { login } from '../../api/adminapi';
import './index.scss';
import storage from 'local-storage'

import LoadingBar  from 'react-top-loading-bar'
import { useState, useRef, useEffect } from 'react';



export default function Index(){ 

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro]  = useState('');
    const [carregando, setCarregando] = useState (false);
    

    const navigate = useNavigate();
    const ref =useRef();


    async function entrarClick(){
        ref.current.continuousStart();
        setCarregando(true);
   
    try{
        const r = await login(email, senha)
        console.log(r)
        storage('usuario-logado', r);
        
        setTimeout(() => {
            navigate('/adm/cadastrar');
        }, 3000)

    }

    catch(err) {
        ref.current.complete();
        setCarregando(false);
        if (err.response.status === 401){
            setErro(err.response.data.erro)
        }
    }
}

useEffect(()=> {
    if  (storage ('usuario-logado')){
        navigate('/adm/login');
    }
  }, [])




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
                    <img className='balao' src="/images/balao.png" alt='' />
                    <input type='text' placeholder='Informe seu e-mail' value={email} onChange={e => setEmail(e.target.value)} className='input2'/>
                
                    <input type='password' placeholder='Informe a sua senha' value={senha} onChange={e => setSenha(e.target.value)} className='input2'></input>

                    <button onClick={entrarClick}  className='botao-adm'>ENTRAR</button>
                    {erro}
                </div>
            </div>
        </section>
    )
}

    
    
