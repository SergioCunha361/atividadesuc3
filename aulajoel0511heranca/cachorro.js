const { Animal }= require ("./animal");


class Cachorro extends Animal{
        #raca
        constructor(nome, raca){
            super(nome)  // nessa linha estou acionando o método construtor da munha classe PAI
            this.#raca = raca;
        }
        emitirSom(){//   // nosso copmportamento de cachorro
            console.log(`${this.getNome}, sou uma Raça ${this.#raca} e emite um som au au`);
     }
}
module.exports = { Cachorro }