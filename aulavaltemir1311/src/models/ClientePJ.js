const { Cliente } = require("./Cliente")

class ClientePJ extends Cliente {
    #cnpj
     constructor (nome, dataNascimento, telefone, email, cnpj) {
        super(nome, dataNascimento, telefone, email)
         this.#cnpj = cnpj;
             
     }
 
    
     get getCNPJ(){
         return this.#cnpj;
     }
     set setCPJ(cpj){
         this.#cnpj = cnpj;
     }
    
 
 
 }
 module.exports = { ClientePJ }