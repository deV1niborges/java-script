// Exemplo 5 = some os valores dados uma coleção de dados "idades" 
// [15,46,75,34,23],imprima na tela a soma deste valores. 


let idades = [15,46,75,34,23]  // Metódo for
let total = 0

for(var i = 0; i < idades.length; i++) {
    total += idades[i]
}

console.log(total)

let idades2 = [15,46,75,34,23]  // Metódo reduce
let total2 =  idades2.reduce(function(accumulator,value){
    return accumulator + value
},0) 

console.log(total2)

// Variáveis e tipos de dados: Escreva um programa que declare duas variáveis, “nome” e “idade”,
// e as imprima em um console em uma frase que diga “Olá, meu nome é [nome] e eu tenho [idade] anos”.

let nome = "Raul"
let idade = 19

console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`)

// Operadores: Crie um programa que solicite ao usuário dois números e exiba o resultado da soma,
// subtração, multiplicação e divisão desses números.

/*Solicita ao usuário dois números
var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número:"));

// Realiza as operações
var soma = numero1 + numero2;
var subtracao = numero1 - numero2;
var multiplicacao = numero1 * numero2;

// Verifica se o segundo número é diferente de zero antes de realizar a divisão
var divisao;
if (numero2 !== 0) {
    divisao = numero1 / numero2;
} else {
    divisao = "Não é possível dividir por zero.";
}

// Exibe os resultados
alert("Soma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao);
*/

// Escreva um programa que pergunte ao usuário sua idade 
// e imprima se ele é maior ou menor de idade.

let idade1 = 19

if(idade1 >= 18) {
    console.log("Maior de idade")
} else {
    idade1 < 18
    console.log("Menor de idade")
}














