import './index.scss';
import { buscarImagem} from '../../api/produtoApi';
import {useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listarTenisAdidas } from '../../api/listarApi';

export default function CardsAdidas(props){


    const [tenis, setTenis] = useState([]); 
    

    async function carregarTodosTenisAdidas() {
        const resp = await listarTenisAdidas(); 
        setTenis(resp);
    }

    useEffect(() => {
        carregarTodosTenisAdidas();
    }, [])


    const navigate = useNavigate();

    function AbrirInformaçoes(ID){
        navigate('/info/' + ID + '/tenis/')
    }

    function formatarValor(valor) {
        return valor.toFixed(2).replace('.', ',');
    }

    return(

        tenis.map(tenis =>
        <div className='container' onClick={() => AbrirInformaçoes(tenis.ID)}>
            <div className='cards-2'>
                <div >
                    <img src={buscarImagem(tenis.IMAGEM)} className='imagem-teni' alt=""/>
        
                    <h1 className='nome-tenis'>{tenis.NOME}</h1>
                    
                    <h1 className='preço-tenis'>{tenis.VALOR}</h1>
        
                </div>
            </div>
        </div>
     )
    )
}

