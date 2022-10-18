import './index.scss';
import Barras from '../../componentes/barra';
import Car from '../../componentes/cards';
import Rodapes from '../../componentes/rodape';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { buscarPorId, deletarProduto } from '../../api/produtoApi';


export default function InfoTenis(){

    const [tenis,setTenis] = useState({nome:[], valor: [], genero: [] });
   


    const {id} = useParams();

   async function carregarPagina(){
       const r = await buscarPorId(id);

       setTenis(r);
    }

    useEffect(() => {
        carregarPagina();
    }, [])

  

    return(
        <section>

            <div>
                <Barras/>
            </div>
            <main className='pagina-tenis'>

            <div corpo-imagem>
                <img src="/images/nike-tenis.png" alt="imagem do tenis" className='imagem-tenis' />
            </div>

            <div className='informaçoes-tenis'>
                <h1 className='tipo-tenis'>Casual</h1>

                <h1>{tenis.nome} <br/> {tenis.genero}</h1>

                <h2 className='preco-tenis'>
                    {tenis.valor} <br/> ou 12x de R$ 91,67
                </h2>

                <div>

                <label className='tamanho'>
                    Numero do seu Tenis
                <input  type='number' className='tamanho-tenis'/>
                </label>

                </div>

                <div className='button-carrinho'>
                    <button className='carrinho'>adicionar ao carrinho</button>
                </div>

            </div>
            </main>
            <hr className='linha-01'/>
            <main>

                <div>
                <h1 className='titulo-01'>voce tambem pode <br/> gostar</h1>
                </div>
                
                <div className='cards-tenis'>
                    <Car/>
                </div>

                <div>
                    <Rodapes/>
                </div>
            </main>
        </section>
    )
}