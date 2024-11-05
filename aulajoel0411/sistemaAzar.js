const { Dado } = require ("./dado");
const { Jogador } = require ("./jogador");

class sistemaAzar{
    #dado;
    #jogador;

    constructor (dado, jogador){
            if (dado instanceof Dado && jogador instanceof Jogador){ //tipo de dados no caso numerico dado na funcçao Dado
            this.#dado = dado;
            this.#jogador = jogador;
        } else {
        console.log("Erro: o jogador e/ou dados não são válidos!");
        }
        Object.freeze(this);
    }
get getDado(){
    return this.#dado;
}
set setDado(dado){
    this.#dado= dado;
}
get getJogador(){
    return this.#jogador
}
    set setJogador(jogador){
        this.#jogador = jogador;
}
   

        verificarGanhador(){
            if (this.#dado.getFace === this.#jogador.getAposta){
                console.log("acertou")
            } else {
                console.log("Errou -- a resposta certa é:", this.#dado.getFace, "sua aposta foi", this.#jogador.getAposta)
            }
        }

    };
    
module.exports = { sistemaAzar };   