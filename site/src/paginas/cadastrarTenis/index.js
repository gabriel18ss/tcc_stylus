import './index.scss';
import Barra from '../../componentes/barra';
import storage from 'local-storage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { cadastrarTenis, alterarImagem } from '../../api/produtoApi.js';

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
    const [imagem, setImagem] = useState ()
    
    async function salvarClick(){
        try{
            const novoTenis = await cadastrarTenis(marca, genero, nome, quantidade, valor, tamanho);
            const r = alterarImagem(novoTenis, imagem);
            await r
            
        }catch (err){
            toast.error(err.message);
        }

    }

    function escolherImagem(){
        document.getElementById('imagemCapa').click();
    }

    function mostrarImagem() {
        return URL.createObjectURL(imagem)
   }

    return(
        <section>
             <ToastContainer />
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

                    <div className='upload-capa' onClick={escolherImagem}>
                    {!imagem &&
                        <img clasName='' src='' alt=''/>
                    }    

                    {imagem &&
                       <img className='img'src={mostrarImagem()} alt=''/>
                    }    

                        <input className='input2' type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])}></input>
                    </div>

                        <h4>Quantidade</h4>
                        <input className='input3' type='text' value={quantidade} onChange={e => setQuantidade(e.target.value)}></input>

                        <h4>Genero</h4>
                        <input className='input3' type='text' value={genero} onChange={e => setGenero(e.target.value)}></input>

                        <h4 className='c'>lançamento</h4>
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