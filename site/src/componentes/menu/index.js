import './index.scss';
import storage from 'local-storage'

import { useNavigate} from 'react-router-dom';
import { useEffect} from 'react';

export default function Menu(props){

    useEffect(() => {
        if (!storage('usuario-logado')){
            navigate('/adm/login');
        }
      }, [])


    const navigate = useNavigate();
 
        function sairClick(){
        storage.remove('usuario-logado');
        navigate('/adm/login');
    }
    
    return(
        <div className='faixa-2'>

        <div className='inf'>
           <h1>Pedidos</h1>

           <h1>Cadastrar</h1>

           <h1>inicio</h1>

           <h1 onClick={sairClick} >Sair</h1>

       </div>

   </div>
    )
}