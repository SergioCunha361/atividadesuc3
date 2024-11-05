const { Animal }= require ("./animal");


class Cachorro extends Animal{
        #raca
        constructor(raca){
            super()
            this.#raca = raca;
        }
        emitirSom(){
            console.log(`${this.#nome} faz um au au`);
            
        }




}