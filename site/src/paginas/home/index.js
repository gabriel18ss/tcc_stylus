import './index.scss';
import Barra from '../../componentes/barra';


export default function Home(){
    return(
        <section className='pagina-home'>
            <Barra/>
            <div className='faixa1'>
                <h1 className='text1'>Se destaque entre as ruas</h1>
            </div>

            <div className='faixa2'>
               <button className='botao1'>Outros</button>
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
                
                <button className='botao4'>Veja</button>
             </div>
        </section>
    )
}