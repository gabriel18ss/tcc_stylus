import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './paginas/home';
import LoginADM from './paginas/login';
import CTE from './paginas/cadastrarTenis';
import Barra from '../src/componentes/barra';
import Index from './paginas/loginUsuario';
import Vitrine from './paginas/vitrine';
import Menu from  './componentes/menu';
import Endereco from './paginas/cadastrar endereco';
import CadastrarUsuario from './paginas/CadastrarUsuario';
import Dados from './paginas/dadosUsuario';
import ListarEndereco from './paginas/endereçoUsuario';
import Carrinho from './paginas/carrinho';
import TelaPagamento from './paginas/pagamento';
import Pedidos from './paginas/PedidosUsuario';

import ListarProdutos from './paginas/listaTenis';
import Rodape from './componentes/rodape';
import InfoTenis from './paginas/informacoesTenis';
import CarrinhoItem from './componentes/carrinhoItem';
import Menu3 from './componentes/menu-3';

import VitrineNike from './paginas/nike'
import VitrinePuma from './paginas/puma'
import VitrineAdidas from './paginas/adidas';
import VitrineJordan from './paginas/jordan';
import PedidosAdm from './paginas/PedidosAdm';


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
            <Route path='/usuario/cadastrar/endereco' element={<Endereco/>}/>
            <Route path='/barra' element={<Barra/>}/>
            <Route path='/rodape' element={<Rodape/>}/>
            <Route path='/listar/produtos' element={<ListarProdutos/>}/>
            <Route path='/vitrine/nike' element={<VitrineNike/>}/>
            <Route path='/vitrine/puma' element={<VitrinePuma/>}/>
            <Route path='/vitrine/adidas' element={<VitrineAdidas/>}/>
            <Route path='/vitrine/jordan' element={<VitrineJordan/>}/>
            <Route path='/vitrine' element={<Vitrine/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/usuario/carrinho' element={<Carrinho/>}/>
            <Route path='/pedidos' element={<Pedidos/>}/>
            <Route path='/info/:ID/Tenis' element={<InfoTenis/>}/>
            <Route path='/usuario/dados' element={<Dados/>}/>
            <Route path='usuario/listar/endereco' element={<ListarEndereco/>}/>
            <Route path='/carrinho/item' element={<CarrinhoItem/>}/>
            <Route path='/usuario/pagamento' element={<TelaPagamento/>}/>   
            <Route path='/menu3' element={<Menu3/>}/>         
            <Route path='/adm/pedidos' element={<PedidosAdm/>}/>         
        </Routes>
        </BrowserRouter>
    )
}