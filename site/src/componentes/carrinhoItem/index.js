import { listarTenis } from '../../api/produtoApi';

import './index.scss';
import { API_URL } from '../../api/config';
import { useState } from 'react';
import Storage from 'local-storage';


export default function CarrinhoItem({item: {tenis:{info}, qtd}}){

   

    return(
        <div className='comp-carrinho-item'>
        
            <div className='info-tenis'>
                <div>
                     <img src='' className='ima-te' alt="" />
                </div>

               <div>
                     <h3>Nome do Tênis</h3>
                     <div>{info.NOME}</div>
               </div>
              <div className='preco'>
                    <h3>Preço </h3>
                     <div>{info.valor}</div>
              </div>
              <div className='qtd'>
                        <h3>Qtd</h3>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
               
                <img width='30' src="/images/lixo.png" className='lx' alt="" />

            </div>

    </div>
    )
}