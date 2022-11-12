import { useState } from 'react'
import './index.scss'

import storage from 'local-storage'
import { toast } from 'react-toastify'
import { alterarPedido } from '../../api/pedidoApi'
import { useParams } from 'react-router-dom'

export default function Modal({ exibir, fechar }) {
    const { id } = useParams()

    const [status, setStatus] = useState('')
   
    

    async function alterarStatus(id, status) {
        try {
                let r = await alterarPedido(id, status)
                alert('alterado com sucesso')   
        
    }catch (err) {
            toast.error(err.response.data.erro);
        }
    }   


    return (
        <div className='comp-modal-endereco'>
            <div className={`modal-endereco ${exibir ? 'exibir' : ''}`}>
                <div className='conteudo'>
                    <h1> Alterar </h1>

                    <div className='form'>
                        <div>
                            <label> Status do pedido </label>
                            <input type='text' value={status} onChange={e=> setStatus(e.target.value)}/>
                        </div>
                       
                            <div className='btn'>
                                <button onClick={alterarStatus}> Salvar </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
    
    )
}