import './index.scss';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';

export default function Rodape(){
    
    const navigate =useNavigate();


    

    async function pagesAdm(){
        try{
            setTimeout(() => {
                navigate('/adm/login')
             }, 300);
        } catch (err){
            toast.error(err.message);
        }
    }

    return(
        <section className='comp-rodape'>
            <div className='coluna1'>
            <h3> Parcerias</h3>
                <h4>Nike</h4>
                <h4>Adidas</h4>
                <h4>Puma</h4>
                <h4>Jordan</h4>
                <h4>Converce</h4>
            </div>

            <div className='coluna2'>
                <h3> Institucional</h3>
                <h4>Quem Somos?</h4>
                <h4>Termos de uso</h4>
                <h4>Política de privacidade</h4>
                <h4>Regulamento CRM</h4>
            </div>

            <div className='coluna3'>
                <h3> Ajuda</h3>
                <h4>Suporte</h4>
                <h4>Contatos</h4>
                <h4 onClick={pagesAdm} className='bot-secret'>Ir para parte adm</h4>
            </div>

            <div className='icones-sociais'>
                <img className='redes-sociais' src="/images/facebook.png" alt="facebook" />
                <img className='redes-sociais' src="/images/instagram.png" alt="instagram" />
                <img className='redes-sociais' src="/images/twitter.png" alt="tiweter" />
            </div>
            
        </section>
    )
}