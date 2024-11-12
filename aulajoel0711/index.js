const { Animal } = require ("./animal");
const { Mamifero } = require ("./mamifero");
const { Ave } = require ("./ave")


// let a1 = new Animal ("joel");
// let c1 = new Cachorro ("joelison", "SRD")

// a1.emitirSom();
// c1.emitirSom();
// console.log(c1.getNome); //importou getNome do pai animal já que nao tinha no  cachorro.
let a1 = new Animal("Sérgio" , 59)
let m1= new Mamifero("Gabriel", 18, "branco", "Cidade")
let ave1 = new Ave("Penguim",5,"grande","Não voo")

a1.getInfo()
m1.getInfo()
ave1.getInfo()

ave1.emitir()