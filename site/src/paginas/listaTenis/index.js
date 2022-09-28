import Barra from '../../componentes/barra';
import './index.scss';


export default function ListarProdutos() {
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
                        <th>lançamento</th>
                        <th>genero</th>
                        <th>tamanho</th>
                        <th>unidades</th>               
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>air force</td>
                        <td>Nike</td>
                        <td>não</td>
                        <td>masculino</td>
                        <td>38</td>
                        <td>30</td>
                    </tr>
                </tbody>
                </table>
        </div>
            </div>

        </section>
    )
}
