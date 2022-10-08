import './index.scss';
import Barras from '../../componentes/barra';


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
        </section>
    )
}