class Cliente {
   #telefone
    
    constructor (nome, dataNascimento, telefone, email) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.#telefone = telefone;
        this.email = email       
    }

   
    get getTelefone(){
        return this.#telefone;
    }
    set setTelefone(telefone){
        this.#telefone = telefone;
    }

}
module.exports = { Cliente }