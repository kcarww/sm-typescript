class Animal {
    nome: string;
    constructor(nome: string) {
      this.nome = nome;
    }
}
  
const a = new Animal('Cachorro');
  
if (a instanceof Animal) {
console.log(`${a.nome} é um Animal`);
}

  
