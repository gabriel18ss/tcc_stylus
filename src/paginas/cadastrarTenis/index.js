import './index.scss';


export default function CTE (){
    return(
        <section>
            <div className='faixa-1'>

                <div >
                    <img src="" alt=""/>
                </div>

                <h1 className='voltar-1'>voltar</h1>
            </div>

            <main className='cadastrar-1'>

            <div className='faixa-2'>

                 <div className='inf'>
                    <h1>Pedidos</h1>

                    <h1>Cadastrar</h1>

                    <h1>inicio</h1>
        
                </div>

            </div>

            <div className='faixa-3'>

                <h1 className='cadastrarP'>CADASTRAR PRODUTO</h1>

                    <div className='quad'> 

                <div>
                    <input className='input2'></input>

                        <h1>Quantidade</h1>
                        <input className='input3'></input>

                        <h1>Genero</h1>
                        <input className='input3'></input>

                    </div>
                    <div>
                        <h1>Nome</h1>
                        <input className='input4'></input>

                        <h1>Numero</h1>
                        <input className='input4'></input>

                        <h1>Marca</h1>
                        <input className='input4'></input>

                        <h1>preço</h1>
                        <input className='input4'></input>

                    </div>
               
             </div>
                    <button className='botaoF'>Finalizar</button>
            </div>
            </main>            
        </section>
   )   
}