import './index.scss';
import Barra from '../../componentes/barra'

export default function UsuarioLogin(){
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
                    <input type='text' placeholder='E-Mail:' className='e-mail'/>
                    
                    <input type='text' placeholder='Senha:' className='e-mail'/>
                    
                    
                    </div>

                    <button className="button">ENTRAR</button>

                    <h1 className="reg">não esta Cadastrado ?</h1>
                    <h1 className="junt">Cadastre-se</h1>

                   
                    
                </div>
            </div>
        </section>

    )
}