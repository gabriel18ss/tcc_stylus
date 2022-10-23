import './index.scss';
import Barra from '../../componentes/barra'; 

export default function TelaPagamento(){
    return(
        <section className='page-pagamento'>
            <Barra/>
            <h1 className='titulo-pag'>pagamento</h1>

              <div className='display-pagamento'>
                    <div className='info-end'>
                        <h3>Endereços</h3>
                    </div>

                    <div className='info-cartão'>
                        numero do cartão<input className='input-pag'></input>
                        validade<input className='input-pag'></input>
                        codigo de segurança<input className='input-pag'></input>
                        nome do cartão<input className='input-pag'></input>
                    </div>

                    <div className='info-pedido'>
                        <h3>Pedido</h3>

                        <h3>Valor Total</h3>

                        <h3>Forma de pagamento</h3>


                    </div>
              </div>

              <div>
                <button className='botao-pag'>Continuar</button>
              </div>
        </section>
    )
}
