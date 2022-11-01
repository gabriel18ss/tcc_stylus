import './index.scss';
import Barra from '../../componentes/barra';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import {cadastrarEnd} from '../../api/usuarioApi';
import storage from 'local-storage'

export default function Endereco(){
    
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [id, setId] = useState('');

    async function salvarEndClick(){
        try{
            const id = storage('cliente-logado').ID
            const r = await cadastrarEnd(id, rua, cep, cidade, estado, numero, complemento);
            toast.dark('Endereço cadastrado com sucesso 🏘 ');

        }catch (err){
            toast.error(err.message);
        }
    }

    return(
        
        <section className='endereco'>
            <Barra/>
            <ToastContainer />
        <div className='centro'>
        <div className='end-h1'>
           
           <h1> Novo Endereço</h1>
       </div>
       <div className='inputs'>
           <div className='inputs3'>
               <div className='end-input'>
                   <h3 className='end-h3'>Rua</h3>
                   <input className='input-endereco' type='text' value={rua} onChange={e => setRua(e.target.value)} />
               </div>
               <div>
                   <h3 className='end-h3'>CEP</h3>
                   <input className='input-cep' type='text' value={cep} onChange={e => setCep(e.target.value)} />
               </div>
           </div>
           

           <div className='inputs-2'>
               <div className='bnc-input'>
                   <h3>Cidade</h3>
                   <input className='input-bairro' type='text' value={cidade} onChange={e => setCidade(e.target.value)}/>
                   
                   <h3>Número</h3>
                   <input className='input-bairro' type='text' value={numero} onChange={e => setNumero(e.target.value)}/>
                    
                </div>


               <div className='ec-input'>
                   <h3>Estado</h3>
                   <input className='input-bairro' type='text' value={estado} onChange={e => setEstado(e.target.value)} />
                   
                   <h3>Complemento</h3>
                   <input className='input-bairro' type='text' value={complemento} onChange={e => setComplemento(e.target.value)}/>
                  
                  
               </div>

               <div className='ec-input'>
                   <h3>Bairro</h3>
                   <input className='input-bairro' type='text' value={bairro} onChange={e => setBairro(e.target.value)} />
            
               </div>
           </div>

       </div>
       <div>
           <button onClick={salvarEndClick} className='butao-2'>Continuar</button>
       </div>
            </div>
        </section>
    )
}

