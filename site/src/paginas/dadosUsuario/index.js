import './index.scss'
import Barra from '../../componentes/barra';
import Menu2 from '../../componentes/menu-2'
import { listaDados } from '../../api/usuarioApi';
import { useEffect, useState } from 'react';
import storage, { set } from 'local-storage'

export default function Dados(){

    const [dados, setDados] = useState([]);

    async function carregarTodosDados(){
        const id = storage('cliente-logado').ID;
        const r = await listaDados(id);
        setDados(r)
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
                        {dados.map(item => 
                            <div>{item.NOME}/</div>
                    
                    )}
                    </div>
                </div>
            </div>
            <div>
                

            </div>

        </section>
    )
}
