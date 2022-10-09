import './index.scss';
import Barras from '../../componentes/barra';
import Car from '../../componentes/cards';
import Rodapes from '../../componentes/rodape';


export default function InfoTenis(){
    return(
        <section>

            <div>
                <Barras/>
            </div>
            <main className='pagina-tenis'>

            <div corpo-imagem>
                <img src="/images/nike-tenis.png" alt="imagem do tenis" className='imagem-tenis' />
            </div>

            <div className='informaçoes-tenis'>
                <h1 className='tipo-tenis'>Casual</h1>

                <h1>Tênis Air Jordan 1 Mid SE <br/> Masculino</h1>

                <h2 className='preco-tenis'>
                    R$ 1.099,99 <br/> ou 12x de R$ 91,67
                </h2>

                <div>

                <label className='tamanho'>
                    Numero do seu Tenis
                <input  type='number' className='tamanho-tenis'/>
                </label>

                </div>

                <div className='button-carrinho'>
                    <button className='carrinho'>adicionar ao carrinho</button>
                </div>

            </div>
            </main>
            <hr className='linha-01'/>
            <main>

                <div>
                <h1 className='titulo-01'>voce tambem pode <br/> gostar</h1>
                </div>
                
                <div className='cards-tenis'>
                    <Car/>
                </div>

                <div>
                    <Rodapes/>
                </div>
            </main>
        </section>
    )
}