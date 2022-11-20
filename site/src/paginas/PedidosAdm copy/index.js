import './index.scss';
import Menu1 from '../../componentes/menu';
import Barra from '../../componentes/barra';

import { useState, useEffect} from 'react';
import { toast } from 'react-toastify'
import { consultarPedAprovados } from '../../api/pedidoApi';
import { alterarPedido, filtrarStatus } from '../../api/pedidoApi';
import { useParams } from 'react-router-dom'


import Modal from '../../componentes/modal';
import Barra2 from '../../componentes/barra2';




export default function PedidosAdmAprovados(){


    const [ped, setPed] = useState([]);
    const [status, setStatus] = useState('');

    const [exibirModal,setExibirModal] = useState(false)
    const [filtro, setFiltro] = useState([]);


    const { idParams } = useParams();

    useEffect(() => {
        if(idParams) {
        //    carregarStatus();
        }
    }, [])


    

    async function carregarPedidos() {
        const resp = await consultarPedAprovados();
        setPed(resp);
    }

    async function filtrar(){
        const r = await filtrarStatus(filtro);
        console.log(r)
        setPed(r);
        
    }


   // async function carregarStatus() {
     //   const resposta = await buscarPedidoId(idParams);
       // console.log(resposta);
        //setStatus(resposta.info.DS_STATUS);
        //setId(resposta.info.ID);
       
    //}
    

    async function alterarStatus(status, id) {
        try {
                let r = await alterarPedido(status, id)
                alert('alterado com sucesso')   
                console.log(r);
        
    }catch (err) {
            toast.error(err.response.data.erro);
        }
    }   

    useEffect(() => {
        carregarPedidos();
       // alterarStatus();
    }, [])


  //  function exibirModalInfo(){
    //    setExibirModal(true)
  //  }

 //   function removerModalInfo(){
     //   setExibirModal(false)
   // }

    return(
        <section>

            <Barra2/>
          
            <Modal/>
            <div className='page-cons-adm-pedido'>
                <div>
                    <Menu1 />
                </div>

                <div>
                            <div className='search-box-2'>
                
                            <input type='text' className='search-txt-2' placeholder='Pesquisar...' value={filtro} onChange={e => setFiltro(e.target.value)}/>

                            <a className='search-bnt-2' href="#">
                            <img className='lupa' src="/images/pesquisarAzul.png" alt="" onClick={filtrar} />
                            </a>
                    </div>
                <table className='table-ped'>
                <thead>
                    <tr className='pd'>
                        <th className='ponta-direita'>id</th>
                        <th>nome</th>
                        <th>frete</th>
                        <th>pagamento</th>
                        <th className='ponta-esquerda'>status</th>
                             
                    </tr>
                </thead>

                <tbody  className='tbody-pedido'>

                    {ped.map(item => 
                        <tr className='tr-ped'>
                          <td>#{item.ID}</td>
                          <td>{item.NOME}</td>
                          <td>{item.FRETE}</td>
                          <td>{item.PAGAMENTO}</td>
                          <td>{item.STATUS}</td>
                       
                        </tr>

                        
                    )}

                </tbody>
                </table>
                </div>
            </div>
        </section>
    )
}