class Animal{
    #nome
    
    
    constructor (nome) {
        this.#nome  = nome
        
    }
    get getNome(){
        return this.#nome
    }
    emitirSom(){
        console.log(`${this.#nome} emite um som!`)
    }
    get getNome(){
        return this.#nome
    }
    set setNome(nome){
        this.#nome = nome
    }
}
module.exports = { Animal }