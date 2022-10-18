import { useState, useEffect } from "react";
import Barra from "../../componentes/barra";
import Menu2 from "../../componentes/menu-2";
import './index.scss';
import { listaEndereco, deletarEndereco, alterarEndereco} from "../../api/usuarioApi";

export default function ListarEndereco() {

    const [endereco, setEndereco] = useState([]);
    
    async function carregarTodosEnderecos() {
        const resp = await listaEndereco();
        console.log(resp);
        setEndereco(resp);
    }
    
    useEffect(() => {
        carregarTodosEnderecos();
    }, [])

    return(
        <section className="listarend">
            <div>
                <Barra/>
            </div>
            <div className="end">
                <div>
                    <Menu2/>
                </div>
                <div>
                <table className="tb-endereco">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Rua</th>
                                <th>Numero</th>
                                <th>Estado</th>
                                <th>Cidade</th>
                                <th>CEP</th>
                                <th>Complemento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {endereco.map(item =>
                                <tr>
                                    <td>{item.ID}</td>
                                    <td>{item.RUA}</td>
                                    <td>{item.NUMERO}</td>
                                    <td>{item.ESTADO}</td>
                                    <td>{item.CIDADE}</td>
                                    <td>{item.CEP}</td>
                                    <td>{item.COMPLEMENTO}</td>
                                    <td>
                                        <img width="20px" src="/images/caderno.png" className="iconTable" alt="" /> 
                                        <img width="20px"src="/images/lixo.png" alt=""  />
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