const { Veiculo } = require ("./veiculo");

class Moto extends Veiculo {
    #modelo
    #cor
    constructor (marca, ano, modelo, cor) {
        super(marca, ano);
        this.#modelo = modelo;
        this.#cor = cor;
        Object.freeze(this);
       
    }

    get getModelo(){
        return this.#modelo;
    }
    set setModelo(modelo){
        this.#modelo = modelo;
    }
    get getCor(){
        return this.#cor;
    }
    set setCor(cor){
        this.#cor = cor;
    }
    getInfo(){
        console.log(`Marca: ${this.getMarca}, Ano: ${this.getAno}, Cor: ${this.getCor}, Modelo: ${this.getModelo}.`);
    }
    calcularValor(){
    console.log(`Valor estimado da moto: R$ ${(2024 - this.getAno) * 100}`);
    }

}
module.exports = { Moto };