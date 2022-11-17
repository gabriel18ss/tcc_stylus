import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {  toast } from 'react-toastify';
import { listaDados } from '../../api/usuarioApi';
import {  useState } from 'react';


import storage from 'local-storage'

export default function Menu2 (props) {

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

    async function IrParaCompras(){
        {
            try{
                setTimeout(() => {
                    navigate('/usuario/pedidos')
                 }, );
            } catch (err){
                toast.error(err.message);
            }
        }
    }


    async function IrParaCarrinho(){
        {
            try{
                setTimeout(() => {
                    navigate('/usuario/carrinho')
                 }, );
            } catch (err){
                toast.error(err.message);
            }
        }
    }


    async function IrParaDados(){
        {
            try{
                setTimeout(() => {
                    navigate('/usuario/dados')
                 }, );
            } catch (err){
                toast.error(err.message);
            }
        }
    }


    useEffect(() => {
        if (!storage('cliente-logado')){
            navigate('/usuario/login');
        }
      }, [])

 
        function sairUserClick(){
        storage.remove('cliente-logado');
        navigate('/usuario/login');
    }
    return(
        <div className='menu-1'>
            <h1 className='h1-bemvindo'>BEM-VINDO</h1>
            <h1 className='h1-nome'>{dados.NOME}</h1>

            <h2 className='h2-menu' onClick={IrParaDados}>Seus dados</h2>

            <h2 className='h2-menu' onClick={IrParaCompras}>Compras</h2>

            <h2 className='h2-menu' onClick={IrParaCarrinho}>Carrinho</h2>

            <h2 className='h2-menu'>Meus endereços</h2>

            <h2 className='h2-menu' onClick={sairUserClick}>Sair da conta</h2>
        </div>

    )
}