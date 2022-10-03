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
            <div className='barra'>
                <div>
                    <img className='logo' src="/images/logo.jpeg" alt="" onClick={logoClick}/>
                </div>
                <div>
                  <input className='barra-pesquisa'/>
                </div>
             
            </div>
        </section>
    )
}