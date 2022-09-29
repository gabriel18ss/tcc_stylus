import './index.scss';
import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import Barra from '../../componentes/barra'

export default function index(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const navigate = useNavigate();

   async function entrarclick () {
        const r = await axios.post('http://localhost:5000/usuario/login',{
            email: email,
            senha: senha
        });
        if (r.status === 401){
            setErro(r.data.erro);
        } else {
            navigate('/')
        }
    };


    return(
        <section>
            <div>
                <Barra/>
            </div>
            <div>
                <img className="imagem" src="/images/tenisLog.png" alt="" />
                
                <div className='login'>
                    
                    <h1 className='titulo'>Iniciar Sessão</h1>

                    <div className='dig'>
                    <input type='text' placeholder='E-Mail:' className='e-mail' value={email} onChange={e => setEmail(e.target.value)}/>
                    
                    <input type='password' placeholder='Senha:' className='e-mail' value={senha} onChange={e => setSenha(e.target.value)}/>
                    
                    
                    </div>

                    <button className="button" onClick={entrarclick}>ENTRAR</button>

                    <h1 className="reg">não esta Cadastrado ?</h1>
                    <h1 className="junt">Cadastre-se</h1>

                    <div>
                        {erro}
                    </div>                   
                    
                </div>
            </div>
        </section>

    )
}