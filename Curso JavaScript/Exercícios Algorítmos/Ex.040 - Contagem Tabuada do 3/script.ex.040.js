function contar(){
    var res = document.querySelector('div#res')
    var c = 0
    while(c<18){
        res.innerHTML +=` ${c} `
        c=c+3
    }res.innerHTML +=` ACABOU! `
}