// Definindo a classe Produto
class Jogador {
    #nome
    #aposta

    constructor(nome, aposta) {
        this.#nome = nome;
        this.#aposta = aposta;
        Object.freeze(this);
    }

    get getNome() {
        return this.#nome;
    }

    set setNome(nome) {
        this.#nome = nome;
    }

    get getAposta() {
        return this.#aposta;
    }

    set setAposta(aposta) {
        this.#aposta = aposta;
    }
}
module.exports = { Jogador };


// let jogador01= new Jogador("joel", 4);
// console.log("O jogador",jogador01.getNome, "apostou no nº",jogador01.getAposta)