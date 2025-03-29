// No TypeScript, é possível especificar os tipos dos parâmetros e do valor de retorno das funções, garantindo maior segurança e previsibilidade no código.​

function somar(a: number, b: number): number {
  return a + b;
}

// Para definir um parâmetro como opcional, utiliza-se o símbolo ? após o nome do parâmetro. Já para atribuir um valor padrão, basta utilizar o operador de atribuição =.​
function saudar(nome: string, saudacao?: string): string {
  return `${saudacao || "Olá"}, ${nome}!`;
}

console.log(saudar("Carlos")); // Olá, Carlos!
console.log(saudar("Ana", "Bom dia")); // Bom dia, Ana!

// Funções anônimas são funções sem nome, frequentemente atribuídas a variáveis. As arrow functions oferecem uma sintaxe mais concisa para escrever funções anônimas.
const multiplicar = function (x: number, y: number): number {
  return x * y;
};

const dividir = (x: number, y: number): number => x / y;

// No TypeScript, é possível definir a estrutura de um objeto especificando os tipos de suas propriedades.​
const produto: { nome: string; preco: number; disponivel: boolean } = {
  nome: "Notebook",
  preco: 2500,
  disponivel: true,
};

// Objetos podem conter funções como propriedades, permitindo encapsular comportamentos relacionados ao objeto.​

const calculadora = {
  somar: (a: number, b: number): number => a + b,
  subtrair: (a: number, b: number): number => a - b,
};

console.log(calculadora.somar(5, 3)); // 8
console.log(calculadora.subtrair(5, 3)); // 2

// Crie uma função que recebe um objeto representando um pedido e calcula o total. O objeto deve conter uma lista de itens, cada um com nome, quantidade e precoUnitario.​

type ItemPedido = {
  nome: string;
  quantidade: number;
  precoUnitario: number;
};

function calcularTotal(pedido: ItemPedido[]): number {
  return pedido.reduce(
    (total, item) => total + item.quantidade * item.precoUnitario,
    0
  );
}

const meuPedido: ItemPedido[] = [
  { nome: "Teclado", quantidade: 2, precoUnitario: 150 },
  { nome: "Mouse", quantidade: 1, precoUnitario: 100 },
];

console.log(calcularTotal(meuPedido)); // 400

// Interfaces e Tipos Personalizados:

// ​No TypeScript, extensibilidade refere-se à capacidade de ampliar tipos ou interfaces existentes para criar novas estruturas que herdam propriedades e comportamentos. Isso promove a reutilização de código e facilita a manutenção, especialmente em sistemas complexos.​
interface Pessoa {
  nome: string;
  idade: number;
}

interface Funcionario extends Pessoa {
  cargo: string;
  salario: number;
}

const colaborador: Funcionario = {
  nome: "Ana",
  idade: 28,
  cargo: "Desenvolvedora",
  salario: 5000,
};

// Embora os type aliases não suportem a extensão direta como as interfaces, é possível combinar múltiplos tipos usando interseções com o operador &.​

type Localizacao = {
  cidade: string;
  estado: string;
};

type Empresa = {
  nomeEmpresa: string;
  setor: string;
};

type Filial = Localizacao & Empresa;

const unidade: Filial = {
  cidade: "São Paulo",
  estado: "SP",
  nomeEmpresa: "Tech Solutions",
  setor: "TI",
};

// Classes podem implementar interfaces para garantir que seguem um determinado contrato.

interface Forma {
  calcularArea(): number;
}

class Retangulo implements Forma {
  constructor(private largura: number, private altura: number) {}

  calcularArea(): number {
    return this.largura * this.altura;
  }
}

const meuRetangulo = new Retangulo(5, 3);
console.log(meuRetangulo.calcularArea()); // 15

// Crie uma interface Carro com uma propriedade modelo (string) e um método ligar() que não recebe parâmetros e não retorna nada. Em seguida, implemente essa interface em uma classe Sedan.​

interface Carro {
  modelo: string;
  ligar(): void;
}

class Sedan implements Carro {
  constructor(public modelo: string) {}

  ligar(): void {
    console.log(`${this.modelo} está ligado.`);
  }
}

const meuCarro = new Sedan("Toyota Corolla");
meuCarro.ligar(); // Toyota Corolla está ligado.
