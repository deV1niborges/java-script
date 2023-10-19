function contar() {
    let ini = document.getElementById('icomeco')
    let fim = document.getElementById('ifim')
    let pas = document.getElementById('ipasso') 
    let res = document.getElementById('ires')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
       res.innerHTML = 'Impossivel contar' 
    } else {
       res.innerHTML = 'Contando: <br>'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(pas.value)
       if (p <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
       }
       if (i < f) {
        for(let c = i; c <= f; c += p ) {
            res.innerHTML += ` ${c} \u{1F449}`   
        }
       } else {
        for(let c = i; c >= f; c-= p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
       }
       res.innerHTML += `\u{1F3C1}`
    }
 } 