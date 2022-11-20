import './index.scss';
import Barra from '../../componentes/barra';
import Cards from '../../componentes/cards';
import CardsPuma from '../../componentes/cards puma';
import Rodape from '../../componentes/rodape';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {  toast } from 'react-toastify';
import CardsLancamentos from '../../componentes/cards lancamentos';

export default function Home(){

    const navigate = useNavigate();

    const [tenis, setTenis] = useState([]);
    const [tenisFinal, setTenisFinal] = useState();
    const currentTenis = tenis.slice(5, tenisFinal);

    const [exibirfaixa, setExibirFaixa] = useState('faixa-dois')

    
    let count = 0;
    function nextImage() {
        if (count > 4) {
            count = 0;
        }
        count++
        document.getElementById("radio" + count).checked = true;
    }

    useEffect(() => {
        const interval = setInterval(function () {
            nextImage();
        }, 2500);

        return () => clearInterval(interval);
    }, [])


    function exibirMais() {
        setExibirFaixa('faixa-dois-expandida')
        setTenisFinal(10)
    }


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


    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])


    return(
        <section className='pagina-home'>
            <Barra/>
            <div data-aos="fade-up" className='faixa1'>
                <h1 className='text1'>Se destaque entre as ruas</h1>
            </div>

           <div>
                <h1 className='titulo-pricipais'>Principais</h1>
                <div data-aos = " flip-left " className='card-x'>
                        <Cards teni={tenis} />
                </div>
           </div>

          

            <div data-aos =" flip-left " className='faixa2'>
               <button className='botao1' onClick={IrParaVitrine}>Outros</button>
            
            </div>

            <div data-aos = " flip-left " className='faixa3'>
                <div>
                    <img data-aos="fade-up" className='grafite' src="/images/pngwing.com (4).png" alt=""/>
                </div>
                <div>
                    <h1 data-aos="fade-up" className='text3'>A combinação do estilo urbano e esportivo marca presença na Loja Online Oficial da stylus. A marca não se limita à prática de esportes. Conforto e tecnologia em calçados que navegam entre o esporte e o casual para contribuir
                    diretamente com a cultura ao redor do mundo street disponíveis para você descobrir uma nova versão sua.</h1>
                </div>
              
            </div>

            <div className='faixa4'>

            <h2 data-aos="fade-up" className='text4'>Conheça nossa coleção de tenis Jordan</h2>

            <div className='slider'>

                <div className='slides'>

                    <input type='radio' name='radio-btn' id='radio1' />
                    <input type='radio' name='radio-btn' id='radio2' />
                    <input type='radio' name='radio-btn' id='radio3' />
                    <input type='radio' name='radio-btn' id='radio4' />

                    <div className='slide-frist'>
                        <img className='img-slide' src="/images/img1.jpeg" alt='img1' />
                    </div>

                    <div className='slide'>
                        <img className='img-slide' src='/images/img2.jpg' alt='img2' />
                    </div>

                    <div className='slide'>
                        <img className='img-slide' src='/images/img3.jpg' alt='img3' />
                    </div>

                    <div className='slide'>
                        <img className='img-slide' src='/images/img4.jpg' alt='img4' />
                    </div>

                    <div className='navigation-auto'>
                        <div className='auto-btn1'></div>
                        <div className='auto-btn2'></div>
                        <div className='auto-btn3'></div>
                        <div className='auto-btn4'></div>
                    </div>
                </div>

                <div className='manual-navigation'>
                    <label for='radio1' className='manual-btn'></label>
                    <label for='radio2' className='manual-btn'></label>
                    <label for='radio3' className='manual-btn'></label>
                    <label for='radio4' className='manual-btn'></label>
                </div>
                <button className='botao4' onClick={IrParaJordan}>Veja</button>
                </div>
                
                <button className='botao4' onClick={IrParaJordan}>Veja</button>
             </div>


             <div className='faixa5'>
                <div className='bloco-5'>
                    <h1 className='titulo5'>Lançamentos</h1>
                </div>
                <div className='cards-5'>
                     <CardsLancamentos/>
                </div>
               
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