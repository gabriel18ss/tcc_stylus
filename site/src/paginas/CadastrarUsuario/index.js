import './index.scss';

export default function CadastrarUsuario (){
    return(
      
            <main className="pagina-cadastro">
           
                <div>
                    <img className="imagem-1" src="/images/tes.png" alt="imagem de fundo" />
                </div>

                <div className='pagina-principal'>

                   <b className="voltar">voltar</b>
                 
                    <h1 className="titulo-1">Criar uma conta</h1>
                   
                    <div className='inputs'>
                    <input className="input-1" type='text' placeholder='Nome' />
                    <input className="input-1" type='E-mail' placeholder='E-mail' />
                    <input className="input-1" type='password' placeholder='Senha' />
                    <input className="input-1" type='CPF' placeholder='CPF' />
                    <input className="input-1" type='CEP' placeholder='CEP' />
                    <input className="input-1" type='number' placeholder='Data de nascimento' />
                    </div>

                   
                    <button className="button-cad">Cadastrar</button>

                    <hr className='linha'/>
                  

                </div>
        
            </main>
    
    )
}