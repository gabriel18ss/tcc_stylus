import './index.scss';
import {listarTenis, buscarImagem} from '../../api/produtoApi';
import {useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cards(){


    const [tenis, setTenis] = useState([]); 
    

    async function carregarTodosTenis() {
        const resp = await listarTenis();
        console.log(resp);
        setTenis(resp);
    }

    useEffect(() => {
        carregarTodosTenis();
    }, [])


    const navigate = useNavigate();

    function AbrirInformaçoes(id){
        navigate('/info/' + id + '/tenis/')
    }

    return(

        tenis.map(item =>
        <div className='container' onClick={() => AbrirInformaçoes(item.id)}>
            <div className='cards-2'>
                <div >
                    <img src={buscarImagem(item.IMAGEM)} className='imagem-teni' alt=""/>
        
                    <h1 className='nome-tenis'>{item.NOME}</h1>
                    
                    <h1 className='preço-tenis'>{item.VALOR}</h1>
        
                </div>
            </div>
        </div>
     )
    )
}

