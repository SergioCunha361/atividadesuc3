// let unitPrice = 10;
// let pieces = prompt("How many pieces do you order?", 0);
// if (pieces > 0) {
//     let total = unitPrice * pieces;
//     console.log(total);
// }
// console.log(total); // -> Uncaught ReferenceError: total is not defined

let confirmarExclusao = confirm("Tem certeza que deseja excluir este item?");

if (confirmarExclusao) {
    // Se o usuário clicar em "OK", execute a exclusão
    alert("Item excluído com sucesso!");
} else {
    // Se o usuário clicar em "Cancelar", exiba uma mensagem
    alert("Exclusão cancelada.");
}