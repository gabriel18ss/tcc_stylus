import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './paginas/home';
import LoginADM from './paginas/login';
import CTE from './paginas/cadastrarTenis';
import Barra from '../src/componentes/barra';
import Index from './paginas/loginUsuario';
import Vitrine from './paginas/vitrine';
import Menu from  './componentes/menu';

import CadastrarUsuario from './paginas/CadastrarUsuario';
import TelaEnd from './paginas/endereços';
import ListarProdutos from './paginas/listaTenis';
import Rodape from './componentes/rodape';

export default function appRoutes() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/adm/login' element={<LoginADM/>}/>
            <Route path='/adm/cadastrar' element={<CTE/>}/>
            <Route path='/adm/alterar/:idParams' element={<CTE/>}/>
            <Route path='/usuario/login' element={<Index/>}/>
            <Route path='/usuario/cadastrar' element={<CadastrarUsuario/>}/>
            <Route path='/Endereço' element={<TelaEnd/>}/>
            <Route path='/barra' element={<Barra/>}/>
            <Route path='/rodape' element={<Rodape/>}/>
            <Route path='/listaProdutos' element={<ListarProdutos/>}/>
            <Route path='/vitrine' element={<Vitrine/>}/>
            <Route path='/menu' element={<Menu/>}/>
        </Routes>
        </BrowserRouter>
    )
}