import './index.scss';

export default function CardEndereco({ item: {RUA, CEP, CIDADE, BAIRRO, ESTADO, COMPLEMENTO,NUMERO,  }}){
    return(
        <div className='info-end'>
                        <h3 className='titulo-paga'>Endereço </h3>
                <div className='end'>{RUA}, {NUMERO} - {COMPLEMENTO}</div>
                <div className='cep'>{CEP} - {BAIRRO}, {CIDADE}/{ESTADO}</div>
        </div>
    )
}