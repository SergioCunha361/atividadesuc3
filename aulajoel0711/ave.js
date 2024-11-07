const { Animal }= require ("./animal");


class  Ave extends Animal{
        #tipoBico
        #capacidadeVoo
        constructor(nome, idade, tipoBico, capacidadeVoo) {
            super(nome, idade)  // nessa linha estou acionando o método construtor da munha classe PAI
            this.#tipoBico = tipoBico;
            this.#capacidadeVoo = capacidadeVoo;

        }
        get getTipoBico(){
            return this.#tipoBico
        }
        set setTipoBico(tipoBico){
            this.#tipoBico = tipoBico
        }
       
        get getCapacidadeVoo(){
            return this.#capacidadeVoo
        }
        set setCapacidadeVoo(capaciddeVoo){
            this.#capacidadeVoo = capaciddeVoo
        }
        emitirSom(){//   // nosso copmportamento de cachorro
            console.log("A ave canta ou pia");
        }
        getInfo(){//   // nosso copmportamento de cachorro
            console.log(`Nome: ${this.getNome}, Idade: ${this.getIdade}, Tipo de Bico: ${this.getTipoBico} , Capacidade Voo: ${this.getCapacidadeVoo}`);
     }
}
module.exports = { Ave };