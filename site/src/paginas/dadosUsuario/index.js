import './index.scss'
import Barra from '../../componentes/barra';
import Menu2 from '../../componentes/menu-2'


export default function Dados(){

    return(

        <section className='dados'>
            <div>
                <Barra/>
            </div>
            <div className='faixa-dados'>
                <div>
                   <Menu2/>
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
