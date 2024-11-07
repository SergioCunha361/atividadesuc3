class Animal{
    #nome
    #idade
    
    
    constructor (nome, idade) {
        this.#nome  = nome
        this.#idade = idade
        
    }
    get getNome(){
        return this.#nome
    }
    set setNome(nome){
        this.#nome = nome
    }
   
    get getIdade(){
        return this.#idade
    }
    set setIdade(idade){
        this.#idade = idade
    }
    emitir(){
        console.log("O som emite um som genérico")
    }
    getInfo(){
        console.log(`O nome: ${this.#nome}, idade: ${this.#idade}.`)
    }
}

module.exports = { Animal }