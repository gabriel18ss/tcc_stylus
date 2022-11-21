export async function ValidarCompra (info) {
       
    if (info.cartao.nome == undefined || info.cartao.nome == '') {
        throw new Error('Nome do cartão obrigatório!');
    }

    if (info.cartao.numero == undefined || info.cartao.numero == '') {
        throw new Error('Numero do cartão obrigatório!');
    }

    if (info.cartao.vencimento == undefined || info.cartao.vencimento == '') {
        throw new Error('Data de Vencimento!');
    }

    if (info.cartao.codSeguranca == undefined || info.cartao.codSeguranca == '') {
        throw new Error('Código do cartão obrigatório!');
    }

    if (info.cartao.parcelas == undefined || info.cartao.parcelas == '') {
        throw new Error('Quantidade de Parcelas!');
    }
    
}