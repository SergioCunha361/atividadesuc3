const { Animal } = require ("./animal");
const { Cachorro } = require ("./cachorro");


let a1 = new Animal ("joel");
let c1 = new Cachorro ("joelison", "SRD")

a1.emitirSom();
c1.emitirSom();
console.log(c1.getNome); //importou getNome do pai animal já que nao tinha no  cachorro.