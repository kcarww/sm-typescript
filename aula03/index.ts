// Construtor

class Pessoa {
  constructor(public nome: string, public idade: number) {}

  apresentar(): void {
    console.log(`Olá, sou ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const p2 = new Pessoa("Ana", 25);
p2.apresentar();

class Conta {
  public nome: string;
  private saldo: number;

  constructor(nome: string, saldoInicial: number) {
    this.nome = nome;
    this.saldo = saldoInicial;
  }

  verSaldo(): void {
    console.log(`${this.nome} tem R$${this.saldo}`);
  }
}

const conta = new Conta("Carlos", 1000);
conta.verSaldo(); // OK
// conta.saldo = 0; ❌ Erro: saldo é privado

class Animal {
  falar(): void {
    console.log("Som genérico");
  }
}

class Gato extends Animal {
  falar(): void {
    console.log("Miau");
  }
}

const pet: Animal = new Gato();
pet.falar(); // "Miau" — polimorfismo em ação



interface Autenticavel {
  login(usuario: string, senha: string): boolean;
}

class Sistema implements Autenticavel {
  login(usuario: string, senha: string): boolean {
    return usuario === "admin" && senha === "123";
  }
}

