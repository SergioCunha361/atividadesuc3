const { Animal } = require ("./animal");


class Mamifero extends Animal{
        #tipoPelo
        #habitat
        constructor(nome, idade, tipoPelo, habitat) {
            super(nome, idade)  // nessa linha estou acionando o método construtor da munha classe PAI
            this.#tipoPelo = tipoPelo;
            this.#habitat = habitat;

        }
        get getTipoPelo(){
            return this.#tipoPelo
        }
        set setTipoPelo(tipoPelo){
            this.#tipoPelo = tipoPelo
        }
       
        get getHabitat(){
            return this.#habitat
        }
        set setHabitat(habitat){
            this.#habitat = habitat
        }
        emitirSom(){//   // nosso copmportamento de cachorro
            console.log("O mamífero ruge ou grunhe");
        }
        getInfo(){//   // nosso copmportamento de cachorro
            console.log(`Nome: ${this.getNome}, Idade: ${this.getIdade}, Tipo de Pelo: ${this.getTipoPelo} , Habitat: ${this.getHabitat}`);
     }
}
module.exports = { Mamifero };