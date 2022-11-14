import './index.scss';
import Menu5 from '../../componentes/menu-2';
import Barra from '../../componentes/barra';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { listarPedidosUsuario } from '../../api/pedidoApi';
import storage, { set } from 'local-storage'

export default function Pedidos(){

    const { id } = useParams()

    const [pedidos, setPedidos] = useState([])

    async function verPedidos(){
        const id = storage('cliente-logado').ID;
        const r = await listarPedidosUsuario(id)
        setPedidos(r)
    }
    console.log(pedidos)
    useEffect(() => {
        verPedidos()
    }, [])

    return(
        <section>
            <div><Barra/></div>
            

            <main className='container-1'>
                <div><Menu5/></div>

            <div className='informacoes-pedidos'>
                <h1 className='titulo'>SEUS PEDIDOS</h1>

                <div className='ppsd'>
                    <h1 >Produto</h1>
                    <h1>Preço</h1>
                    <h1>Frete</h1>
                    <h1>Status</h1>
                    <h1>Quantidade</h1>

                </div>

                <div className=''>
               
                <div className='container-pedidos'>
                    {pedidos.map(item => 
                      
                        <div className='pedidos-usuario'>
                                <h1>{item.TENIS}</h1>
                                <h1>{item.VALOR}</h1>
                                <h1>{item.FRETE}</h1>
                                <h1>{item.STATUS}</h1>
                                <h1>{item.QUANTIDADE}</h1>
                        </div>
                    
                    )}
                 </div>
               
                </div>
            </div>
            </main>
        </section>
    )
}