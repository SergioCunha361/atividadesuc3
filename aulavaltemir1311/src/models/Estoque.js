const Estoque = require ("./Notebooks")

class Estoque {
   
     constructor (quantidade, produto) {        
         this.quantidade = quantidade;
         this.produto = produto;
             
     }    
 }
 module.exports = { Estoque }