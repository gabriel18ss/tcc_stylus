import './index.scss';
import Barra from '../../componentes/barra';
import Cards from '../../componentes/cards';
import CardsPuma from '../../componentes/cards puma';
import Rodape from '../../componentes/rodape';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';

export default function Home(){

    const navigate = useNavigate();


    async function IrParaVitrine(){
        try{
            setTimeout(() => {
                navigate('/vitrine')
             }, );
        } catch (err){
            toast.error(err.message);
        }
    }


    async function IrParaNike(){
        try{
            setTimeout(() => {
                navigate('/vitrine/nike')
             }, );
        } catch (err){
            toast.error(err.message);
        }
    }

    async function IrParaAdidas(){
        try{
            setTimeout(() => {
                navigate('/vitrine/adidas')
             }, );
        } catch (err){
            toast.error(err.message);
        }
    }


    async function IrParaPuma(){
        try{
            setTimeout(() => {
                navigate('/vitrine/puma')
             }, );
        } catch (err){
            toast.error(err.message);
        }
    }



    async function IrParaJordan(){
        try{
            setTimeout(() => {
                navigate('/vitrine/jordan')
             }, );
        } catch (err){
            toast.error(err.message);
        }
    }


   


    return(
        <section className='pagina-home'>
            <Barra/>
            <div className='faixa1'>
                <h1 className='text1'>Se destaque entre as ruas</h1>
            </div>
            <div className='card'>
                <Cards/>
            </div>
            <div className='faixa2'>
               <button className='botao1' onClick={IrParaVitrine}>Outros</button>
            </div>

            <div className='faixa3'>
                <div>
                    <img className='grafite' src="/images/pngwing.com (4).png" alt=""/>
                </div>
                <div>
                    <h1 className='text3'>A combinação do estilo urbano e esportivo marca presença na Loja Online Oficial da stylus. A marca não se limita à prática de esportes. Conforto e tecnologia em calçados que navegam entre o esporte e o casual para contribuir
                    diretamente com a cultura ao redor do mundo street disponíveis para você descobrir uma nova versão sua.</h1>
                </div>
              
            </div>

            <div className='faixa4'>
                  <h2 className='text4'>Conheça nossa coleção de tenis Jordan</h2>
                
                <button className='botao4' onClick={IrParaJordan}>Veja</button>
             </div>


             <div className='faixa5'>
                <h1 className='titulo5'>Lançamento</h1>
                <CardsPuma/>
             </div>

             <div className='faixa6'>
                    <button className='botaoMarcas'>
                        <img className='img10' src='/images/jordan.png' onClick={IrParaJordan} alt=''/>
                    </button>
                    <button className='botaoMarcas' onClick={IrParaNike}>
                        <img className='img11' src='/images/nike.png' alt=''/>
                    </button>
                    <button className='botaoMarcas' onClick={IrParaAdidas}>
                    <img className='img12' src='/images/adidas.png' alt=''/>
                    </button>
                    <button className='botaoMarcas'>
                    <img className='img13' src='/images/puma.png' onClick={IrParaPuma} alt=''/>
                    </button>            
             </div>

             <Rodape/>
        </section>
    )
} 