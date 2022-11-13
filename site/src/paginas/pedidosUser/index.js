import Barra from '../../componentes/barra';
import './index.scss';
import Menu2 from '../../componentes/menu-2';
import { useEffect } from 'react';



export default function PedidosUser(){

    async function carregarPedidos() {
        
    }


    useEffect(() => {
        carregarPedidos();
      
    }, [])


    return(
        <section>
            <Barra/>
                <div>
                    <Menu2/>
                </div>
                <div>
                    <div>

                    </div>
                </div>
        </section>
    )
}