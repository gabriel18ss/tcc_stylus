import './index.scss';
import BARRA from '../../componentes/barra';
import MENU from '../../componentes/menu-2';
import CarrinhoItem from '../../componentes/carrinhoItem';

import { useState, useEffect} from 'react';
import storage from 'local-storage';
import { buscarPorId } from '../../api/produtoApi';

import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';


export default function Carrinho(){

    const [itens, setItens] = useState([]);


        function qtdItens(){
           return itens.length;
        }



        function calcularValorTotal(){
            let total = 0;
            for (let item of itens){
                total = total + item.tenis.info.valor * item.qtd
            }
            return total;
        }



        function removerItem(ID) {
            let carrinho = storage('carrinho'); 
            carrinho = carrinho.filter(item => item.ID != ID)

            storage('carrinho', carrinho);
            carregarCarrinho(); 
        }

    async function carregarCarrinho() {
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

        useEffect(() => {
            carregarCarrinho();
        }, [])

        
    const navigate = useNavigate();
    
    async function IrParaPagamento(){
        try{
            setTimeout(() => {
                navigate('/usuario/pagamento')
             }, 300);
        } catch (err){
            toast.error(err.message);
        }
    }

    return(
        <section className='pagina'>
            <div><BARRA/></div>
          
            
            <main className='main-1'>
                <div className='menu'><MENU/></div>
                    <div className='itens'>
                       {itens.map(item =>
                            <CarrinhoItem item={item} removerItem={removerItem} carregarCarrinho={carregarCarrinho}/>
                        )}
                    </div>

                    <div className='resumo'>
                        <h2>total</h2>
                        <h5>({qtdItens()} produtos )</h5>
                        <p> R$ {calcularValorTotal()}</p>

                        <button className='botao-carrinho' onClick={IrParaPagamento}>Finalizar</button>
                      
                    </div>
            
                
            </main>
            
        </section>
    )
}