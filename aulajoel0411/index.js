const prompt = require('prompt-sync')();
const { Jogador } = require('./jogador');
const { Dado } = require('./dado');
const { SisAzar } = require('./sisAzar');

function  escolherNumero(){
    const numero = new numero();
    while (true){
        const nome = prompt("Digite o nome do produto(ou 'sair' para finalizar");
        if (nome.toLowerCase()==="sair") break;
        const preco = parseFloat(prompt("Digite o preço do produto"));
        if(isNaN(preco) || preco <= 0) {
            console.log("Preço inválido. Tente Novamente");
            continue;
        }
        const pedido = new Pedido();
        pedido.adicionarProduto(nome, preco);
        pedido.adicionarProduto(produto);
        console.log(`Produto "${produto.getNome}" adicionado com sucesso!`)
    }
    pedido.mostrarPedido();
} 
adcionarProdutosAoPedido();





