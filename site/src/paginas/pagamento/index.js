import './index.scss';
import Barra from '../../componentes/barra'; 

import { useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,  toast } from 'react-toastify';
import LoadingBar  from 'react-top-loading-bar'

export default function TelaPagamento(){

    const navigate = useNavigate();
    const ref = useRef();  


    async function clickNewEnd(){
        try{
            setTimeout(() => {
                navigate('/usuario/cadastrar/endereco')
             }, 3000);
        } catch (err){
            toast.error(err.message);
        }
    }
    return(
        <section className='page-pagamento'>
              <LoadingBar color='#f11946' ref={ref} />   
            <Barra/>
            <h1 className='titulo-pag'>pagamento</h1>

              <div className='display-pagamento'>
                    <div className='info-end'>
                        <h3>Endereços</h3>
                    </div>

                    <div className='info-cartão'>
                        numero do cartão<input className='input-pag'></input>
                        validade<input className='input-pag'></input>
                        codigo de segurança<input className='input-pag'></input>
                        nome do cartão<input className='input-pag'></input>
                    </div>

                    <div className='info-pedido'>
                        <h3>Pedido</h3>

                        <h3>Valor Total</h3>

                        <h3>Forma de pagamento</h3>


                    </div>
              </div>

              <div className='botoens'>
                <button className='botao-pag'>Continuar</button>
                <button onClick={clickNewEnd} className='botao-pag-end'>Novo Endereço</button>
              </div>
        </section>
    )
}
