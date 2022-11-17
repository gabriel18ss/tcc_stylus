import {useState,useEffect } from 'react';
import { listarTenisFeminino } from '../../api/listarApi';
import './index.scss';
import Barra from '../../componentes/barra'
import Menu3 from '../../componentes/menu-3';
import CardsFeminino from '../../componentes/cards feminino';



export default function VitrineFeminina() {

    const [tenis, setTenis] = useState([]); 
    

    async function carregarTodosTenis() {
        const resp = await listarTenisFeminino();
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
                <CardsFeminino/>
            </div>

         </main>
    </section>

    )
}




