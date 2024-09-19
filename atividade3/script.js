// Atividade 1: Verificação de Idade
// Contexto: João é o organizador de uma festa e precisa verificar se as pessoas que entram têm
// 18 anos ou mais.
// Questão: Crie uma função que, dada uma lista de idades, use um loop for para verificar se
// todas as pessoas têm 18 anos ou mais. Se sim, retorne "Todos podem entrar". Se não, retorne
// "Alguém não pode entrar".

// let listaConvidados = [18, 19, 30, 12, 50, 16];
// let idadeMenor = 0;
// for (let i = 0; i < listaConvidados.length; i++){
//     if (listaConvidados[i] < 18) {
//         idadeMenor = idadeMenor + 1;
//     }
// }
// if (idadeMenor > 0){
//    console.log(`De todos os ${listaConvidados.length} covidados, ${idadeMenor} não podem entrar, são menores de 18 anos.`);
// } else {
//    console.log(`Todos os ${listaConvidados.length} convidados podem entrar, são maiores de 18 anos.`)
// }




// Atividade 2: Contador de Números Pares
// Contexto: Maria quer contar quantos números pares existem entre 1 e 50.
// Questão: Crie uma função que use um loop while para contar quantos números pares
// existem entre 1 e 50. Retorne esse número.

// let par = o;
// let par = 0;
// let impar = 0;
// let i = 1;
// while (i <= 50) {
//   if (i % 2 == 0){
//       par = par + 1;
//   } else { 
//       impar = impar +1;
//   }  
//   i++;
// }
// console.log(`Entre 1 e 50 existem ${par} números pares.`);
// console.log(`Entre 1 e 50 existem ${impar} números ímpares.`);

// Atividade 3: Classificação de Cores
// Contexto: Ana precisa categorizar cores de acordo com sua intensidade.
// Questão: Use switch case para classificar uma cor baseada em um número de 1 a 3. Se 1,
// classifique como "Cor Clara". Se 2, "Cor Média". Se 3, "Cor Escura". Qualquer outro número
// deve retornar "Cor Desconhecida".

// function classificarCor(numero) {
//   switch (numero) {
//     case 1:
//       return "Cor Clara";
//     case 2:
//       return "Cor Média";
//     case 3:
//       return "Cor Escura";
//     default:
//       return "Cor Desconhecida";
//   }
// }

// console.log(classificarCor(1)); // Saída: Cor Clara
// console.log(classificarCor(2)); // Saída: Cor Média
// console.log(classificarCor(3)); // Saída: Cor Escura
// console.log(classificarCor(5)); // Saída: Cor Desconhecida


// Atividade 4: Validação de Senha
// Contexto: Carla precisa validar a segurança de senhas inseridas por usuários.
// Questão: Crie uma função que use switch case para validar uma senha. Se a senha tiver
// menos de 8 caracteres, retorne "Senha Fraca". Se tiver entre 8 e 12 caracteres, retorne "Senha
// Média". Se tiver mais de 12, retorne "Senha Forte".

// function classificarSenha(senha) {
//   const tamanho = senha.length;
//   switch (truenh) {
//     case (tamao > 12):
//       return "Senha Forte";
//     case (tamanho >= 8 && tamanho <= 12):
//       return "Senha Média";
//     default:
//       return "Senha Fraca";
//    }
// }
// console.log(classificarSenha("a1rgohyldrga1")); // Saída: Senha Forte
// console.log(classificarSenha("drot2e582")); // Saída: Senha Média
// console.log(classificarSenha("r63d9")); // Saída: Senha Fraca



// Atividade 5: Classificação de Notas
// Contexto: Isabela quer classificar notas escolares de acordo com a pontuação.
// Questão: Use switch case para classificar uma nota de 0 a 100. Se a nota for maior que 90,
// classifique como "A". Se entre 80 e 89, "B". Se entre 70 e 79, "C". Se entre 60 e 69, "D". Se
// menor que 60, "F".

// function classificarNotas(nota) {
//   switch (true) {
//     case (nota > 90):
//       return "nota A";
//     case (nota >= 80 && nota <= 89):
//       return "nota B";
//     case (nota >= 70 && nota <= 79):
//       return "nota C";
//         case (nota >= 60 && nota <= 69):
//       return "nota D";      
//     default:
//       return "Nota F";
//    }
// }
// console.log(classificarNotas(95)); // Saída: Nota A
// console.log(classificarNotas(65)); // Saída: Nota D
// console.log(classificarNotas(55)); // Saída: Nota F


// Atividade 6: FizzBuzz Avançado
// Contexto: Gabriel quer criar uma versão avançada do FizzBuzz.
// Questão: Crie uma função que use um loop for para percorrer de 1 a 100. Se o número for
// divisível por 2, 3 e 5, imprima "FizzBuzzBoom". Se for divisível por 2 e 3, imprima "FizzBuzz".
// Se for divisível por 3 e 5, imprima "BuzzBoom". Se for divisível por 2 e 5, imprima "FizzBoom".
// Se for divisível apenas por 2, 3, ou 5, imprima "Fizz", "Buzz", ou "Boom", respectivamente.
// Caso contrário, imprima o número.


//for (let i=1; i <= 100; i++){
//   if (i % 30 === 0){
//     console.log('FizzBuzzBoom');
//   } else if (i % 15 === 0){
//     console.log('BuzzBomm');
//   } else if (i % 10 === 0){
//     console.log('FizzBoom');
//   } else if (i % 6 === 0){
//     console.log('FizzBuzz')
//   } else if (i % 2 === 0){
//     console.log('Fizz');
//   } else if (i % 3 === 0){
//     console.log('Buzz');
//   } else if (i % 5 === 0){
//     console.log('Boom');
//   } else {
//     console.log(i);
//   }
// }
