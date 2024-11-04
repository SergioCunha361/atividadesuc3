//*****      30/10/2024    *******

// class Conta {
//     #saldo;
//     constructor(saldoInicial) {
//         this.#saldo = saldoInicial
//         //Object.freezer(this)
//     }
//     depositar(valor) {
//         if (valor > 0) {
//             this.#saldo += valor;
//         }
//     }
//     sacar(valor) {
//         if (valor > 0 && valor <= this.#saldo) {
//             this.#saldo -= valor

//         }

//     }
//     get getSaldo() {
//         return this.#saldo;
//     } 

// }
// const c1 = new Conta(500)
// c1.depositar(500)
// console.log(c1.getSaldo)
// c1.sacar(100)
// console.log(c1.getSaldo)


// c1.saldo = 50000
// console.log(c1.saldo)

//========================================================================================================

// class Produto {
//     constructor(nome, preco) {
//         this.#nome = nome;
//         this.#preco = preco;
//     }

//     getInfoProduto() {
//         return `Produto: ${this.nome} - Preço: R$ ${this.preco.toFixed(2)}`;
//     }
// }

// class Pedido {
//     constructor() {
//         this.produtos = [];
//     }

//     adicionarProduto(produto) {
//         this.produtos.push(produto);
//     }

//     calcularTotal() {
//         return this.produtos.reduce((total, produto) => total + produto.preco, 0);
//     }

//     mostrarPedido() {
//         console.log("Detalhes do Pedido:");
//         this.produtos.forEach((produto, index) => {
//             console.log(`${index + 1}. ${produto.getInfoProduto()}`);
//         });
//         console.log(`Total: R$ ${this.calcularTotal().toFixed(2)}`);
//     }
// }
// const p1 = new Produto("bola", 10)
// const p2 = new Produto("camisa", 30.50)
// const p3= new Produto("tenis", 155.30)
// const p4 = new Produto("calão", 40)
// console.log(getInfoProduto())
//console.log(p1.mostrarPedido)

// c1.saldo = 50000
// console.log(c1.saldo)