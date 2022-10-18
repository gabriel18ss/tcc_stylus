import './index.scss';
import BARRA from '../../componentes/barra';
import MENU from '../../componentes/menu-2';
export default function carinho(){
    return(
        <section className='pagina'>
            <div><BARRA/></div>
          
            
            <main className='main-1'>
                <div className='menu'><MENU/></div>

                <div>
                    
                <h1  className='titulo'>CARRINHO</h1>

                <div className='PPT'>
                    <h1>Produto</h1>
                    <h1>Preço</h1>
                    <h1>Tamanho</h1>
                </div>

                <div className='info-tenis'>
                    <img src="/images/nike-tenis.png" className='ima-te' alt="" />
                    <h1>tenis air jordan 5</h1>
                    <h1>R$ 1000.00</h1>
                    <h1>38</h1>
                    <img src="/images/lixo.png" className='lx' alt="" />

                </div>

            </div>

                
            </main>
            
        </section>
    )
}