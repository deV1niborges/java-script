// Estrutura de condição - if , else , else if
const idade = 18

if(idade < 13) {
    console.log('Criança')
} else if(idade < 18) {
    console.log('Adolescente')
} else {
    console.log('Adulto')
}

// Funções
function cumprimentar(nome) {
    console.log("Olá " +  nome)
}

// Invocação da função - nome()
cumprimentar('Vini')

// Escopo de variaveis
 let cor = 'azul'

 function mostrarcor() {
    let cor = 'verde'
    console.log(cor)
}
console.log(cor)
mostrarcor()

// Hoisting = içamento
testeHoisting()

function testeHoisting() {
    console.log('Deu certo')
}

// Arrow function
const testeArrow = () => console.log('Isso também é uma função')
testeArrow()

// Truthy e falsy
const minhavariavel = ''
const minhavariavel2 = 'Algum texto'

if(minhavariavel) {  // falsy
    console.log('É verdadeiro')
} else {
    console.log('É falso')
}

if(minhavariavel2) {  // truthy
    console.log('É verdadeiro 2')
} else {
    console.log('É falso 2')
}

// Array, listas
const numeros = [1, 2 , 3, 4, 5]
console.log(numeros)

console.log(numeros[0])
console.log(numeros[2])

numeros.push(6)
console.log(numeros)

// Prototype => OBJETO -> objeto2
// Array => nossos arrays
numeros.pop()
console.log(numeros)

// Strings
const minhaStringNova = 'Olá Mundo, '

// Concatenação = +
const minhaString2 = minhaStringNova + 'como você estar?'
console.log(minhaString2)

// Interpolação
const minhaString3 = `${minhaStringNova}como você estar?`
console.log(minhaString3)

console.log(minhaString3.length) // Quantos caracteres
console.log(minhaString3[5])
console.log(minhaString3.toUpperCase())

// Data e hora
const agora = Date()
console.log(agora)

const meuAniversario = new Date(2024, 4, 28)
console.log(meuAniversario)

// Math
console.log(Math.PI) // Valor de PI

console.log(Math.round(3.7)) // Aredondamneto de numero

console.log(Math.sqrt(144)) // Divisão

console.log(Math.pow(2, 5)) // Potência