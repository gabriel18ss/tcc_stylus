import './index.scss';
import Barra from '../../componentes/barra'; 

import { useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,  toast } from 'react-toastify';
import LoadingBar  from 'react-top-loading-bar'
import { listaEndereco } from '../../api/usuarioApi';
import CardEndereco from '../../componentes/cadastrarEnd';
import storage, { set } from 'local-storage'
import { buscarPorId } from '../../api/produtoApi';

export default function TelaPagamento(){
    const [itens, setItens] = useState([]);
    const [endereco, setEndereco] = useState([]);

    const navigate = useNavigate();
    const ref = useRef();  

    

    async function carregarEnderecos(){
        const id = storage('cliente-logado').ID;
        const r = await listaEndereco(id);
        setEndereco(r)
    }


    async function clickNewEnd(){
        try{
            setTimeout(() => {
                navigate('/usuario/cadastrar/endereco')
             }, 3000);
        } catch (err){
            toast.error(err.message);
        }
    }


    async function carregarItens() {
        let carrinho = storage('carrinho');
        if (carrinho) {

            let temp = [];  

            for (let tenis of carrinho) {
               let p = await buscarPorId(tenis.ID);

               temp.push({
                    tenis: p,
                    qtd: tenis.qtd
               })
            }
            console.log(temp);
        }

    }


    useEffect(()=> {
        carregarEnderecos();
        carregarItens();
      
    })

    return(
        <section className='page-pagamento'>
              <LoadingBar color='#f11946' ref={ref} />   
            <Barra/>
            <h1 className='titulo-pag'>pagamento</h1>

              <div className='display-pagamento'>
                  <div className='end'>
                  {endereco.map(item =>
                       <CardEndereco item={item}/>
                    )}
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

             
                {itens.map(item =>
                <div className='informacoes-pedidos'>
                        <h1 className='titulo'>SEUS PEDIDOS</h1>
        
                        <div className='ppsd'>
                            <h1 >Produto</h1>
                            <h1 className='pr'></h1>
                        </div>
        
                        <div className='pedidos-usuario'>
                            <h1>  {item.NOME}</h1>
                            <h1></h1>
                            <h1></h1>
                        </div>
               </div>
                )}
                
              
        </section>
    )
}
