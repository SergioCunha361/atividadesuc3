// Questão 1: Classificação de Notas com Mensagem Personalizada
// Contexto: Um professor está utilizando um sistema para classificar as notas dos alunos e
// deseja que a função forneça uma mensagem personalizada de acordo com a nota. Questão:
// Modifique a função para que a classificação da nota seja acompanhada de uma mensagem
// personalizada. Por exemplo, se a nota for 'A', a mensagem deve ser "Sua nota é A. Excelente
// trabalho!". O objetivo é tornar o feedback mais pessoal e encorajador.

// function classificarNotas(nota){
//     if (nota === "A"){
//         return "Sua nota é A - Excelente Trabalho!"
//     }else if ( nota === "B"){
//         return "Sua nota é B - Bom Trabalho!"
//     }else if( nota === "C"){
//         return "Sua nota é C - Tabalho Razoável!"
//     }else {
//         return "Nota sem avalização"
//     }
// }
// console.log(classificarNotas("A"))
// console.log(classificarNotas("B"))
// console.log(classificarNotas("C"))
// console.log(classificarNotas("D"))

// Questão 2: Classificação com Intervalos Personalizados
// Contexto: Um professor deseja ajustar os intervalos de classificação das notas para refletir
// critérios personalizados de avaliação. Questão: Modifique a função para que a classificação da
// nota seja baseada em intervalos personalizados que o usuário define. Solicite ao usuário os
// limites superiores para as notas 'A', 'B' e 'C'. A função deve usar esses limites para determinar
// a classificação da nota.

// function classificarNota(nota, limiteA, limiteB, limiteC) {
//     if (nota >= limiteA) {
//       return 'A';
//     } else if (nota >= limiteB) {
//       return 'B';
//     } else if (nota >= limiteC) {
//       return 'C';
//     } else {
//       return 'D';
//     }
//   }
  
//   // Exemplo de uso:
//   const notaAluno = 75;
//   const limiteA = 90;
//   const limiteB = 80;
//   const limiteC = 70;
  
//   const classificacao = classificarNota(notaAluno, limiteA, limiteB, limiteC);
//   console.log(`A nota ${notaAluno} corresponde à classificação ${classificacao}.`);

// Questão 3: Classificação e Validação
// Contexto: É necessário garantir que as notas inseridas estejam dentro do intervalo válido
// antes de realizar a classificação. Questão: Atualize a função para incluir uma validação que
// verifique se a nota inserida está entre 0 e 100. Caso contrário, a função deve informar ao
// usuário que a nota é inválida e deve estar dentro do intervalo permitido.

// function classificarNota(nota, limiteA, limiteB, limiteC) {
//     if (nota <0 || nota >100 ){
//         return "Nota inválida - deve está no intervalo entre 0 e 100."
//     }
//     if (nota >= limiteA) {
//       return 'A';
//     } else if (nota >= limiteB) {
//       return 'B';
//     } else if (nota >= limiteC) {
//       return 'C';
//     } else {
//       return 'D';
//     }
//  }

//   Exemplo de uso:
//   const notaAluno = 60;
//   const limiteA = 90;
//   const limiteB = 80;
//   const limiteC = 70;
  
//   const classificacao = classificarNota(notaAluno, limiteA, limiteB, limiteC);
//   console.log(classificacao);

// // ou console.log(classificarNota(80,90,80,70))


// Questão 4: Classificação com Desempenho
// Contexto: Um professor quer fornecer um feedback adicional com base na proximidade da
// nota da mínima aprovação. Questão: Modifique a função para que o feedback sobre a nota
// inclua uma mensagem adicional caso a nota esteja próxima da nota mínima de aprovação (60).
// Por exemplo, se a nota for 55 ou mais, adicione a mensagem "Você está quase lá!" junto com a
// classificação.

// function classificarNota(nota, limiteA, limiteB, limiteC, notaMinima) {
//     if (nota <0 || nota >100 ){
//         return "Nota inválida - deve está no intervalo entre 0 e 100."
//     }
//     if (nota >= limiteA) {
//       return 'A';
//     } else if (nota >= limiteB) {
//       return 'B';
//     } else if (nota >= limiteC) {
//       return 'C';
//     } else if (nota >= notaMinima){
//       return 'D'
//     }else {    
//       return `Você está quase lá - sua nota foi ${nota} - D, só falta ${notaMinima-nota} pontos para passar.`;
//     }
//  }

// //  Exemplo de uso:
// const notaAluno = 55;
// const limiteA = 90;
// const limiteB = 80;
// const limiteC = 70;
// const notaMinima = 60;

// const classificacao = classificarNota(notaAluno, limiteA, limiteB, limiteC, notaMinima);
// console.log(classificacao);
// // ou console.log(classificarNota(55,90,80,70,60))


// Questão 5: Classificação com Sugestão de Estudo
// Contexto: Um sistema educacional precisa fornecer sugestões de estudo com base na nota
// dos alunos para ajudá-los a melhorar seu desempenho. Questão: Atualize a função para
// adicionar sugestões de estudo personalizadas para cada faixa de nota. A sugestão deve ajudar
// o aluno a entender como pode melhorar com base na sua classificação.

// function classificarNota(nota, limiteA, limiteB, limiteC, notaMinima) {
//     if (nota <0 || nota >100 ){
//         return "Nota inválida - deve está no intervalo entre 0 e 100."
//     }
//     if (nota >= limiteA) {
//       return `Você está na melhores notas A - continue assim você vai longe`;
//     } else if (nota >= limiteB) {
//       return `Você está quase lá - sua nota foi B - estude só mais um pouco`;
//     } else if (nota >= limiteC) {
//       return `A sua nota foi C - seu estudo é seu futuro - esforce-se mais`;
//     } else if (nota >= notaMinima){
//       return 'A sua nota foi D - Priorize os estudos - o reconhecimento virá`'
//     }else {    
//       return `Você está quase lá - sua nota foi ${nota} - D, só falta ${notaMinima-nota} pontos para passar.`;
//     }
//  }

// //  Exemplo de uso:
// const notaAluno = 55;
// const limiteA = 90;
// const limiteB = 80;
// const limiteC = 70;
// const notaMinima = 60;

// const classificacao = classificarNota(notaAluno, limiteA, limiteB, limiteC, notaMinima);
// console.log(classificacao);

//OU

// console.log(classificarNota(95,90,80,70,60))
// console.log(classificarNota(85,90,80,70,60))
// console.log(classificarNota(75,90,80,70,60))
// console.log(classificarNota(65,90,80,70,60))
// console.log(classificarNota(55,90,80,70,60))

// Questão 6: Classificação com Comentário Personalizado
// Contexto: Um professor deseja incluir um comentário adicional para cada nota classificada.
// Questão: Modifique a função para permitir que o usuário insira um comentário personalizado
// sobre a nota classificada. O comentário deve ser exibido junto com a classificação final da nota.


// function classificarNota(nota, limiteA, limiteB, limiteC, notaMinima) {
//     if (nota <0 || nota >100 ){
//         return "Nota inválida - deve está no intervalo entre 0 e 100."
//     }
//     if (nota >= limiteA) {
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`,'parabéns')
//       return `Você está na melhores notas A - continue assim você vai longe - ${comentario}`;
//     } else if (nota >= limiteB) {
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)
//       return `Você está quase lá - sua nota foi B - estude só mais um pouco - ${comentario}`;
//     } else if (nota >= limiteC) {
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)
//       return `A sua nota foi C - seu estudo é seu futuro - esforce-se mais - ${comentario}`;
//     } else if (nota >= notaMinima){
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)
//       return 'A sua nota foi D - Priorize os estudos - o reconhecimento virá - ${comentario}`'
//     }else {  
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)  
//       return `Você está quase lá - sua nota foi ${nota} - D, só falta ${notaMinima-nota} pontos para passar - ${comentario}`;
//     }
//  }

// //  Exemplo de uso:
// const notaAluno = 95;
// const limiteA = 90;
// const limiteB = 80;
// const limiteC = 70;
// const notaMinima = 60;

// const classificacao = classificarNota(notaAluno, limiteA, limiteB, limiteC, notaMinima);
// alert(classificacao);



// Questão 7: Classificação com Faixa de Notas
// Contexto: O sistema deve exibir a faixa de notas correspondente à nota classificada para dar
// uma visão geral do desempenho do aluno. Questão: Atualize a função para exibir a faixa de
// notas correspondente (por exemplo, "90-100", "80-89") com base na nota inserida. Isso deve
// ajudar a visualizar em que intervalo a nota se enquadra.

// function classificarNota(nota, limiteA, limiteB, limiteC, notaMinima) {
//     if (nota <0 || nota >100 ){
//         return "Nota inválida - deve está no intervalo entre 0 e 100."
//     }
//     if (nota >= limiteA) {
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`,'parabéns')
//       return `Você está na melhores notas A - continue assim você vai longe - o intervalo da nota A é entre ${limiteA} e 100 - ${comentario}`;
//     } else if (nota >= limiteB) {
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)
//       return `Você está quase lá - sua nota foi B - estude só mais um pouco - o intervalo da nota B é entre ${limiteB} e ${limiteA} - ${comentario}`;
//     } else if (nota >= limiteC) {
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)
//       return `A sua nota foi C - seu estudo é seu futuro - esforce-se mais - o intervalo da nota C é entre ${limiteC} e ${limiteB} - ${comentario}`;
//     } else if (nota >= notaMinima){
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)
//       return 'A sua nota foi D - Priorize os estudos - o reconhecimento virá - o intervalo da nota D é entre ${limiteC} e ${limiteD} - ${comentario}`'
//     }else {  
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)  
//       return `Você está quase lá - sua nota foi ${nota} - D, só falta ${notaMinima-nota} pontos para passar - ${comentario}`;
//     }
//  }

// //  Exemplo de uso:
// const notaAluno = 75;
// const limiteA = 90;
// const limiteB = 80;
// const limiteC = 70;
// const notaMinima = 60;

// const classificacao = classificarNota(notaAluno, limiteA, limiteB, limiteC, notaMinima);
// alert(classificacao);

// Questão 8: Classificação com Nota Máxima e Mínima
// Contexto: O sistema precisa mostrar a nota máxima e mínima permitida para cada faixa de
// classificação. Questão: Modifique a função para que, além da classificação, a nota máxima e
// mínima para a faixa correspondente à nota inserida sejam exibidas. Por exemplo, "Sua nota é
// A. A faixa de nota é de 91 a 100."

// function classificarNota(nota, limiteA, limiteB, limiteC, notaMinima) {
//     if (nota <0 || nota >100 ){
//         return "Nota inválida - deve está no intervalo entre 0 e 100."
//     }
//     if (nota >= limiteA) {
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`,'parabéns')
//       return `Você está na melhores notas A - continue assim você vai longe - o intervalo da nota A é entre ${limiteA} e 100 - ${comentario}`;
//     } else if (nota >= limiteB) {
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)
//       return `Você está quase lá - sua nota foi B - estude só mais um pouco - o intervalo da nota B é entre ${limiteB} e ${limiteA} - ${comentario}`;
//     } else if (nota >= limiteC) {
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)
//       return `A sua nota foi C - seu estudo é seu futuro - esforce-se mais - o intervalo da nota C é entre ${limiteC} e ${limiteB} - ${comentario}`;
//     } else if (nota >= notaMinima){
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)
//       return 'A sua nota foi D - Priorize os estudos - o reconhecimento virá - o intervalo da nota D é entre ${limiteC} e ${limiteD} - ${comentario}`'
//     }else {  
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)  
//       return `Você está quase lá - sua nota foi ${nota} - D, só falta ${notaMinima-nota} pontos para passar - ${comentario}`;
//     }
//  }

// //  Exemplo de uso:
// const notaAluno = 75;
// const limiteA = 90;
// const limiteB = 80;
// const limiteC = 70;
// const notaMinima = 60;

// const classificacao = classificarNota(notaAluno, limiteA, limiteB, limiteC, notaMinima);
// alert(classificacao);


// Questão 9: Classificação com Nota de Recuperação
// Contexto: Um sistema precisa informar se o aluno deve realizar uma prova de recuperação
// com base na nota obtida. Questão: Adicione uma lógica à função para verificar se a nota é
// inferior a 60 e, se for o caso, exiba uma mensagem adicional informando que o aluno precisa
// fazer uma prova de recuperação.

// function classificarNota(nota, limiteA, limiteB, limiteC, notaMinima) {
//     if (nota <0 || nota >100 ){
//         return "Nota inválida - deve está no intervalo entre 0 e 100."
//     }
//     if (nota >= limiteA) {
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`,'parabéns')
//       return `Você está na melhores notas A - continue assim você vai longe - o intervalo da nota A é entre ${limiteA} e 100 - ${comentario}`;
//     } else if (nota >= limiteB) {
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)
//       return `Você está quase lá - sua nota foi B - estude só mais um pouco - o intervalo da nota B é entre ${limiteB} e ${limiteA} - ${comentario}`;
//     } else if (nota >= limiteC) {
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)
//       return `A sua nota foi C - seu estudo é seu futuro - esforce-se mais - o intervalo da nota C é entre ${limiteC} e ${limiteB} - ${comentario}`;
//     } else if (nota >= notaMinima){
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)
//       return 'A sua nota foi D - Priorize os estudos - o reconhecimento virá - o intervalo da nota D é entre ${limiteC} e ${limiteD} - ${comentario}`'
//     }else {  
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)  
//       return `Você está quase lá - sua nota foi ${nota} - D, só faltou ${notaMinima-nota} pontos para passar - você vai para recuperação precisanto tirar  ${(notaMinima-nota)+notaMinima} - a média é ${notaMinima} - ${comentario}`;
//     }
//  }

// //  Exemplo de uso:
// const notaAluno = 50;
// const limiteA = 90;
// const limiteB = 80;
// const limiteC = 70;
// const notaMinima = 60;

// const classificacao = classificarNota(notaAluno, limiteA, limiteB, limiteC, notaMinima);
// alert(classificacao);


// Questão 10: Classificação com Sugestão de Melhoria
// Contexto: É importante fornecer sugestões de áreas para melhoria com base na nota do
// aluno. Questão: Atualize a função para adicionar sugestões de melhoria personalizadas com
// base na faixa de nota obtida. As sugestões devem ajudar o aluno a identificar áreas específicas
// onde ele pode melhorar seu desempenho.

// function classificarNota(nota, limiteA, limiteB, limiteC, notaMinima) {
//     if (nota <0 || nota >100 ){
//         return "Nota inválida - deve está no intervalo entre 0 e 100."
//     }
//     if (nota >= limiteA) {
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`,'parabéns')
//       return `Você está na melhores notas A - continue assim você vai longe - o intervalo da nota A é entre ${limiteA} e 100 - ${comentario}`;
//     } else if (nota >= limiteB) {
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)
//       return `Você está quase lá - sua nota foi B - estude só mais um pouco - o intervalo da nota B é entre ${limiteB} e ${limiteA} - ${comentario}`;
//     } else if (nota >= limiteC) {
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)
//       return `A sua nota foi C - seu estudo é seu futuro - esforce-se mais - o intervalo da nota C é entre ${limiteC} e ${limiteB} - ${comentario}`;
//     } else if (nota >= notaMinima){
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)
//       return 'A sua nota foi D - Priorize os estudos - o reconhecimento virá - o intervalo da nota D é entre ${limiteC} e ${limiteD} - ${comentario}`'
//     }else {  
//       let comentario = prompt(`Digite um comentário sobre a nota ${notaAluno} do aluno:`)  
//       return `Você está quase lá - sua nota foi ${nota} - D, só faltou ${notaMinima-nota} pontos para passar - você vai para recuperação precisanto tirar  ${(notaMinima-nota)+notaMinima} - a média é ${notaMinima} - ${comentario}`;
//     }
//  }

// //  Exemplo de uso:
// const notaAluno = 50;
// const limiteA = 90;
// const limiteB = 80;
// const limiteC = 70;
// const notaMinima = 60;

// const classificacao = classificarNota(notaAluno, limiteA, limiteB, limiteC, notaMinima);
// alert(classificacao);