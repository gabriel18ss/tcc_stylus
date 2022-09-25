import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './paginas/home';
import LoginADM from './paginas/login';
import CTE from './paginas/cadastrarTenis';
import Barra from '../src/componentes/barra';
import UsuarioLogin from './paginas/loginUsuario'

export default function appRoutes() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/loginadm' element={<LoginADM/>}/>
            <Route path='/cadastrar' element={<CTE/>}/>
            <Route path='/loginusu' element={<UsuarioLogin/>}/>
            <Route path='/barra' element={<Barra/>}/>
        </Routes>
        </BrowserRouter>
    )
}