import {useState,useEffect } from 'react';
import { listarTenisMasculino } from '../../api/listarApi';
import './index.scss';
import Barra from '../../componentes/barra'
import CardsPuma from '../../componentes/cards puma';
import Menu3 from '../../componentes/menu-3';
import CardsMasculino from '../../componentes/cards masculino';



export default function VitrineMasculina() {

    const [tenis, setTenis] = useState([]); 
    

    async function carregarTodosTenis() {
        const resp = await listarTenisMasculino();
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
                <CardsMasculino/>
            </div>

         </main>
    </section>

    )
}




