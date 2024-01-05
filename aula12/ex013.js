/* DATAS EM JAVASCRIPT  */

var dias = new Date()
var diasem = dias.getDay()
console.log(diasem)
/* 
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/
switch(diasem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    case 7:
        console.log('[ERRO] Dia invalido')
        break
}

//PEGA VALOR COMPLETO
let data = new Date()
//console.log(data);

//PEGAR ANO ATUAL PADRÃO 4 DIGITOS - Ex: 2022
let ano = data.getFullYear()

//PEGAR O MÊS ATUAL - VAI DE 0 A 11. 0 É JANEIRO E 11 DEZEMBRO
let mes = data.getMonth()

//PARA ESCREVER DE JANEIRO ATÉ DEZEMBRO FAÇA ASSIM
const mesesDoAno = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];
let mesEscrito = mesesDoAno[data.getMonth()]

//PEGAR O DIA DO MÊS - DE 1 A 31
let diaMes = data.getDate()

//PEGAR DIA DA SEMANA - DE 0 A 6
let diaSemana = data.getDay()

//PARA ESCREVER DE DOMINGO A SÁBADO
const diasDaSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
];
let diaSemanaEscrito = diasDaSemana[data.getDay()]

//PEGAR HORA - DE 0 A 23
let hora = data.getHours()

//PEGAR MINUTO - DE 0 A 59
let minuto = data.getMinutes()

//PEGAR SEGUNDOS - DE 0 A 59
let segundos = data.getSeconds()

//MILISEGUNDOS - DE 0 A 999
let milisegundos = data.getMilliseconds()

//PEGAR SÓ A DATA FORMATO PADRÃO BRASILEIRO - DIA/MÊS/ANO
let dataBR = data.toLocaleString("pt-BR", { dateStyle: "short" })

//OUTRA FORMA DE FAZER PADRÃO BRASILEIRO

//PEGA OS VALORES SEPARADOS
d = new Date()
diaMes = d.getDate()
mes = d.getMonth() + 1
ano = d.getFullYear()

//CONCATENA
let dataPadraoBR = diaMes + "/" + mes + "/" + ano

//FUNÇÃO PARA ADICIONAR ZERO
function addZero(n) {
  return n < 10 ? "0" + n : "" + n
}

//CONCATENAR USANDO A FUNÇÃO
dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano

//COMPARAR DATAS - MAIOR OU MENOR EX: VENCIMENTOS
var hoje = new Date();
var vencimento = new Date(2024, 0, 15)

if (hoje > vencimento) {
  console.log("Sua conta está vencida")
} else {
  console.log("Ainda não venceu")
}

//DIFERENÇA ENTRE DATAS
var dataInicial = new Date();
var dataFinal = new Date(2024, 11, 31)

//getTime() - PEGA TEMPO EM MILISEGUNDOS DESDE 1 JANEIRO DE 1970
var diferencaTempo = dataFinal.getTime() - dataInicial.getTime()

//CEIL NUMERO ARREDONDADO PARA CIMA:
var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000))

