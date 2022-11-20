import './index.scss';
import { useNavigate } from 'react-router-dom';
import Barra from '../../componentes/barra';


export default function TelaFinalizacao(){

    const navigate = useNavigate();

    return(
        <section>
            <Barra/>
            <div>
                <div className='titulo-finalização'>
                    <h1 className='titulo-finalização'>Seu pedido foi finalizado com sucesso</h1> 
                </div>
                <div className='container-agradecimento'>
                    <h2>Agradecemos a sua preferencia!</h2>
                </div>
                <div className='bot-finaliazação'>
                    <button>inicio</button>
                    <button>Seu pedido</button>
                </div>
            </div>
        </section>
    )
}