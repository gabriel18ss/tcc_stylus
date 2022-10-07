import './index.scss';
import Barra from '../../componentes/barra';
import Menu from '../../componentes/menu';

import storage from 'local-storage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { cadastrarTenis, enviarImagem, alterarTenis, buscarPorId, buscarImagem} from '../../api/produtoApi.js';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function CTE (){
   
    const [marca, setMarca] = useState ('');
    const [genero, setGenero] = useState ('');
    const [nome, setNome] = useState ('')
    const [quantidade, setQuantidade] = useState ('')
    const [valor, setValor] = useState ('')
    const [lancamento, setlancamento] = useState (false)
    const [tamanho, setTamanho] = useState ('');

    const [imagem, setImagem] = useState ();
    const [id, setId] = useState(0);


    const { idParams } = useParams();

    useEffect(() => {
        if(idParams) {
            carregarTenis();
        }
    }, [])

   async function carregarTenis() {
        const resposta = await buscarPorId(idParams);
        setMarca(resposta.ID_PRODUTO_MARCA);
        setGenero(resposta.DS_GENERO);
        setNome(resposta.NOME);
        setQuantidade(resposta.QUANTIDADE);
        setValor(resposta.VALOR);
      
        setTamanho(resposta.NUMERO);
        setImagem(resposta.IMG_PRODUTO);
        setId(resposta.ID);
       
    }
    
    async function salvarClick(){
        try{
            if (!imagem)
                throw new Error('Escolha a capa do Produto');

            const usuario = storage('usuario-logado').ID;
            
            if (id === 0){
                const novoTenis = await cadastrarTenis(marca, genero, nome, quantidade, valor, lancamento, tamanho, usuario);
                const r = enviarImagem(novoTenis.id, imagem);
                setId(novoTenis.id); 

                toast.dark('tenis cadastrado 👟');

            }

            else{
                await alterarTenis(id,  marca, genero, nome, quantidade, valor, lancamento, tamanho, usuario);
                const r = enviarImagem(id, imagem);

                toast.dark('tenis alterado   👟');
            }
           
          
            
        }catch (err){
            if(err.response)
              toast.error(err.response.data.erro );
            else
              toast.error(err.message);
        }

    }

    function escolherImagem() {
        document.getElementById('imagemCapa').click();
    }

    function mostrarImagem() {
        if (typeof (imagem) == 'object'){
        return URL.createObjectURL(imagem);
        }
        else {
            return buscarImagem(imagem);
        }
    }

    function novoClick() {
        setId(0);
        setMarca(0);
        setGenero(0);
        setNome('');
        setQuantidade('');
        setValor(0);
        setTamanho(0);
        setImagem();

    }

    return(
        <section>
             <ToastContainer />
            <Barra/>
           
            <main className='cadastrar-1'>
            <Menu/>

            <div className='faixa-3'>

                <h1 className='cadastrarP'>CADASTRAR PRODUTO</h1>
                    <div className='quad'> 
                <div>

                    <div className='upload-capa' onClick={escolherImagem}>
                    {!imagem &&
                        <img clasName='' src='' alt=''/>
                    }    

                    {imagem &&
                       <img src={mostrarImagem()} className='img' alt=''/>
                    }    

                        <input className='input2' type='file'id='imagemCapa' onChange={e => setImagem(e.target.files[0])} />
                    </div>

                        <h4>Quantidade</h4>
                        <input className='input3' placeholder='informe a quantidade' type='text' value={quantidade} onChange={e => setQuantidade(e.target.value)}></input>

                        <h4>Genero</h4>
                        <input className='input3' placeholder='informe o genero' type='text' value={genero} onChange={e => setGenero(e.target.value)}></input>

                        <h4 className='c'>lançamento</h4>
                        <input type='checkbox'  checked={lancamento} onChange ={e => setlancamento(e.target.checked)}></input>

                    </div>
                    <div>
                        <h4 className='titulo-cad'>Nome</h4>
                        <input className='input4' placeholder='nome do tenis' type='text' value={nome} onChange={e => setNome(e.target.value)}></input>

                        <h4 className='titulo-cad' >Numero</h4>
                        <input className='input4' placeholder='informe o tamanho' type='number' value={tamanho} onChange={e => setTamanho(e.target.value)}></input>

                        <h4 className='titulo-cad'>Marca</h4>
                        <input className='input4' placeholder='informe a marca' type='text' value={marca} onChange={e => setMarca(e.target.value)}></input>

                        <h4 className='titulo-cad'>preço</h4>
                        <input className='input4' placeholder='informe o' type='text' value={valor} onChange={e => setValor(e.target.value)}></input>

                        


                    </div>
               
             </div>
                    <button onClick={salvarClick} className='botaoF'>{id === 0 ? 'Finalizar' : 'Alterar'}</button> &nbsp; &nbsp; 
                    <button onClick={novoClick} className='botaoF'>Novo</button>  
            </div>
            
            </main>            
        </section>
   )   
}