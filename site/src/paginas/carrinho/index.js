import './index.scss';
import BARRA from '../../componentes/barra';
import MENU from '../../componentes/menu-2';
import CarrinhoItem from '../../componentes/carrinhoItem';

import { useState, useEffect} from 'react';
import storage from 'local-storage';
import { buscarPorId } from '../../api/produtoApi';


export default function Carrinho(){

    const [itens, setItens] = useState([]);

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
            console.log(temp);
            setItens(temp);
        }

        console.log(itens);
    }

        useEffect(() => {
            carregarCarrinho();
        }, [])

    return(
        <section className='pagina'>
            <div><BARRA/></div>
          
            
            <main className='main-1'>
                <div className='menu'><MENU/></div>
                    <div className='itens'>
                       {itens.map(item =>
                            <CarrinhoItem/>
                        )}
                    </div>
            
                
            </main>
            
        </section>
    )
}