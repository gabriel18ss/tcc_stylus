import './index.scss'
import Barra from '../../componentes/barra';
import Menu2 from '../../componentes/menu-2'
import { listaDados } from '../../api/usuarioApi';
import { useEffect, useState } from 'react';

export default function Dados(){

    const [dados, setDados] = useState([]);

    async function carregarTodosDados() {
        const resp = await listaDados();
        console.log(resp);
        setDados(resp);
    }

    useEffect(() => {
        carregarTodosDados();
    }, [])

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
                </div>
            </div>
            <div>
                {dados.map(item => 
                        <div>{item.NOME}</div>
                )}

            </div>

        </section>
    )
}
