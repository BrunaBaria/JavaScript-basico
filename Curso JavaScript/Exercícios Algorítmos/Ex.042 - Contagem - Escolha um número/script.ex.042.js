function contar(){
    var res = document.querySelector('div#res')
    var c = 1
    var txtn = document.getElementById('txtn')
    var n = Number(txtn.value)
    while(c<=n){
        res.innerHTML+=` ${c} `
        c++
    } res.innerHTML += ` ACABOU! `
}