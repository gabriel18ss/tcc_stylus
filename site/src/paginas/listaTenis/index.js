import './index.scss';
import Barra from '../../componentes/barra';
import Menu from '../../componentes/menu';

import { useState, useEffect } from 'react';
import { listarTenis, buscarPorNome, deletarProduto } from '../../api/produtoApi'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 
import Barra2 from '../../componentes/barra2';


export default function ListarProdutos() {

    const [tenis, setTenis] = useState([]); 
    const [filtro, setFiltro] = useState([]);

    const navigate = useNavigate();
    
    function editarProduto(id){
        navigate(`/adm/alterar/${id}`)
    }

    async function deletarProdutoClick(ID, NOME){

        confirmAlert({
            title:'Remover Produto',
            message:`Deseja remover o Produto ${NOME}?`,
            buttons:[
                {
                    label:'Sim',
                    onClick: async () => {
                        
                        const resposta = await deletarProduto(ID, NOME);
                        if(filtro === '')
                            carregarTodosTenis();
                        else
                            filtrar();
                                           
                        toast.dark('Produto removido com sucesso🪚 ')
                    }
                },
                {
                    label:'Não', 
                    onClick: () => alert
                }

            ]
        })


    }
      

   async function carregarTodosTenis() {
        const resp = await listarTenis();
        console.log(resp);
        setTenis(resp);
    }

    async function filtrar() {
        const resp = await buscarPorNome(filtro);
        setTenis(resp); 
    }


    useEffect(() => {
        carregarTodosTenis();
    }, [])



    return(
        <section className='page-listaProd'>
            <Barra2/>
        <div className='part-table'>
            <Menu/>


            <div className='tabela'>

                <div className="">
                    <input className="caixa-pesquisa" value={filtro} onChange={ e => setFiltro(e.target.value)} ></input>
                    <img width="20px"  src="/images/analise.png" className="iconPesq" onClick={filtrar} ></img>
                </div>
                <table>
                <thead>
                    <tr>
                        <th className='ponta-direita'>id</th>
                        <th>nome</th>
                        <th>marca</th>
                        <th>genero</th>
                        <th>valor</th>
                        <th>tamanho</th>
                        <th>unidades</th>    
                        <th className='ponta-esquerda'>apagar e alterar</th>                 
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
                                    <img width="20px" src="/images/caderno.png" className="iconTable" alt=""  onClick={() => editarProduto(item.ID)} /> 
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
