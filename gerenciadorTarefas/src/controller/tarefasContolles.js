const { Tarefas } = require ("../models/tarefas")
const { TarefasPessoais } = require ("../models/tarefasPessoais");
const { TarefasProssionais } = require ("../models/tarefasProfissionais")
    );
//const { bancoVeiculos } = ("../config/banco")  ///
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
    buscarId(indice){
        if (bancoVeiculos.length >= indice-1){
                return true
        } else {
            return false
        }
    }
    editarVeiculo(indice, novosDados){
        
            const novoVeiculo = bancoVeiculos[indice -1];
            if (novosDados.marca){ 
                novoVeiculo.setMarca = novosDados.marca
            }
            if (novosDados.ano){ 
                novoVeiculo.setAno = novosDados.ano
            }
            if (novosDados.modelo){ 
                novoVeiculo.setModelo  = novosDados.modelo 
            }
            if (novosDados.cor){ 
                novoVeiculo.setCor = novosDados.cor
            }
            console.log("Veículo atualizado com sucesso!!");
            novoVeiculo.getInfo();
            bancoVeiculos[indice-1] = novoVeiculo;        
    }
}
module.exports = { VeiculoController };