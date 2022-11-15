import { listarTenis } from '../../api/produtoApi';

import './index.scss';
import { API_URL } from '../../api/config';
import { useState } from 'react';
import storage from 'local-storage';


export default function CarrinhoItem({item: {tenis:{info}, qtd, tamanho}, removerItem, carregarCarrinho}){
    const [qtdProduto, setQtdProduto] = useState(qtd)

    function remover(){
        alert('to aqui')
        removerItem(info.ID)
    }

    function carregarImagem () {
        return API_URL + '/' + info.IMAGEM
    }

    function calcularSubTotal(){
        const subTotal = qtd * info.valor
        return subTotal
    }

    function alteraQuantidade(novaQtd){
        setQtdProduto(novaQtd)

        let carrinho = storage('carrinho');
        let itemStorage = carrinho.find(item => item.ID == info.ID);
        itemStorage.qtd = novaQtd;

        storage('carrinho', carrinho);
        carregarCarrinho();
    }


    return(
        <div>
        <div className='comp-carrinho-item'>
        
            <div className='info-tenis'>
                <div>
                     <img src={carregarImagem()} className='ima-te' alt="" />
                </div>

               <div className='nome'>
                     <h3>Nome do Tênis</h3>
                     <div>{info.NOME}</div>
               </div>
               
              <div className='preco'>
                    <h3>Preço </h3>
                     <div>{info.valor}</div>
              </div>

              <div className='preco'>
                    <h3>Tamanho </h3>
                 <div>{tamanho}</div>
              </div>

                
           


              <div className='qtd'>
                        <h3>Qtd</h3>
                        <select onChange={e => alteraQuantidade(e.target.value)} value={qtdProduto}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                </div>
              
               
                <img width='30' src="/images/remover.png" className='lx' alt=""  onClick={remover}/>

            </div>
         
        </div>
    </div>
    )
}