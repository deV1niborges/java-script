/*

Exemplo 5 = some os valores dados uma coleção de dados "idades" 
[15,46,75,34,23],imprima na tela a soma deste valores.

*/

let idades = [15,46,75,34,23]  // Metódo for
let total = 0

for(var i = 0; i < idades.length; i++) {
    total += idades[i]
}

console.log(total)

let idades2 = [15,46,75,34,23]  // Metódo reduce
var total2 =  idades2.reduce(function(accumulator,value){
    return accumulator + value
},0) 

console.log(total2)
     




