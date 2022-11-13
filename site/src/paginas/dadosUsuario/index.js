import './index.scss'
import Barra from '../../componentes/barra';
import Menu2 from '../../componentes/menu-2'
import { listaDados } from '../../api/usuarioApi';
import { useEffect, useState } from 'react';
import storage, { set } from 'local-storage'

export default function Dados(){

    const [dados, setDados] = useState({nome:[], email:[], cpf:[], endereco:[], cep:[]});

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
                    </div>
                    <div>
                        <h2 className='dados-nome'>
                            Nome: {dados.NOME}
                        </h2>                
                        <h2 className='dados-email' >
                            E-mail: {dados.EMAIL}
                        </h2>   
                        <h2 className='dados-cpf' >
                            CPF: {dados.CPF}
                        </h2>

                        <h2 className='dados-cep'>CEP: {dados.CEP}</h2>

                        <h2 className='dados-cep'>{dados.NASCIMENTO}</h2>
                    </div>
                </div>
            </div>
            <div>
                

            </div>

        </section>
    )
}
