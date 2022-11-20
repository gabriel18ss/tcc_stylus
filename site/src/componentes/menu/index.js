import './index.scss';
import storage from 'local-storage'

import { useNavigate} from 'react-router-dom';
import { useEffect} from 'react';
import {  toast } from 'react-toastify';

export default function Menu(props){

    useEffect(() => {
        if (!storage('usuario-logado')){
            navigate('/adm/login');
        }
      }, [])


    const navigate = useNavigate();
 
        function sairClick(){
        storage.remove('usuario-logado');
        navigate('/adm/login');
    }

    async function IrCadProduto(){
        try{
            setTimeout(() => {
                navigate('/adm/cadastrar')
             }, 300);
        } catch (err){
            toast.error(err.message);
        }
    }

    async function IrParaPedidos(){
        try{
            setTimeout(() => {
                navigate('/adm/pedidos')
             }, 300);
        } catch (err){
            toast.error(err.message);
        }
    }

    async function IrParaHome(){
        try{
            setTimeout(() => {
                navigate('/')
             }, 300);
        } catch (err){
            toast.error(err.message);
        }
    }


    async function IrParaListaProdutos(){
        try{
            setTimeout(() => {
                navigate('/listar/produtos')
             }, 300);
        } catch (err){
            toast.error(err.message);
        }
    }

    async function IrParaPedidosAprovados(){
        try{
            setTimeout(() => {
                navigate('/adm/pedidos/aprovados')
             }, 300);
        } catch (err){
            toast.error(err.message);
        }
    }
    
    return(
        <div className='faixa-2'>

        <div className='inf'>
           <h1 onClick={IrParaPedidos}>Pedidos</h1>

           <h1 onClick={IrParaPedidosAprovados}>Aprovados</h1>

           <h1 onClick={IrCadProduto}>Cadastrar</h1>

           <h1 onClick={IrParaListaProdutos}>Produtos</h1>

           <h1 onClick={IrParaHome}>inicio</h1>

           <h1 onClick={sairClick} >Sair</h1>

       </div>

   </div>
    )
}