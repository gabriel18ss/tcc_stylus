import Barra from '../../componentes/barra';
import './index.scss';

import { useState, useEffect } from 'react';
import { listarTenis, buscarPorNome, deletarProduto } from '../../api/produtoApi'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ListarProdutos() {

    const [tenis, setTenis] = useState([]); 
    const [filtro, setFiltro] = useState([]);



    async function deletarProdutoClick(ID, NOME){
        const resposta = await deletarProduto(ID, NOME);
        if(filtro === '')
            carregarTodosTenis();
        else
            
        toast.dark('Produto removido 🪚 ')

    }
      

   async function carregarTodosTenis() {
        const resp = await listarTenis();
        console.log(resp);
        setTenis(resp);
    }


    useEffect(() => {
        carregarTodosTenis();
    }, [])

    return(
        <section className='page-listaProd'>
            <Barra/>
        <div className='part-table'>
            <div className='barra-lateral'>
                <botton>Inicio</botton>
                <botton>Cadastrar</botton>
                <botton>Produtos Cadastrados</botton>
            </div>
            <div className='tabela'>
                <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>marca</th>
                        <th>genero</th>
                        <th>valor</th>
                        <th>tamanho</th>
                        <th>unidades</th>    
                        <th>apagar e alterar</th>                 
                    </tr>
                </thead>

                <tbody>

                    {tenis.map(item => 
                        <tr>
                            <td>#{item.ID}</td>
                            <td>{item.NOME}</td>
                            <td>{item.NM_MARCA}</td>
                            <td>{item.DS_GENERO}</td>
                            <td>{item.VALOR}</td>
                            <td>{item.NUMERO}</td>
                            <td>{item.QUANTIDADE}</td>
                            <td>
                                    <img width="20px" src="/images/caderno.png" className="iconTable" alt=""/>
                                    <img width="20px"src="/images/lixo.png" alt="" onClick={() => deletarProdutoClick(item.ID, item.NOME)} />
                            </td>
                        </tr>
                    
                    )}

                </tbody>
                </table>
        </div>
            </div>

        </section>
    )
}
