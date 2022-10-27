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
            setItens(temp);
        }

    }

    function calcularTotal(){
        let total = 0;
        for(let item of itens){
            total = total + item.qtd * item.tenis.info.valor;
        }
        return total;
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
            <div>Total: R$ {calcularTotal()}</div>
             

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
                    itens
                    <hr className='linha-01'/>
        
                        <div className='pedidos-usuario'>
                            <div className=''>
                                <h1>  {item.tenis.info.NOME }</h1>
                                <h1>{item.tenis.info.GENERO }</h1>
                            </div>
                            <div>
                                <h1>{item.tenis.info.valor}</h1>
                                <h1>{item.qtd }</h1>
                            </div>
                        </div>
               </div>
                )}
                
              
        </section>
    )
}
