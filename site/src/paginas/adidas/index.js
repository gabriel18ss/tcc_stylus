import { listarTenisAdidas } from '../../api/listarApi';
import {useState,useEffect } from 'react';

import './index.scss';
import Barra from '../../componentes/barra'
import CardsAdidas from '../../componentes/cards adidas'
import Menu3 from '../../componentes/menu-3';



export default function VitrineAdidas() {

    const [tenis, setTenis] = useState([]); 
    

    async function carregarTodosTenis() {
        const resp = await listarTenisAdidas();
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
            <div className='display-menu3'>
                <Menu3/>
            </div>
            <div className='card'>
                <CardsAdidas/>
            </div>

         </main>
    </section>

    )
}