function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-homem.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-homem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-homem-adulto.png')
            } else {
                img.setAttribute('src', 'foto-vovo-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-mulher.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-mulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-mulher-adulta.png')
            } else {
                img.setAttribute('src', 'foto-vovo-idosa.png')
            }
        } 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)    
    }
}