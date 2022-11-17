import {listarTenis} from '../../api/produtoApi';
import {useState,useEffect } from 'react';

import './index.scss';
import Barra from '../../componentes/barra'
import Cards from '../../componentes/cards'
import Menu3 from '../../componentes/menu-3';



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
                <div className='display-menu3'>
                    <Menu3/>
                </div>
                <div className='card'>
                    <Cards/>
                </div>

            </main>
    </section>

    )
}