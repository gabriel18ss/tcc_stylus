import './index.scss';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { listaDados } from '../../api/usuarioApi';

import storage from 'local-storage';

export default function Barra(props){

    const navigate = useNavigate();


    const [dados, setDados] = useState({nome:[], email:[], cpf:[], endereco:[], cep:[]});

    async function carregarTodosDados(){
        const id = storage('cliente-logado').ID;
        const r = await listaDados(id);
        setDados(r)
    }

    useEffect(() => {
        carregarTodosDados();
    }, [])
    
    async function logoClick(){
        try{
            setTimeout(() => {
                navigate('/')
             }, 500);
        } catch (err){
            toast.error(err.message);
        }
    }

    async function carrinhoClick(){
        try{
            setTimeout(() => {
                navigate('/usuario/carrinho')
             }, );
        } catch (err){
            toast.error(err.message);
        }
    }


    async function usuarioPng(){
        try{
            setTimeout(() => {
                navigate('/usuario/login')
             }, 3000);
        } catch (err){
            toast.error(err.message);
        }
    }
    return(
        <section className='comp-barra'>
            <div>

                <div>
                    <img className='logo' src="/images/logo.jpeg" alt="" onClick={logoClick}/>
                </div>
                     
            </div>

                <div className='search-box'>
        
                  <input type='text' className='search-txt' placeholder='Pesquisar...'/>

                  <a className='search-bnt' href="#">
                  <img className='lupa' src="/images/pesquisarAzul.png" alt="" />
                  </a>
                
                </div>
                <div>
                    <img onClick={carrinhoClick} className='sacola' src="/images/sacolabranca.png" alt='sacola'/>
                   
                </div>
                
                <div className='caixa-3'>
                <img onClick={usuarioPng} className='user' src="/images/user-branco.png" alt='usuario'/>
                <div className='nome-user'>{dados.NOME ? dados.NOME.substr(0,8) : " "}</div>
                </div>
        
        </section>
    )
}