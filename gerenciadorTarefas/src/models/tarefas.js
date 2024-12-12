

class Tarefas {
    #descricao
    #status = "Não finalizado"

    constructor (descricao, status) {
        this.#descricao = descricao;
        this.#status = status;
       
    }

    get getDescricao(){
        return this.#descricao;
    }
    set setDescricao(descricao){
        this.#descricao = descricao;
    }
    get getStatus(){
        return this.#status;
    }
 
    getInfo(){
        console.log(`Tarefa: ${this.getDescricao}, Concluída: ${this.getStatus}`);
    }


}
module.exports = { Tarefas };