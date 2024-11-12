const { Veiculo } = require ("../models/veiculo")
const { Carro } = require ("../models/carro");
const { Moto } = require ("../models/moto");
const bancoVeiculos = [];

class VeiculoController{
    criarVeiculo(tipo, marca, ano, modelo, cor) {
        let veiculo;
        if (tipo.toLowerCase() ===  "carro") {
            veiculo = new Carro(marca, ano, modelo, cor);

        } else if (tipo.toLowerCase() === "moto"){ 
            veiculo = new Moto(marca, ano, modelo, cor);

        } else if (tipo.toLowerCase() === "veiculo"){ 
            veiculo = new Veiculo(marca, ano);

        } else {
            console.log("Tipo de Veículo inválido")
            return;
        }
        bancoVeiculos.push(veiculo);
        
        console.log("Veículo cadastrado com sucesso !!!");
        
    }
    listarVeiculo(){
        if (bancoVeiculos.length > 0 ) {
            console.log("=== Veículos Registrados ===");
            bancoVeiculos.forEach((veiculo, index) => {
            console.log(`${index + 1}`)
            veiculo.getInfo();
            veiculo.calcularValor();
            })
          
        } else {
            console.log("Nenhum veículo resgistrado!")
        }
    }

}
module.exports = { VeiculoController };