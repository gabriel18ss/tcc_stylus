import './index.scss';
import Barras from '../../componentes/barra';
import Car from '../../componentes/cards';
import Rodapes from '../../componentes/rodape';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import storage from 'local-storage';

import { buscarPorId, deletarProduto, buscarImagem} from '../../api/produtoApi';
import { API_URL } from '../../api/config';
import { ToastContainer,  toast } from 'react-toastify';

export default function InfoTenis(){

    const [tenis,setTenis] = useState({nome:[], valor: [], genero: [], imagem:[], info: {} });
    const [imagemPrincipal, setImagemPrincipal] = useState(0);
    const [tamProduto ,setTamProduto] = useState();

    const {ID} = useParams();

   async function carregarPagina(){
       const r = await buscarPorId(ID);
       setTenis(r);
    }

    useEffect(() => {
        carregarPagina();
    }, [])

    function exibirImagemPrincipal(){
        if (tenis.IMAGEM.legth > 0){
            return API_URL + '/' + tenis.IMAGEM[imagemPrincipal];
        } else{
            return '/pngwing.com (1).png';
        }
    }


    function adicionarAoCarrinho() {
        let carrinho = [];
        if (storage('carrinho')) {
            carrinho = storage('carrinho')
        }

        if(!carrinho.find(item => item.ID === ID)) {
            carrinho.push({
                ID: ID,
                qtd: 1,
                
            })
            
        storage('carrinho', carrinho);

        }
        toast.dark('Seu produto foi adicionado ao carrinho!')
    }


    function alteraTamanho(novoTamanho){
        setTamProduto(novoTamanho)

        let carrinho = storage('carrinho');
        let itemStorage = carrinho.find(item => item.ID );
        itemStorage.tamanho = novoTamanho;

        storage('carrinho', carrinho);
      
    }

    return(
        <section>
            <div>
                <Barras/>
            </div>
            <main className='pagina-tenis'>

            <div corpo-imagem>
                <img src={buscarImagem(tenis.info.IMAGEM)} className='imagem-tenis' />
            </div>

            <div className='informaçoes-tenis'>
                <h1 className='tipo-tenis'>{tenis.info.MARCA}</h1>

                <h1 className='info-nome'>{tenis.info.NOME} 
                    <br/> {tenis.info.GENERO}</h1>

                <h2 className='preco-tenis'>
                   R$ {tenis.info.valor} <br/> 
                </h2>

                <div>

                <label className='tamanho'>
                    <h3 className='titulo-number-sneaker'>Numero do seu Tenis</h3>
                    <select className='tamanho-tenis' onChange={e => alteraTamanho(e.target.value)} value={tamProduto}>
                            <option>34</option>
                            <option>35</option>
                            <option>36</option>
                            <option>37</option>
                            <option>38</option>
                            <option>39</option>
                            <option>40</option>
                            <option>41</option>
                            <option>42</option>
                            <option>43</option>
                            <option>44</option>
                            <option>45</option>
                        </select>
                </label>

                </div>

                <div className='button-carrinho'>
                    <button className='carrinho' onClick={adicionarAoCarrinho}>adicionar ao carrinho</button>
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
