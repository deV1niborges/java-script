// Exemplo 5 = some os valores dados uma coleção de dados "idades"
// [15,46,75,34,23],imprima na tela a soma deste valores.

let idades = [15, 46, 75, 34, 23]; // Metódo for
let total = 0;

for (var i = 0; i < idades.length; i++) {
  total += idades[i];
}

console.log(total);

let idades2 = [15, 46, 75, 34, 23]; // Metódo reduce
let total2 = idades2.reduce(function (accumulator, value) {
  return accumulator + value;
}, 0);

console.log(total2);

// Variáveis e tipos de dados: Escreva um programa que declare duas variáveis, “nome” e “idade”,
// e as imprima em um console em uma frase que diga “Olá, meu nome é [nome] e eu tenho [idade] anos”.

let nome = "Raul";
let idade = 19;

console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`);

// Operadores: Crie um programa que solicite ao usuário dois números e exiba o resultado da soma,
// subtração, multiplicação e divisão desses números.

function salvarDados() {
  // Obtém os valores dos inputs

  const campo = parseFloat(document.getElementById("numero").value);
  const campo2 = parseFloat(document.getElementById("numero2").value);

  // Realiza as operações

  const soma = campo + campo2;
  const subtracao = campo - campo2;
  const multiplicacao = campo * campo2;

  let divisao;
  if (campo2 !== 0) {
    divisao = campo / campo2;
  } else {
    divisao = "Não é possível dividir por zero.";
  }

  const resultados = document.getElementById("resultados");
  resultados.innerHTML =
    "Soma: " +
    soma +
    "<br>" +
    "Subtração: " +
    subtracao +
    "<br>" +
    "Multiplicação: " +
    multiplicacao +
    "<br>" +
    "Divisão: " +
    divisao;

  // Verifica se o valor do input está vazio

  const inputValor1 = document.getElementById("numero").value;
  const inputValor2 = document.getElementById("numero2").value;

  if (inputValor1.trim() === "" || inputValor2.trim() === "") {
    alert("Por favor, preencha o campo.");
  }

  // Limpa o conteúdo do input

  const inputValue1 = document.getElementById("numero");
  const inputValue2 = document.getElementById("numero2");

  inputValue1.value = "";
  inputValue2.value = "";
}

// Escreva um programa que pergunte ao usuário sua idade
// e imprima se ele é maior ou menor de idade.

let idade1 = 17;

if (idade1 >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// Variáveis e Operadores:
// Declare duas variáveis, a e b, e atribua valores a elas.
// Em seguida, crie uma terceira variável, soma, que recebe a soma de a e b.

const a = 9;
const b = 10;

const result = a + b;

console.log(result);

// Condicionais:
// Escreva um programa que verifica se um número é positivo, negativo ou zero.
// Use condicionais (if, else).

const numero = 1;

if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}

// Loops:
// Crie um loop que imprima os números de 1 a 10 no console.

for (let l = 1; l < 11; l++) {
  console.log(l);
  // process.stdout.write(i + " ")  Utilizando process.stdout.write para imprimir na mesma linha
}

// Arrays:
// Declare um array com pelo menos 5 frutas.
// Em seguida, crie um loop que imprima cada elemento do array.

const frutas = ["Melão", "Banana", "Abacaxi", "Pessêgo", "Abacate"];

for (let k = 0; k < frutas.length; k++) {
  console.log(frutas[k]);
}

// Funções:
// Escreva uma função que receba dois parâmetros e retorne a soma deles.

function parametro(a, b) {
  return a + b;
}

let somar = parametro(6, 4);
console.log(somar);

// Objetos:
// Crie um objeto que represente um livro com propriedades como título,
// autor e número de páginas.

const obj = {
  titulo:
    "A Sutil Arte de Ligar o F*da-Se: Uma estratégia inusitada para uma vida melhor",
  autor: "Mark Manson",
  numerodePaginas: 224,
};

console.log("Titulo:" + " " + obj.titulo);

console.log("Autor:" + " " + obj.autor);

console.log("Número de Páginas:" + " " + obj.numerodePaginas);

// Manipulação de Strings:
// Crie uma string e exiba seu comprimento no console.

const str = "Olá, Vinicius";

console.log("Comprimento da string:", str.length);

/* Manipulação de DOM:
// Crie uma página HTML simples com um botão.
// Use JavaScript para exibir uma mensagem no console quando o botão for clicado.

const click = document.getElementById("item").addEventListener("click", function() {
    console.log("Botão clicado!")
 })

// Eventos:
// Adicione um evento de clique a um botão que altera a cor de fundo de uma caixa.

const evento = document.getElementById("inter").addEventListener("click", function() {
    const novaCor = document.getElementById("fala")
    novaCor.style.backgroundColor = "green"
    novaCor.style.color = "white"
}) 
*/

// Transforme Graus Kelvin para Graus Celsius

function paraCelsius() {
  let transform = tk - 273.15;
  return transform;
}

let tk = 315.15;

console.log(
  tk + " graus Kelvin é igual a: " + paraCelsius() + " graus celsius"
);
