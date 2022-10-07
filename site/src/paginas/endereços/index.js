import './index.scss';
import Barra from '../../componentes/barra';

export default function Endereco() {

    return(
        <section className='endereco'>
            <div className='end-h1'>
                <h1>Endereços</h1>
            </div>
            <div className='inputs'>
                <div className='inputs3'>
                    <div className='end-input'>
                        <h3 className='end-h3'>Endereço</h3>
                        <input className='input-endereco' type='text' />
                    </div>
                    <div>
                        <h3 className='end-h3'>CEP</h3>
                        <input className='input-cep' type='text' />
                    </div>
                </div>
                
                <div className='inputs-2'>
                    <div className='bnc-input'>
                        <h3>Bairro</h3>
                        <input className='input-bairro' type='text' />
                        <h3>Número</h3>
                        <input className='input-bairro' type='text' />
                        <h3>Calcular frete</h3>
                        <input className='input-bairro' type='text' />
                        
                    </div>
                    <div className='ec-input'>
                        <h3>Estado</h3>
                        <input className='input-bairro' type='text' />
                        <h3>Complemento</h3>
                        <input className='input-bairro' type='text' />
                        <button className='butao-1'>Calcular</button>
                    </div>
                </div>
            </div>
            <div>
                <button className='butao-2'>Continuar</button>
            </div>
        </section>
    )
}