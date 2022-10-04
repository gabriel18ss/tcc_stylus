import {listarTenis} from '../../api/produtoApi';
import {useState,useEffect } from 'react';

import './index.scss';
import Barra from '../../componentes/barra'



export default function Vitrine(){

async function carregarTodosTenis(){
    const [tenis, setTenis] = useState([]);

    const resp = await listarTenis();
    console.log(resp);
    setTenis(resp);
} 
useEffect(() => {
    carregarTodosTenis();
},[])

    return(
        <section >

         <div>
         <Barra/>
        </div>
        
        <main className='vitrine'>
            <div className='page-1'>
                <h1 claassName='titulo-1'>MARCAS</h1>

                <b className='marcas-1'>Adidas</b>
                <b className='marcas-1'>Nike</b>
                <b className='marcas-1'>Puma</b>
                <b className='marcas-1'>Jordan</b>

              <div className='check'>
                <input id='checkbox-1' type="checkbox" />
                <label for="checkbox-1">Masculino</label>
              </div>

              <div className='check'>  
                <input id='checkbox-2' type="checkbox" />
                <label for="checkbox-2">Feminino</label>
               </div>

            </div>

            {tenis.map(item =>
            <div className='container'>
            <div className='cards-2'>
                <div >
                    <img src="/images/tenis00.png" className='imagem-tenis' alt=""/>

                    <h1 className='nome-tenis'>{item.nome.substr(0,1)}</h1>

                    <h1 className='preço-tenis'>{item.valor}</h1>

                </div>
            </div>
            </div>
             )}
                   </main>
              </section>

    )
}