import './index.scss';
import Barra from '../../componentes/barra';

import { useState } from 'react';

export default function CTE (){
    //  marca:marca, genero:genero, quantidade: quantidade, valor: valor, lancamento:lancamento,tamanho:tamanho
   
   
    const [marca, setMarca] = useState ('');
    const [genero, setGenero] = useState ('');
    const [nome, setNome] = useState ('')
    const [quantidade, setQuantidade] = useState ('')
    const [valor, setValor] = useState ('')
    const [lancamento, setlancamento] = useState ('')
    const [tamanho, setTamanho] = useState ('')
    

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
                        <input className='input3' type='text' value={quantidade}></input>

                        <h4>Genero</h4>
                        <input className='input3'></input>

                    </div>
                    <div>
                        <h4 className='titulo'>Nome</h4>
                        <input className='input4'></input>

                        <h4 className='titulo'>Numero</h4>
                        <input className='input4'></input>

                        <h4 className='titulo'>Marca</h4>
                        <input className='input4'></input>

                        <h4 className='titulo'>preço</h4>
                        <input className='input4'></input>

                    </div>
               
             </div>
                    <button className='botaoF'>Finalizar</button>
            </div>
            </main>            
        </section>
   )   
}