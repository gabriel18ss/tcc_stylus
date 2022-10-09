import './index.scss'
import Barra from '../../componentes/barra'


export default function Dados(){

    return(

        <section className='dados'>
            <div>
                <Barra/>
            </div>
            <div className='faixa-dados'>
                <div className='menu-1'>
                    <h1 className='h1-bemvindo'>BEM-VINDO</h1>
                    <h1 className='h1-nome'>MARCIO</h1>

                    <h2 className='h2-menu'>Seus dados</h2>

                    <h2 className='h2-menu'>Compras</h2>

                    <h2 className='h2-menu'>Carrinho</h2>

                    <h2 className='h2-menu'>Meus endereços</h2>

                    <h2 className='h2-menu'>Início</h2>
                </div>

                <div className='seus-dados'>
                    <div>
                        <h1>Seus Dados </h1>
                        <hr/>
                    </div>

                    <div>
                        <h1>Nome</h1>
                        <h1>Data</h1>
                        <h1>E-mail</h1>
                        <h1>CPF</h1>
                        <h1>CEP</h1>
                    </div>
                </div>
            </div>

        </section>
    )
}
