import {listarTenis} from '../../api/produtoApi';
import {useState,useEffect } from 'react';

import './index.scss';
import Barra from '../../componentes/barra'
import Cards from '../../componentes/cards'



export default function Vitrine() {

    const [tenis, setTenis] = useState([]); 
    

    async function carregarTodosTenis() {
        const resp = await listarTenis();
        console.log(resp);
        setTenis(resp);
    }

    useEffect(() => {
        carregarTodosTenis();
    }, [])


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

            <div className='cardes'>
                <Cards/>
            </div>

        </main>
        </section>

    )
}