import './index.scss';
import {listarTenis, buscarImagem} from '../../api/produtoApi';
import { listarTenisFeminino } from '../../api/listarApi';
import {useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CardsFeminino(props){


    const [tenis, setTenis] = useState([]); 
    

    async function carregarTodosTenis() {
        const resp = await listarTenisFeminino(); 
        setTenis(resp);
    }

    useEffect(() => {
        carregarTodosTenis();
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
                    <p className='genero-produto'>{tenis.DS_GENERO}</p>
                    <h1 className='preço-tenis'>{tenis.VALOR}</h1>
        
                </div>
            </div>
        </div>
     )
    )
}

