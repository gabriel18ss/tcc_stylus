import './index.scss';
import Menu1 from '../../componentes/menu';
import Barra from '../../componentes/barra';
import { useState, useEffect} from 'react';
import { listarPedidos } from '../../api/listarApi';


export default function PedidosAdm(){

    const [ped, setPed] = useState([]);

    async function carregarPedidos() {
        const resp = await listarPedidos();
        setPed(resp);
    }

    useEffect(() => {
        carregarPedidos();
    }, [])

    return(
        <section>
            <Barra/>
            <div className='page-cons-adm-pedido'>
                <div>
                    <Menu1/>
                </div>

                <div>
                <table>
                <thead>
                    <tr>
                        <th className='ponta-direita'>id</th>
                        <th>nome</th>
                        <th>frete</th>
                        <th>status</th>
                        <th className='ponta-esquerda'>pagamento</th>         
                    </tr>
                </thead>

                <tbody>

                    {ped.map(item => 
                        <tr>
                          <td>#{item.ID}</td>
                          <td>{item.NOME}</td>
                          <td>{item.FRETE}</td>
                          <td>{item.STATUS}</td>
                          <td>{item.PAGAMENTO}</td>
                        </tr>
                    
                    )}

                </tbody>
                </table>
                </div>
            </div>
        </section>
    )
}