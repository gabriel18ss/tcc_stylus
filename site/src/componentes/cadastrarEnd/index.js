import './index.scss';

export default function CardEndereco({ item: {ID, RUA, CEP, CIDADE, BAIRRO, ESTADO, COMPLEMENTO,NUMERO },selecionar, selecionado}){
    return(
        <div className='info-end' onClick={() => selecionar(ID)} style={{ borderColor: selecionado ? '#df5656':'black' }}>
                <h3 className='titulo-paga'>Endereço </h3>
                <div className='end'>{RUA}, {NUMERO} - {COMPLEMENTO}</div>
                <div className='cep'>{CEP} - {BAIRRO}, {CIDADE}/{ESTADO}</div>
        </div>
    )
}