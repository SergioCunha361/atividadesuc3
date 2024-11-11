const prompt = require ("prompt-sync")();
const { VeiculoController } = require ("../controllers/veiculoControllers");

const controller = new VeiculoController();

function iniciarSistema(){
    let opcao;
    do {
        console.log("=== Sistema de Gerenciamenteo de Veículos ===");
        console.log("1. Adicionar Veiculo")
        console.log("2. Listar Veiculo")
        console.log("3. Sair");
        opcao = prompt ("Escola uma opção: ")
        switch (opcao) {
            case "1":
               adicionarVeiculo();
               break;
            case "2":
                controller.listarVeiculo();
                break;
            default:
                console.log("Opção Inválida");

        }
    } while (opcao !== "3");
}
function adicionarVeiculo(){
    const tipo = prompt("Digite o tipo de veículo (Carro/Moto/Veículo): ");
    const marca = prompt ("Digite a marca do veículo: ");
    const ano = parseInt (prompt( "Digite o ano do veículo: "));
    const cor = prompt ("Digite a cor do veículo: ");
    const modelo = prompt ("Digite o modelo do Veículo: ") 
    controller.criarVeiculo(tipo, marca, modelo, ano, cor);

}
iniciarSistema();
