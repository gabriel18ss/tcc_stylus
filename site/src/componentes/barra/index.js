import './index.scss';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Barra(props){

    const navigate = useNavigate();
    
    async function logoClick(){
        try{
            setTimeout(() => {
                navigate('/')
             }, 3000);
        } catch (err){
            toast.error(err.message);
        }
    }
    return(
        <section className='comp-barra'>
            <div>

                <div>
                    <img className='logo' src="/images/logo.jpeg" alt="" onClick={logoClick}/>
                </div>
                     
            </div>

                <div className='search-box'>
                  <input type='text' className='search-txt' placeholder='Pesquisar...'/>
                  <a className='search-bnt' href="#"></a>
                    <img src="pesquisa.png" alt="" />

             
                </div>
                <div>
                    <img className='sacola' src="/images/sacolabranca.png" alt='sacola'/>
                </div>
                <div>
                <img className='user' src="/images/user-branco.png" alt='usuario'/>
                </div>
        
        </section>
    )
}