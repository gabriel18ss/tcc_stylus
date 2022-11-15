import './index.scss';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';

export default function Menu3(props){

    const navigate = useNavigate();

    async function IrParaNike(){
        {
            try{
                setTimeout(() => {
                    navigate('/vitrine/nike')
                 }, );
            } catch (err){
                toast.error(err.message);
            }
        }
    }

    async function IrParaAdidas(){
        {
            try{
                setTimeout(() => {
                    navigate('/vitrine/adidas')
                 }, );
            } catch (err){
                toast.error(err.message);
            }
        }
    }

    async function IrParaPuma(){
        {
            try{
                setTimeout(() => {
                    navigate('/vitrine/puma')
                 }, );
            } catch (err){
                toast.error(err.message);
            }
        }
    }

    async function IrParaJordan(){
        {
            try{
                setTimeout(() => {
                    navigate('/vitrine/jordan')
                 }, );
            } catch (err){
                toast.error(err.message);
            }
        }
    }


    async function IrParaMasculino(){
        {
            try{
                setTimeout(() => {
                    navigate('/vitrine/masculino')
                 }, );
            } catch (err){
                toast.error(err.message);
            }
        }
    }


    async function IrParaFemininino(){
        {
            try{
                setTimeout(() => {
                    navigate('/vitrine/feminina')
                 }, );
            } catch (err){
                toast.error(err.message);
            }
        }
    }


    
    return(
        <main className='vitrine'>
            <div className='page-1'>
          <div className='titulo-1'> Marcas</div>

                <b className='marcas-1' onClick={IrParaAdidas}>Adidas</b>
                <b className='marcas-1' onClick={IrParaNike} >Nike</b>
                <b className='marcas-1'onClick={IrParaPuma}>Puma</b>
                <b className='marcas-1' onClick={IrParaJordan}>Jordan</b>

            <div className='generos-route'>
                <label onClick={IrParaMasculino} for="checkbox-1">Masculino</label>
            </div>

              <div className='generos-route'>  
                <label onClick={IrParaFemininino} for="checkbox-2">Feminino</label>
               </div>

            </div>

        </main>
    )
}