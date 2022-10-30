import './index.scss';
import Barra from '../../componentes/barra'; 

import { useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,  toast } from 'react-toastify';
import LoadingBar  from 'react-top-loading-bar'
import { listaEndereco } from '../../api/usuarioApi';
import CardEndereco from '../../componentes/cadastrarEnd';
import storage, { set } from 'local-storage'

import { buscarPorId } from '../../api/produtoApi';
import { salvarNovoPedido } from '../../api/pedidoApi';

export default function TelaPagamento(){
    const [itens, setItens] = useState([]);
    const [endereco, setEndereco] = useState([]);

    const [frete, setFrete] = useState('');
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [cvv, setCvv] = useState('');
    const [tipo, setTipo] = useState(''); 
    const [parcelas, setParcelas] = useState(''); 
    const [idEndereco, setIdEndereco] = useState(); 

    const navigate = useNavigate();
    const ref = useRef();  


    

    async function carregarEnderecos(){
        const id = storage('cliente-logado').ID;
        const r = await listaEndereco(id);
        setEndereco(r)
    }


    async function clickNewEnd(){
        try{
            setTimeout(() => {
                navigate('/usuario/cadastrar/endereco')
             }, 3000);
        } catch (err){
            toast.error(err.message);
        }
    }


    async function carregarItens() {
        let carrinho = storage('carrinho');
        if (carrinho) {

            let temp = [];  

            for (let tenis of carrinho) {
               let p = await buscarPorId(tenis.ID);

               temp.push({
                    tenis: p,
                    qtd: tenis.qtd
               })
            }
            setItens(temp);
        }

    }

    function calcularTotal(){
        let total = 0;
        for(let item of itens){
            total = total + item.qtd * item.tenis.info.valor;
        }
        return total;
    }

   async function salvarPedido(){
    
    try{
        let produtos = storage('carrinho');
        let ID = storage('cliente-logado').ID;
    
        let pedido =
    { 
        frete:frete,
        idEndereco:idEndereco,
        tipoPagamento: 'Cartão',
        cartao: {
          nome:nome,
          numero:numero,
          vencimento:vencimento,
          codSeguranca:cvv,
          parcelas:parcelas,
          formaPagamento:tipo
        },
        produtos: produtos
      }

      const r = await salvarNovoPedido(ID, pedido);
      toast.dark('Pedido foi inserido com sucesso');
      storage('carrinho', []);
      navigate('/');
   }
   catch(err){
     toast.error(err.response.data.erro);
   }
    
   }
    useEffect(()=> {
        carregarEnderecos();
        carregarItens();
      
    })

    return(
        <section className='page-pagamento'>
              <LoadingBar color='#f11946' ref={ref} />   
            <Barra/>
            <h1 className='titulo-pag'>pagamento</h1>
            <div>Total: R$ {calcularTotal()}</div>
             

              <div className='display-pagamento'>
                  <div className='end'>
                  {endereco.map(item =>
                       <CardEndereco item={item} selecionar={setIdEndereco} selecionado={item.ID == idEndereco}/>
                    )}
                  </div>

                    <div className='info-cartão'>
                        <div className='Cred-input'>
                         número do cartão<input className='input-pag' type='text' value={numero} onChange={e => setNumero(e.target.value)} ></input>
                         Crédito <select className='input-pag2' type='text' value={tipo} onChange={e => setTipo(e.target.value)}>
                            <option disabled hidden selected>Selecione</option>
                            <option>Crédito</option>
                            <option>Débito</option>
                        </select>
                        </div>

                        <div className='Cred-input'>
                        validade<input className='input-pag' type='text' value={vencimento} onChange={e => setVencimento(e.target.value)}></input>
                        cvv<input className='input-pag2' type='text' value={cvv} onChange={e => setCvv(e.target.value)}></input>
                        </div>
                        
                        nome do cartão<input className='input-pag' type='text' value={nome} onChange={e => setNome(e.target.value)}></input>
                      

                        Parcelas<select className='input-pag' type='text' value={parcelas} onChange={e => setParcelas(e.target.value)}>
                            <option disabled hidden selected>Selecione</option>
                            <option value={1}>01x à Vista</option>
                            <option value={1}>01x sem Juros</option>
                            <option value={2}>02x sem Juros</option>
                            <option value={3}>03x sem Juros</option>
                           
                        </select>
                        Frete<select  className='input-pag' value={frete} onChange={e => setFrete(e.target.value)}  >
                                        <option disabled hidden selected>Selecione</option>
                                        <option value={'Normal'}>Normal - R$ 10,00</option>
                                        <option value={'Sedex'}>Sedex - R$ 25,00</option>
                            </select>
                    </div>

                    <div className='info-pedido'>
                        <h3>Pedido</h3>

                        <h3>Valor Total</h3>

                        <h3>Forma de pagamento</h3>


                    </div>
              </div>

              <div className='botoens'>
                <button className='botao-pag' onClick={salvarPedido}>Continuar</button>
                <button onClick={clickNewEnd} className='botao-pag-end'>Novo Endereço</button>
              </div>

             
                {itens.map(item =>
                <div className='informacoes-pedidos'>
                    itens
                    <hr className='linha-01'/>
        
                        <div className='pedidos-usuario'>
                            <div className=''>
                                <h1>  {item.tenis.info.NOME }</h1>
                                <h1>{item.tenis.info.GENERO }</h1>
                            </div>
                            <div>
                                <h1>{item.tenis.info.valor}</h1>
                                <h1>{item.qtd }</h1>
                            </div>
                        </div>
               </div>
                )}
                
              
        </section>
    )
                }
