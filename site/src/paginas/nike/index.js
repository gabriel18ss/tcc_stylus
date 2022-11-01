
import {useState,useEffect } from 'react';
import { listarTenisNike } from '../../api/listarApi';
import './index.scss';
import Barra from '../../componentes/barra'
import CardsNike from '../../componentes/cards nike';
import Menu3 from '../../componentes/menu-3';



export default function Vitrine() {

    const [tenis, setTenis] = useState([]); 
    

    async function carregarTodosTenis() {
        const resp = await listarTenisNike();
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
            <div className='cardes'>
                <CardsNike/>
            </div>

         </main>
    </section>

    )
}




