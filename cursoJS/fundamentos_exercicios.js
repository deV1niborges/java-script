// Exercicios de Fundamentos
// Exercicios 1 : Olá, mundo! no console
// Crie um script que imprima "Olá, Mundo!" no console

console.log("Olá, Mundo");

//Exercicio 2 : Conversão de tipos
// Dado valor de uma string "1234", converta-o em um número e exiba o tipo da variavel no console.

let dados = "1234";
let valor = Number(dados);
console.log(typeof valor);

// Exercicio 3 : Manipulação de strings
// Dado uma string "JavaScript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase.

const ValorString = "JavaScript é incrivel";
console.log(ValorString.length);
console.log(ValorString.split(" ").length);

// Exercício 4: Loops e Arrays
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console.

const nomes = ["Lucas", "Pedro", "Vitor", "Arthur", "Ana"];
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

// Exercício 5: Funções, Strings e Math
// Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30").
// A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM").
// Use o objeto Math para auxiliar nesta conversão.
// Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.

/*JEITO 1 DE FAZER
function converterHorario(horario24) {
    const [hora, minuto] = horario24.split(":")

    const hora12 = hora % 12 || 12

    let periodo = "AM"

    if(hora > 12) {
        periodo = "PM"
    }

    console.log(`${hora12}:${minuto} ${periodo}`)
  }
    
  converterHorario("15:16")

  converterHorario("09:46")

  converterHorario("21:12")

  */

//JEITO 2 DE FAZER
function converterHorario(horario24) {
  const [hora, minuto] = horario24.split(":");
  let hora12 = hora % 12 || 12;
  const periodo = hora < 12 ? "AM" : "PM";
  return `${hora12}:${minuto} ${periodo}`;
}

console.log(converterHorario("14:30")); // "2:30 PM"
console.log(converterHorario("00:00")); // "12:00 AM"
console.log(converterHorario("12:00")); // "12:00 PM"