import './index.scss';

import { useNavigate } from 'react-router-dom';
import { login } from '../../api/adminapi';
import './index.scss';
import storage from 'local-storage'

import LoadingBar from 'react-top-loading-bar'
import { useState, useRef } from 'react';



export default function Index(){ 

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro]  = useState('');
    const [carregando, setCarregando] = useState(false);
    

    const navigate = useNavigate();
    const ref = useRef();
    

  async function entrarClick() {
  ref.current.continuousStart();
  setCarregando(true);

      try{
        const r = await login(email,senha);
        storage('usuario-logado', r);

         setTimeout(() => {
          navigate('/Consultar')
         }, 3000);

      } catch (err) {
          ref.current.complete();
          setCarregando(false);
          if (err.response.status === 401){
              setErro(err.response.data.erro);
          }
      }
    
       }


export default function LoginADM (){
    return(
        <section className='page-login'>
            <div className='faixa-l'>
                <div className='fundo'>
                    <h1 className='titulo-adm'>administrador</h1>
                </div>
                <div className='log'>
                    <h1 className='titulo-adm2'>login</h1>
                    <input></input>
                
                    <input className='input2'></input>

                    <button className='botao-adm'>ENTRAR</button>
                </div>
            </div>
        </section>
    )
}