const { Tarefas } = require ('../models/tarefa');
    

class TarefasPessoais extends Tarefas {
    #prioridade;
    #data;

    constructor (descricao, prioridade, data, status){
        super(descricao, status);
        this.#prioridade = prioridade;
        this.#data = data;
        Object.freeze(this);
    }
    get getPrioridade(){
        return this.#prioridade;
    }
    get getData(){
        return this.#data;
    }
    set setPrioridade(prioridade){
        this.#prioridade = prioridade;
    }
    set setData(data){
        this.#data = data;
    }
    getInfo(){
        console.log(Prioridade: ${this.getPrioridade} Data: ${this.getData});
    }
}
module.exports = { TarefasPessoais }