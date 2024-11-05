const prompt = require ("prompt-sync")()
const { Dado } = require ("./dado");
const { Jogador } = require ("./jogador");
const { sistemaAzar } = require("./sistemaAzar");

function executar(){
     console.log("Bem-vindo ao Sistama Azar 1.0");
     let novoTurno = ""
do {
    const nome = prompt("Qual o nome do jogador: ");
    const aposta = parseInt(prompt("Digite um valor de 1 a 6: "));
    const lance = new Dado();
    const jogador01 = new Jogador(nome, aposta);
    const tigrinho = new sistemaAzar(lance, jogador01);
    tigrinho.verificarGanhador();
    novoTurno = prompt("Digite N para sair e qualquer tecla para continuar!");
} while(novoTurno.toUpperCase  === "N");
console.log("Até logo");

}
executar();
