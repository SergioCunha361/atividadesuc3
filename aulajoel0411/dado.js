// Definindo a classe Produto
class Dado {
    #dado
    

    constructor( ) {
        this.#dado = Math.floor(Math.random() * 6) + 1;;
        Object.freeze(this);
    }
   
    get getDado() {
        return this.#dado;
    }

    set setDado(dado) {
        this.dado = dado;
    }

}
module.exports = { Dado };