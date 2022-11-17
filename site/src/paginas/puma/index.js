import {useState,useEffect } from 'react';
import { listarTenisPuma } from '../../api/listarApi';
import './index.scss';
import Barra from '../../componentes/barra'
import CardsPuma from '../../componentes/cards puma';
import Menu3 from '../../componentes/menu-3';



export default function Vitrine() {

    const [tenis, setTenis] = useState([]); 
    

    async function carregarTodosTenis() {
        const resp = await listarTenisPuma();
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
                <CardsPuma/>
            </div>

         </main>
    </section>

    )
}




