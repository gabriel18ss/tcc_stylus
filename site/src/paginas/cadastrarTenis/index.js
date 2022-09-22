import './index.scss';
import Barra from '../../componentes/barra';
import storage from 'local-storage';

import { cadastrarTenis } from '../../api/produtoApi.js';

import { useState } from 'react';

export default function CTE (){
    //  marca:marca, genero:genero, quantidade: quantidade, valor: valor, lancamento:lancamento,tamanho:tamanho
   
   
    const [marca, setMarca] = useState ('');
    const [genero, setGenero] = useState ('');
    const [nome, setNome] = useState ('')
    const [quantidade, setQuantidade] = useState ('')
    const [valor, setValor] = useState ('')
    const [lancamento, setlancamento] = useState (false)
    const [tamanho, setTamanho] = useState ('')
    
    async function salvarClick(){
        try{
            const r = await cadastrarTenis(marca, genero, nome, quantidade, valor, tamanho);
            alert('pedido cadastrado uppppp');
            
        }catch (err){
            alert(err.message);
        }

    }

    return(
        <section>
            <Barra/>
           
            <main className='cadastrar-1'>

            <div className='faixa-2'>

                 <div className='inf'>
                    <h1>Pedidos</h1>

                    <h1>Cadastrar</h1>

                    <h1>inicio</h1>
        
                </div>

            </div>

            <div className='faixa-3'>

                <h1 className='cadastrarP'>CADASTRAR PRODUTO</h1>
                    <div className='quad'> 
                <div>
                    <input className='input2'></input>

                        <h4>Quantidade</h4>
                        <input className='input3' type='text' value={quantidade} onChange={e => setQuantidade(e.target.value)}></input>

                        <h4>Genero</h4>
                        <input className='input3' type='text' value={genero} onChange={e => setGenero(e.target.value)}></input>

                        <h4 className='titulo'>lançamento</h4>
                        <input type='checkbox'  checked={lancamento} onChange ={e => setlancamento(e.target.value)}></input>

                    </div>
                    <div>
                        <h4 className='titulo'>Nome</h4>
                        <input className='input4' type='text' value={nome} onChange={e => setNome(e.target.value)}></input>

                        <h4 className='titulo'>Numero</h4>
                        <input className='input4' type='number' value={tamanho} onChange={e => setTamanho(e.target.value)}></input>

                        <h4 className='titulo'>Marca</h4>
                        <input className='input4' type='text' value={marca} onChange={e => setMarca(e.target.value)}></input>

                        <h4 className='titulo'>preço</h4>
                        <input className='input4' type='text' value={valor} onChange={e => setValor(e.target.value)}></input>

                        


                    </div>
               
             </div>
                    <button onClick={salvarClick} className='botaoF'>Finalizar</button>
            </div>
            </main>            
        </section>
   )   
}