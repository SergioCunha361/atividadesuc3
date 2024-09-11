// // QUESTÃO 2 Um professor deseja ajustar os intervalos de classificação das notas para refletir
// // critérios personalizados de avaliação. Questão: Modifique a função para que a classificação da
// // nota seja baseada em intervalos personalizados que o usuário define. Solicite ao usuário os
// // limites superiores para as notas 'A', 'B' e 'C'. A função deve usar esses limites para determinar
// // a classificação da nota.

// // function classifcaçãoNota() {
// //     const nota = parseInt(prompt("Digite a nota do aluno (0 a 100"));
// //     const intervaloA = parseInt(prompt("Digite o limite superior para nota 100"))
// //     const intervaloB = parseInt(prompt("digite o limite superior para nota 90"))
// //     const intervaloC = parseInt(prompt("digite o limite superior para nota 80"))
    
// //     let resultado
// //     if (nota > intervaloA){
// //         resultado = "A"
// //     }else if (nota > intervaloB){
// //         resultado = "B"
// //     }else if (nota > intervaloC){
// //         resultado = "C"
// //     }else if (nota>=60){
// //         resultado = "D"
// //     }else {
// //         resultado = "F"
// //     }
// //     alert (`Sua nota é ${resultado}`)
// // }
// // classifcaçãoNota() 

// // QUESTÃO 3 : É necessário garantir que as notas inseridas estejam dentro do intervalo válido
// // antes de realizar a classificação. Questão: Atualize a função para incluir uma validação que
// // verifique se a nota inserida está entre 0 e 100. Caso contrário, a função deve informar ao
// // usuário que a nota é inválida e deve estar dentro do intervalo permitido.
// // function classifcaçãoNotas() {
// //     const nota = parseInt(prompt("Digite a nota do aluno (0 a 100"));
// //     const intervaloA = parseInt(prompt("Digite o limite superior para nota 100"))
// //     const intervaloB = parseInt(prompt("digite o limite superior para nota 90"))
// //     const intervaloC = parseInt(prompt("digite o limite superior para nota 80"))
    
// //     let resultado
// //     if (nota > intervaloA){
// //         resultado = "A"
// //     }else if (nota > intervaloB){
// //         resultado = "B"
// //     }else if (nota > intervaloC){
// //         resultado = "C"
// //     }else if (nota>=60){
// //         resultado = "D"
// //     }else if (nota>=0){
// //         resultado = "E"    
// //     }else {
// //         resultado = " F ,Nota inválida"
// //     }
// //     alert (`Sua nota é ${resultado}`)
// // }
// // classifcaçãoNotas()

// // QUESTÃO 4 : Um professor quer fornecer um feedback adicional com base na proximidade da
// // nota da mínima aprovação. Questão: Modifique a função para que o feedback sobre a nota
// // inclua uma mensagem adicional caso a nota esteja próxima da nota mínima de aprovação (60).
// // Por exemplo, se a nota for 55 ou mais, adicione a mensagem "Você está quase lá!" junto com a
// // classificação.

// // function avaliarFeedback() {
// //     const nota = parseInt(prompt("Digite a nota 0 a 100"))
// //     let resultado
// //     if (nota >=0 && nota<55){
// //         resultado = "Reprovado"
// //     }else if (nota >=55 && nota <60){
// //         resultado = "Você está quase lá"
// //     }else if (nota>=60 && nota < 100){
// //         resultado = "Aprovado"
// //     }
// //     alert (`Sua nota é ${resultado}`)
// // }  
// // avaliarFeedback()

// // QUESTÃO 5 Questão: Atualize a função para
// // adicionar sugestões de estudo personalizadas para cada faixa de nota. A sugestão deve ajudar
// // o aluno a entender como pode melhorar com base na sua classificação

// // function fornecerSugestao(nota) {
// //     let sugestao;
    
// //     if (nota >= 90) {
// //         sugestao = "Ótimo trabalho! Continue revisando os tópicos avançados e explore materiais desafiadores.";
// //     } else if (nota >= 80) {
// //         sugestao = "Muito bom! Foque em revisar conceitos avançados e pratique questões mais complexas.";
// //     } else if (nota >= 70) {
// //         sugestao = "Bom trabalho, mas há espaço para melhorar e pratique mais exercícios.";
// //     } else if (nota >= 60) {
// //         sugestao = "Você está quase lá! Revise os conceitos"
// //     } else {
// //         sugestao = "Você precisa de mais prática. Estude os conceitos básicos novamente"
// //     }
    
// //     alert(sugestao); 
// // }
// // const notaDoAluno = 85;
// // fornecerSugestao(notaDoAluno);

// // QUESTÃO 6 Modifique a função para permitir que o usuário insira um comentário personalizado
// // sobre a nota classificada. O comentário deve ser exibido junto com a classificação final da nota.

// // function fornecerSugestaoComComentario(nota) {
// //     let sugestao;

// //     if (nota >= 90) {
// //         sugestao = "Ótimo trabalho! Continue revisando os tópicos avançados"
// //     } else if (nota >= 80) {
// //         sugestao = "Muito bom! Foque em revisar conceitos avançados e pratique questões mais complexas.";
// //     } else if (nota >= 70) {
// //         sugestao = "Bom trabalho, mas há espaço para melhorar. Revise os conceitos básicos e pratique mais exercícios.";
// //     } else if (nota >= 60) {
// //         sugestao = "Você está quase lá! Revise os conceitos fundamentais e procure ajuda em áreas que não entende bem.";
// //     } else {
// //         sugestao = "Você precisa de mais prática. Estude os conceitos básicos novamente e busque ajuda para entender melhor o material.";
// //     }

// //     const comentario = prompt("Digite um comentário sobre a sua nota:");
// //     const mensagem = (`Sugestão para sua nota de ${nota}`)
    
// //     alert(mensagem);
// // }
// // const notaDoAluno = parseFloat(prompt("Digite sua nota:"));
// // fornecerSugestaoComComentario(notaDoAluno);

// // QUESTÃO 7 Atualize a função para exibir a faixa de
// // notas correspondente (por exemplo, "90-100", "80-89") com base na nota inserida. Isso deve
// // ajudar a visualizar em que intervalo a nota se enquadra.
// ;

// //------------------------------------------------------------------------
// // Questão 1: Manipulação de Arrays e Condicionais
// // 1. Crie um array frutas com os valores ["maçã", "banana", "laranja"].
// // 2. Utilize o método push para adicionar a fruta "uva" ao final do array.
// // 3. Utilize o método shift para remover o primeiro item do array.
// // 4. Crie uma função verificarFruta que receba um nome de fruta e verifique se ela
// // está no array frutas. Utilize if e else para retornar "Fruta encontrada" ou "Fruta não
// // encontrada".
// // 5. Exiba o resultado da função verificarFruta para o nome "banana".
// let frutas = ['maçã', 'banana', 'laranja'];
// frutas.push('uva');
// frutas.shift();
// console.log(frutas)
// function verificarFruta(nome){
//     if (frutas.includes(nome)){
//         return"fruta encontrada"
//     }else{
//         return "Fruta não encontrada"
//     }}
// console.log(verificarFruta("banana"))// devolve o que esta escrito no return fruta encontrada 

// //-------------------------------------------------------------------------
//  // Questão 2: Funções e Operadores Lógicos
// // 1. Crie uma função calcular que receba três parâmetros: a, b, e operacao. O
// // parâmetro operacao pode ser "soma", "subtracao", "multiplicacao" ou "divisao".
// // 2. Utilize if, else if, e else para realizar a operação correspondente e retornar o
// // resultado.
// // 3. Exiba o resultado das operações "soma" e "divisao" para os valores 10 e 2.

// function calcular (a, b, operacao){
//     if (a == 10 && b ==2){
//        return(`A soma de ${a} e ${b} é igual a ${a + b} e a divisão de ${a} e ${b} é igual a ${a / b}.`)
//     }else if (operacao == 'soma'){            
//        return(`A soma de ${a} e ${b} é igual a ${a + b}`);
//     }else if (operacao == 'subtracao'){
//        return(`A subtracao de ${a} e ${b} é igual a ${a - b}`);
//     }else if (operacao == 'multiplicacao'){
//        return(`A multiplicao de ${a} e ${b} é igual a ${a * b}`);
//     }else if (operacao == 'divisao' && ( a == 0 || b == 0)){
//        return("operacão não reconecida divisor = 0");
//     }else{      
//         return(`A divisao de ${a} por ${b} é igual a ${a / b}`);                     
//     }
// }console.log(calcular (10, 3, 'multiplicacao'));

// // Questão 3: Manipulação de Arrays e Laços(({}))
// // 1. Crie um array numeros com os valores [1, 2, 3, 4, 5].
// // 2. Utilize um for para adicionar 5 a cada elemento do array e armazene os resultados em
// // um novo array numerosAumentados.
// // 3. Exiba o array numerosAumentados no console.
// let valores = [1, 2, 3, 4, 5];
// for (let i = 0; i < valores.length; i++){
//       valores.splice(i, 1, valores[i]+5);
// }
// console.log(valores);

// //outra maneira  de fazer

// let valores = [1, 2, 3, 4, 5];
// let valoresAumentados = [];
// for (let i = 0; i < valores.length; i++){
//       valoresAumentados.push(valores[i]+5);
// }
// console.log(valoresAumentados);


// // Questão 4: Funções e Switch Case
// // 1. Crie uma função classificarNota que receba uma nota (número de 0 a 10) e utilize
// // switch case para retornar "Aprovado" para notas 7 e acima e "Reprovado" para notas
// // abaixo de 7.
// // 2. Exiba o resultado para a nota 8 e para a nota 5.
// function classificarNota(nota) {
//     switch (true){
//         case (nota >= 7):
//             return('Aprovado');
//         case (nota >5 ):
//             return('Recuperação');
//         default:
//             return('Reprovado');
//         }
// }
// console.log('Nota 8:' + classificarNota(8));//Aprovado
// console.log('Nota 6:' + classificarNota(6));//Recuperação
// console.log('Nota 5:' + classificarNota(5));//Reprovado

// // Questão 5: Funções e Condicionais com Arrays
// // 1. Crie um array numeros com os valores [5, 10, 15, 20].
// // 2. Crie uma função verificarNumero que receba um número e retorne "Menor que 10"
// // se o número for menor que 10, "Entre 10 e 20" se o número estiver entre 10 e 20, e
// // "Maior que 20" se for maior que 20.
// // 3. Utilize um for para percorrer o array numeros e exibir a classificação de cada número
// // utilizando a função verificarNumero.

// let valores = [5, 10, 15, 30];
// function verificarNumero(num) {
//     if (num <10) {
//         return 'número menor que 10'
//     }else if (num >= 10 && num <=20){
//         return('número entre 10 e 20')
//     }else{ 
//         return('número maior que 20');
//     }
// }
// console.log(verificarNumero(30));
// for (let i =0; i < valores.length; i++){
//     console.log(`O ${i}º da array é ${valores[i]} que é `+ verificarNumero(valores[i]));
// };

// // Questão 6: Condicionais e Operadores Aritméticos
// // 1. Crie uma variável idade e atribua um valor.
// // 2. Utilize if para verificar se a idade é maior ou igual a 18 e menor que 65. Se for o caso,
// // exiba "Adulto" no console. Caso contrário, exiba "Não adulto".
// // 3. Utilize um operador ternário para realizar a mesma verificação e exiba o resultado no
// // console.

// let idade = 64
// if (idade >= 18 && idade < 65){
//    console.log('Adulto');
// }else{ 
//     console.log('Não adulto');
// }
// let idadeAdulto = (idade >=18 && idade < 65)? "Adulto" : "Nao Adulto"
// console.log(idadeAdulto); 



// // Questão 7: FizzBuzz Simples
// // 1. Crie uma função fizzBuzz que receba um número n e retorne um array com os
// // números de 1 a n, substituindo múltiplos de 3 por "Fizz" e múltiplos de 5 por "Buzz".
// // Para múltiplos de ambos, use "FizzBuzz".
// // 2. Utilize um loop for para construir o array e if e else para verificar as condições.
// const matriz = [];
// function fizzBuzz(n){
//     for (let i = 1; i <= n; i++){
//         if (i % 15 === 0){
//             matriz.push('FizzBuzz');
//         }else if (i % 3 ===  0){
//             matriz.push('Fizz');
//         }else if (i % 5 === 0){
//             matriz.push('Buzz');
//         }else{
//             matriz.push(i);
//         }   
//     }
//     return matriz;
// }
// console.log(fizzBuzz(20));

// // Questão 8: Manipulação de Arrays com Splice e Length
// // 1. Crie um array tarefas com os valores ["estudar", "limpar", "comprar"].
// // 2. Utilize splice para adicionar "exercitar" na segunda posição do array e remover o item
// // na terceira posição.
// // 3. Exiba o tamanho do array e o array final no console.

// let valores = ['estudar', 'limpar', 'comprar']
// valores.splice(2,0, 'exercitar');
// console.log('O novo array incluindo exercitar fica ['+ valores + ']')
// valores.splice(3,1);
// console.log('O novo array excluindo a 3ª posição fica ['+ valores + ']');

// // Questão 9: Operadores Aritméticos e Funções
// // 1. Crie uma função calcularMedia que receba duas notas e retorne a média dessas
// // notas.
// // 2. Utilize a função para calcular a média das notas 7 e 9 e exiba o resultado no console.

// function mediaNotas(n1, n2){;
//     return (n1 + n2) / 2;
// }
// console.log(mediaNotas(11, 9));

// // Questão 10: Manipulação de Arrays e Laços
// // 1. Crie um array valores com os valores [5, 10, 15, 20].
// // 2. Utilize um while para dividir cada valor por 2 e armazenar os resultados em um novo
// // array valoresDivididos.
// // 3. Exiba o array valoresDivididos no console.
// let i =0;
// let valores = [5, 10, 15, 20];
// while (i < valores.length){
//     valores.splice(i, 1,valores[i]/2);
//     i++;
// }
// console.log('Os novos valores do array são : [' + valores + ']');

// // Questão 11: Operadores Aritméticos e Condicionais
// // 1. Solicite ao usuário dois números através de prompt e armazene-os em variáveis.
// // 2. Crie uma função compararSoma que receba os dois números, calcule a soma e retorne
// // uma mensagem se a soma é maior que 20 ou não.
// // 3. Exiba a mensagem com alert.
// let n1 = parseInt(prompt('Digite o primeiro número: '));
// let n2 = parseInt(prompt('Digite o segundo número: '));
// function compararSoma(n1, n2){
//     let soma = n1 + n2;
//         return soma > 20? 'Soma maior que  20' : 'Soma menor ou igual a 20';
// }
// alert(compararSoma(n1, n2));

// // Questão 12: Laços e Operadores Booleanos
// // 1. Solicite ao usuário um número através de prompt e crie um array numeros com todos
// // os números de 1 até o número fornecido manualmente.
// // 2. Utilize um for para percorrer o array e exiba com alert se cada número até o número
// // digitado é múltiplo de 3.
// let matriz = [];
// let n1 = parseInt(prompt('Digite um número: '));
// for (let i = 1; i <= n1; i++){
//     matriz.push(i);
// }
// for (let i=0; i < matriz.length; i++){
//     if (matriz[i] % 3 === 0){
//         alert(`o número ${matriz[i]} é mútiplo de 3.`);
//     } 
// }
// alert('o array final é [' + matriz + ']');

// // Questão 13: Números e Seus Quadrados
// // 1.Solicite ao usuário um número através de prompt e crie um array numeros com todos os
// // números de 1 até o número fornecido.
// // 2.Use um for para percorrer o array e exiba com alert o número e seu quadrado.
// let matriz = [];
// let n1 = parseInt(prompt('Digite um número: '));
// for (let i = 1; i <= n1; i++){
//     matriz.push(i);
// }
// for (let i=0; i < matriz.length; i++){
//     alert(`o quadrado do número ${matriz[i]} é ${matriz[i] * matriz[i]}.`);
//  }
// // Questão 14: Funções e Condicionais
// // 1. Crie uma função verificarValor que receba um número fornecido pelo usuário
// // através de prompt e determine se ele é positivo, negativo ou zero.
// // 2. Exiba o resultado usando alert.
// let n1 = parseInt(prompt('Digite um número: '));
// function verificarValor(n1){
//     if (n1 < 0) {
//         alert('Número negativo');
//     }else if (n1 === 0) {
//         alert('Número igual a zero')
//     }else {
//         alert('Número positivo');
//     }
// }
// console.log(verificarValor(n1));

// // Questão 15: Números Pares e Ímpares
// // 1.Solicite ao usuário um número através de prompt e crie um array numeros com todos os
// // números de 1 até o número fornecido.
// // 2.Use um for para percorrer o array e exiba com alert se cada número é par ou ímpar.
// let matriz = [];
// let n1 = parseInt(prompt('Digite um número: '));
// for (let i = 1; i <= n1; i++){
//     matriz.push(i);
// }
// for (let i=0; i < matriz.length; i++){
//     if (matriz[i] % 2 === 0){
//         alert(`o número ${matriz[i]} é par.`);
//     }else {
//         alert(`o número ${matriz[i]} é impar.`);
//         } 
//     }
// alert('o array formado é [' + matriz + ']');
// // Questão 16: Funções e Operadores Aritméticos
// // 1. Solicite ao usuário dois números e uma operação matemática (soma, subtração,
// // multiplicação ou divisão) através de prompt.
// // 2. Crie uma função operacaoMatematica que realize a operação matemática
// // correspondente.
// // 3. Exiba o resultado com alert.

// let a = parseInt(prompt('Digite um número inteiro: '));
// let b = parseInt(prompt('Digite outro número inteiro: '));
// let operacao = parseInt(prompt('Digite 1 para soma  -  2 para subtração - 3 para mutiplicação  - 4 para divisão.'));
// if (operacao == 1){
//        let soma = a + b;
//         alert(`A soma de ${a} e ${b} é igual a ${soma}`);
//     }else if (operacao == 2){
//         let subtracao = a - b;
//         alert(`A  subtracao de ${a} e ${b} é igual a ${subtracao}`);
//     }else if (operacao == 3){
//         let multiplicacao = a * b;
//         alert(`A multiplicação de ${a} e ${b} é igual a ${multiplicacao}`);
//     }else if (operacao == 4){
//         let divisao = a / b;
//         alert(`A divisão de ${a} e ${b} é igual a ${divisao}`);
// }

// // Questão 17: Funções e Condicionais
// // 1.Solicite ao usuário um número através de prompt e crie uma função
// // verificarParidade que determine se o número é par ou ímpar.
// // // 2. Exiba o resultado com alert.
// function verificarParidade(numero) {
//     if (numero % 2 === 0) {
//       return "par";
//     } else {
//       return "ímpar";
//     }
//   }  
//   const numero = parseInt(prompt("Digite um número:"));  
//   const resultado = verificarParidade(numero);  //  Chama a função e exibe o resultado
//   alert(`O número ${numero} é ${resultado}.`);
 


// // Questão 18: Laços e Condicionais
// // 1. Solicite ao usuário um número através de prompt e crie um array numeros com todos
// // os números de 1 até o número fornecido.
// // 2. Use um for para percorrer o array e exiba com alert se cada número é maior que 10.

// let matriz = [];
// let n1 = parseInt(prompt('Digite um número: '));
// for (let i = 1; i <= n1; i++){
//     matriz.push(i);
// }
// for (let i=0; i < matriz.length; i++){
//     if (matriz[i] > 10){
//         alert(`o número ${matriz[i]} é maior que 10.`);
//     }
// }
// alert('o array ´formado é [' + matriz + ']');

let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 50);
if (pieces > 0) {
    let total = unitPrice * pieces;
    console.log(total);
}
console.log(total); // -> Uncaught ReferenceError: total is not defined
