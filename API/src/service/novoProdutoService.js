import randomString from 'randomstring';


export function criarNotaFiscal() {
    return randomString.generate(11);
}


export function lerValorFrete(frete) {
    if (frete === 'Normal')
        return 10.0;
    else
        return 25.0;
}


export function criarNovoPedido(idUsuario, info) {
    
    let agora = new Date();
    let valorFrete = lerValorFrete(info.frete);
    let notaFiscal = criarNotaFiscal();

    return {
        idUsuario: idUsuario,
        idEndereco: info.idEndereco,
        data: agora,
        notaFiscal: notaFiscal,
        tipoFrete: info.frete,
        valorFrete: valorFrete,
        status: 'Confirmando Pagamento',
        tipoPagamento: 'Cartão'
    }
}