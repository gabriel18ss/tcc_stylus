import './index.scss';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';

export default function Menu2 (props) {

    const navigate = useNavigate();

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
    
    return(
        <div className='menu-1'>
            <h1 className='h1-bemvindo'>BEM-VINDO</h1>
            <h1 className='h1-nome'>MARCIO</h1>

            <h2 className='h2-menu' onClick={IrParaDados}>Seus dados</h2>

            <h2 className='h2-menu' onClick={IrParaCompras}>Compras</h2>

            <h2 className='h2-menu' onClick={IrParaCarrinho}>Carrinho</h2>

            <h2 className='h2-menu'>Meus endereços</h2>

            <h2 className='h2-menu'>Início</h2>
        </div>

    )
}