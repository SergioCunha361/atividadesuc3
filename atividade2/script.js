// Atividade 1: Sistema de Avaliação de Desempenho
// Contexto: João é gerente de uma empresa e precisa avaliar o desempenho dos funcionários
// baseado nas vendas mensais e na pontualidade.
// Questão: Se as vendas mensais forem maiores que 100.000 e a pontualidade for maior que
// 95%, o desempenho é "Excelente". Se as vendas forem entre 50.000 e 100.000 e a
// pontualidade entre 85% e 95%, o desempenho é "Bom". Se as vendas forem menores que
// 50.000 ou a pontualidade menor que 85%, o desempenho é "Regular".

// let vendasMensais = parseFloat(prompt('Digite o valor das vendas: '));
// let pontualidade = parseInt(prompt('Digite a pontualidade: '));
// switch (true){
//     case(vendasMensais > 100000 && pontualidade > 95):
//         alert('Desmpenho Excelente');
//         break;
//     case ((vendasMensais >= 50000 && vendasMensais <= 100000) && (pontualidade >= 85 && pontualidade <= 95)):
//         alert('Desempenho Bom');
//         break;
//     case (vendasMensais < 50000 || pontualidade < 85):
//         alert('Desempenho Regular');
//         break;
//     default:
//         alert(' ');
// }

//---------- ou  ---------- 
//   function verificarDesempenho(vendasMensais, pontualidade) {
//     if (vendasMensais > 100000 && pontualidade > 95) {
//            console.log("Desempenho Excelente.");
//     } else if ((vendasMensais >= 50000 && vendasMensais <= 100000) && (pontualidade >= 85 && pontualidade <= 95)) {
//            console.log("Desempenho Bom.");
//     } else if (vendasMensais < 50000 || pontualidade < 85){
//            console.log('Desempenho Regular');
//     } else {
//            console.log("Dados fora dos paremetros de avaliação");
//     }
//   }
//   verificarDesempenho(60000, 96);

// Contexto: Maria trabalha em uma universidade e precisa aprovar bolsas de estudo baseadas
// no desempenho acadêmico e na renda familiar.
// Questão: Se a média acadêmica for maior que 8.5 e a renda familiar menor que 3000, aprovar
// bolsa "Integral". Se a média for entre 7 e 8.5 e a renda entre 3000 e 6000, aprovar bolsa
// "Parcial". Se a média for menor que 7 ou a renda maior que 6000, não aprovar bolsa.

//   function aprovarBolsa(desempenho, rendaFamiliar) {
//     if (desempenho > 8.5 && rendaFamiliar < 3000) {
//            console.log("Bolsa Integral");
//     } else if ((desempenho >= 7 && desempenho <= 8.5) && (rendaFamiliar >= 3000 && rendaFamiliar <= 6000)) {
//            console.log("Bolsa Parcial.");
//     } else if (desempenho < 7 || rendaFamiliar > 6000){
//            console.log('Bolsa Reprovada');
//     } else {
//            console.log("Dados fora dos paremetros de avaliação");
//     }
//   }
//   aprovarBolsa(7, 4000);

// Atividade 3: Sistema de Avaliação de Risco de Saúde
// Contexto: Pedro é um médico que precisa avaliar o risco de saúde dos pacientes baseado no
// IMC e na idade.
// Questão: Se o IMC for maior que 30 e a idade maior que 60, o risco é "Alto". Se o IMC for
// entre 25 e 30 e a idade entre 45 e 60, o risco é "Médio". Se o IMC for menor que 25 ou a idade
// menor que 45, o risco é "Baixo".

// function avaliacaoRisco(imc, idade) {
//     if (imc > 30 && idade < 60) {
//            console.log("Risco Alto");
//     } else if ((imc >= 25 && imc <= 30) && (idade >= 45 && idade <= 60)) {
//            console.log("Risco Medio.");
//     } else if (imc < 25 || idade < 45){
//            console.log("Risco Baixo");
//     } 
//   }
//   avaliacaoRisco(35, 70);

// Atividade 4: Sistema de Classificação de Crédito
// Contexto: Ana trabalha em uma instituição financeira e precisa classificar clientes para
// concessão de crédito baseado na renda anual e no histórico de pagamentos.
// Questão: Se a renda anual for maior que 100.000 e o histórico de pagamentos for "Excelente",
// o crédito é "Prime". Se a renda for entre 50.000 e 100.000 e o histórico for "Bom", o crédito é
// "Padrão". Se a renda for menor que 50.000 ou o histórico for "Ruim", o crédito é "Restrito".

// function classificarClientes(rendaAnual, pagamentos) {
//     if (rendaAnual > 100000 && pagamentos === 'Excelente') {
//            console.log("Crédito Prime");
//     } else if ((rendaAnual >= 50000 && rendaAnual <= 100000) && (pagamentos === 'Bom')) {
//            console.log("Crédito Padrão");
//     } else if (rendaAnual < 50000 || pagamentos === 'Ruim'){
//            console.log("Crédito Restrito");
//     } 
//   }
//   classificarClientes(50000, 'Ruim');



// Atividade 5: Sistema de Classificação de Produtos
// Contexto: Lucas trabalha em um supermercado e precisa classificar os produtos baseados no
// preço e na demanda.
// Questão: Se o preço for maior que 100 e a demanda maior que 500 unidades por mês,
// classificar como "Produto Premium". Se o preço for entre 50 e 100 e a demanda entre 200 e
// 500 unidades, classificar como "Produto Padrão". Se o preço for menor que 50 ou a demanda
// menor que 200 unidades, classificar como "Produto Econômico".

// function classificarProdutos(preco, demanda) {
//     if (preco > 100 && demanda > 500) {
//            console.log("Produto Premium");
//     } else if ((preco >= 50 && preco <= 100) && (demanda >= 200 && demanda <=500)) {
//            console.log("Produto Padrão");
//     } else if (preco < 50 || demanda < 200){
//            console.log("Produto Econômico");
//     } 
//   }
//   classificarProdutos(101, 501);
// Atividade 6: Sistema de Seleção de Candidatos
// Contexto: Eduardo trabalha em uma empresa de recrutamento e precisa selecionar candidatos
// baseados na experiência e na formação acadêmica.
// Questão: Se a experiência for maior que 10 anos e a formação acadêmica for "Doutorado",
// selecionar para "Posição Sênior". Se a experiência for entre 5 e 10 anos e a formação for
// "Mestrado", selecionar para "Posição Plena". Se a experiência for menor que 5 anos ou a
// formação for "Graduação", selecionar para "Posição Júnior".


// function selecionarCandidatos(experiencia, formacao) {
//     if (experiencia > 10 && formacao === 'Doutorado') {
//            console.log("Posição Sênior");
//     } else if ((experiencia >= 5 && experiencia <= 10) && (formacao === 'Mestrado')) {
//            console.log("Posição Plena");
//     } else if (experiencia < 5 || formacao === 'Graduação'){
//            console.log("Posição Junior");
//     } 
//   }
//   selecionarCandidatos(11, 'Doutorado');


// Atividade 7: Sistema de Avaliação de Fornecedores
// Contexto: Carla trabalha em uma empresa de manufatura e precisa avaliar fornecedores
// baseados na qualidade dos produtos e no prazo de entrega.
// Questão: Se a qualidade for "Excelente" e o prazo de entrega for menor que 5 dias, classificar
// como "Fornecedor A". Se a qualidade for "Boa" e o prazo de entrega entre 5 e 10 dias,
// classificar como "Fornecedor B". Se a qualidade for "Regular" ou o prazo de entrega maior que
// 10 dias, classificar como "Fornecedor C".

// function avaliarFornecedores(qualidadeProduto, prazoEntrega) {
//     if (qualidadeProduto === 'Excelente' && prazoEntrega < 5) {
//            console.log("Fornecedor A");
//     } else if ((qualidadeProduto === 'Boa') && (prazoEntrega >= 5 || prazoEntrega <= 10)) {
//            console.log("Fornecedor B");
//     } else if (qualidadeProduto === ' Regular' || prazoEntrega > 10){
//            console.log("Fornecedor C");
//     } 
//   }
//   avaliarFornecedores('Excelente', 4);


// Atividade 8: Sistema de Classificação de Projetos
// Contexto: Felipe trabalha em uma empresa de tecnologia e precisa classificar projetos
// baseados no orçamento e na complexidade.
// Questão: Se o orçamento for maior que 1.000.000 e a complexidade for "Alta", classificar como
// "Projeto Estratégico". Se o orçamento for entre 500.000 e 1.000.000 e a complexidade for
// "Média", classificar como "Projeto Importante". Se o orçamento for menor que 500.000 ou a
// complexidade for "Baixa", classificar como "Projeto Secundário".

// function classificarProjetos(orcamento, complexidade) {
//     if (orcamento > 1000000 && complexidade === 'Alta') {
//            console.log("Projeto Estratégico");
//     } else if ((orcamento >= 500000 && orcamento <= 1000000) && (complexidade === 'Média')) {
//            console.log("Projeto Importante");
//     } else if (orcamento < 500000 || classificarProjetos === 'Baixa'){
//            console.log("Projeto Secundário");
//     } 
//   }
//   classificarProjetos(1000001,'Alta');
// Atividade 9: Sistema de Avaliação de Cursos
// Contexto: Beatriz trabalha em uma universidade e precisa avaliar cursos baseados na
// avaliação dos alunos e na taxa de conclusão.
// Questão: Se a avaliação dos alunos for maior que 4.5 e a taxa de conclusão for maior que
// 90%, classificar como "Curso Excelente". Se a avaliação for entre 3.5 e 4.5 e a taxa de
// conclusão entre 75% e 90%, classificar como "Curso Bom". Se a avaliação for menor que 3.5
// ou a taxa de conclusão menor que 75%, classificar como "Curso Regular".

// function avaliarCursos(avaliacaoaluno, taxaConclusao) {
//     if (avaliacaoaluno > 4.5 && taxaConclusao > 90) {
//            console.log("Curso Excelente");
//     } else if ((avaliacaoaluno >= 3.5 && avaliacaoaluno <= 4.5) && (taxaConclusao >=75  &&taxaConclusao <= 90)) {
//            console.log("Curso Bom");
//     } else if (avaliacaoaluno < 3.5 || taxaConclusao < 75){
//            console.log("Curso Regular");
//     } 
//   }
//   avaliarCursos(5 , 91);

// Atividade 10: Sistema de Classificação de Filmes
// Contexto: Lucas trabalha em uma plataforma de streaming e precisa classificar filmes
// baseados na avaliação dos usuários e no número de visualizações.
// Questão: Se a avaliação dos usuários for maior que 4.5 e o número de visualizações maior
// que 1.000.000, classificar como "Filme Blockbuster". Se a avaliação for entre 3.5 e 4.5 e o
// número de visualizações entre 500.000 e 1.000.000, classificar como "Filme Popular". Se a
// avaliação for menor que 3.5 ou o número de visualizações menor que 500.000, classificar como
// "Filme Nicho".


// function classificarFilmes(avaliacaoUsuario, visualizacoes) {
//     if (avaliacaoUsuario > 4.5 && visualizacoes > 1000000) {
//            console.log("Filme Blockbuster");
//     } else if ((avaliacaoUsuario >= 3.5 && avaliacaoUsuario <= 4.5) && (visualizacoes >= 500000  && visualizacoes <= 1000000)) {
//            console.log("Filme Popular");
//     } else if (avaliacaoUsuario < 3.5 || visualizacoes < 500000){
//            console.log("Filme Nicho");
//     } 
//   }
//   classificarFilmes(5 , 1000001);