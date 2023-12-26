// Exercício de Manipulação de Array

// Crie uma lista de compras que é inicialmente vazia.
// Adicione 5 itens à lista usando push().
// Agora, remova o primeiro item da lista usando shift().
// Imprima a lista final no console.
const minhalista = []

minhalista.push("Manteiga", "Açucar", "Pão", "Leite", "Café")
console.log(minhalista)

minhalista.shift()
console.log(minhalista)

// Exercício de Manipulação de Array - find()

// Você tem um array de números: [3, 7, 14, 21, 29, 36, 42].
// Use a função find() para encontrar o primeiro número que é divisível por 7
// e maior que 10.
const numeros = [3, 7, 14, 21, 29, 36, 42]

const numeroDivisivel = numeros.find((num) => num > 10 && num % 7 === 0)
console.log(numeroDivisivel)

// Exercício de Manipulação de Array - filter()

// Dado o array de números: [5, 10, 15, 20, 25, 30, 35, 40].
// Use a função filter() para criar um novo array que contenha apenas os números
// que são maiores que 20.
const arr = [5, 10, 15, 20, 25, 30, 35, 40]

const numerosMaiores = arr.filter((num) => num > 20)
console.log(numerosMaiores)

// Exercício de Manipulação de String - split(), trim()

// Dada a string: " Bom dia, mundo! ".
// Remova os espaços em branco no início e no final da string e,
// em seguida, divida a string em palavras.
const frase = " Bom dia, mundo! "

const espaco = frase.trim().split(" ")
console.log(espaco)

// Dada a string: "O rato roeu a roupa do rei de Roma".
// Verifique se a string começa com a palavra "O" e termina com a palavra "Roma".
const frase2 =  "O rato roeu a roupa do rei de Roma"

console.log(frase2.startsWith("O"))
console.log(frase2.endsWith("Roma"))