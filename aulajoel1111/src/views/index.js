const prompt = require ("prompt-sync")();
const { VeiculoController } = require ("../controllers/veiculoControllers");

const controller = new VeiculoController();

function iniciarSistema(){
    let opcao;
    do {
        console.log("=== Sistema de Gerenciamenteo de Veículos ===");
        console.log("1. Adicionar Veiculo")
        console.log("2. Listar Veiculo")
        console.log("3. Editar Veiculo")
        console.log("4. Excluir Veiculo")
        console.log("0. Sair");
        opcao = prompt ("Escola uma opção: ")
        switch (opcao) {
            case "1":
               adicionarVeiculo();
               break;
            case "2":
                controller.listarVeiculo();
                break;
            case "3":
                editarVeiculo();
                break;
            case "4":
                excluirVeiculo();
                break;
            case "0":
                    console.log("Saindo do sistema ...");
                    break;   
            default:
                console.log("Opção Inválida");
        }
    } while (opcao !== "0");
}
function adicionarVeiculo(){
    const tipo = prompt("Digite o tipo de veículo (Carro/Moto/Veículo): ");
    const marca = prompt ("Digite a marca do veículo: ");
    const ano = parseInt(prompt( "Digite o ano do veículo: "));
    const cor = prompt ("Digite a cor do veículo: ");
    const modelo = prompt ("Digite o modelo do Veículo: ") 
    controller.criarVeiculo(tipo, marca, ano, modelo, cor);
}


function editarVeiculo(){
    controller.listarVeiculo();
    
    const indice = parseInt(prompt("Digite o indice que você deseja editar: "))
    const result = controller.buscarId(indice);
    if (result){
        console.log("Informe so novos dados (pressione enter para manter o valor atual");
        const marca = prompt("Nova Marca: ")
        const ano = parseInt(prompt("Novo ano: "));
        const modelo = prompt("Novo modelo");
        const cor = prompt("Nova cor: ");
        const novosDados = {};
        if (marca) novosDados.marca = marca;
        if (ano) novosDados.ano = ano;
        if (modelo) novosDados.modelo = modelo;
        if(cor) novosDados.cor = cor;
        controller.editarVeiculo(indice, novosDados);
    } else {
        console.log("informe um indice válido")
    }
}
//incluida a funcao editar veiculo --ver indice -1
// function excluirVeiculo(){
//         controller.listarVeiculo();      
//         const indice = parseInt(prompt("Digite o indice que você deseja editar: "))
//         const result = controller.buscarId(indice-1);
//         if (result){
//             const conf = prompt("Confirma exclusão S/N ?");
//             if (conf.toUpperCase === "S"){
//                 bancoVeiculos.splice(indice-1, 1);
//                 controller.listarVeiculo(); 
//                 return
//             }
//         } else {
//             console.log("informe um indice válido")
//         }
            
// }
iniciarSistema();

