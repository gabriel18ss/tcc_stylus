import './index.scss';
import Menu5 from '../../componentes/menu-2';
import Barra from '../../componentes/barra';
export default function Pedidos(){
    return(
        <section>
            <div><Barra/></div>
            

            <main className='container-1'>
                <div><Menu5/></div>

            <div className='informacoes-pedidos'>
                <h1 className='titulo'>SEUS PEDIDOS</h1>

                <div className='ppsd'>
                    <h1 >Produto</h1>
                    <h1 className='pr'>Preço</h1>
                    <h1>Status</h1>
                    <h1>Data entrega</h1>

                </div>

                <div className='pedidos-usuario'>
                    <h1>Tênis Air Jordan 5 <br/> Mid SE Masculino</h1>
                    <h1 className='preco-pedido'>R$ 1100,00</h1>
                    <h1 className='status'>A caminho</h1>
                    <h1 className='data-entrega'>11/11/2022</h1>
                </div>
            </div>
            </main>
        </section>
    )
}