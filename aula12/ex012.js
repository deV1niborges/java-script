var hora = new Date()
var agora = hora.getHours()
var minuto = hora.getMinutes()
console.log(`Agora são exatamente ${agora}h:${minuto}m.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}