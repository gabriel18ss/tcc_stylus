import './index.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Barra from '../../componentes/barra';


export default function TelaFinalizacao(){

    const navigate = useNavigate();

    async function clickIrHome(){
        try{
            setTimeout(() => {
                navigate('/')
             }, 300);
        } catch (err){
            toast.error(err.message);
        }
    }

    async function clickIrPedidosUser(){
        try{
            setTimeout(() => {
                navigate('/usuario/pedidos')
             }, 300);
        } catch (err){
            toast.error(err.message);
        }
    }

    return(
        <section>
            <Barra/>
            <div className='container-fin'>
            <div container-ti>
              <h1 className='titulo-f'>.</h1>
              <img className='img-finalizacao' src='/images/tarefa-concluida.png'></img>
            </div>
              
              <h1 className='text-f'>Seu pedido foi finalizado com sucesso</h1>
            </div>

            <div className='bot-finaliazação'>
                <button className='bo' onClick={clickIrHome}>inicio</button>
                <button className='bo' onClick={clickIrPedidosUser}>Acompanhar</button>
            </div>
        </section>
    )
}