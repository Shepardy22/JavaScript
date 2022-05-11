function carregar(){

    var msgHora = window.document.getElementById('msgHora')
    var img = window.document.getElementById('imagem')
    var newDate = new Date()
    var hora = newDate.getHours()
    msgHora.innerHTML = `<p>Agora São <strong>${hora}<trong/> horas.<p/>`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'img/manha.jpg'
        msgHora.innerHTML += '<p>Bom Dia!<p/>'
        window.document.body.style.background = 'rgba(38, 108, 141, 0.815)'
    }
    else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'img/tarde.jpg'
        msgHora.innerHTML += '<p>Boa Tarde!<p/>'
        window.document.body.style.background = 'rgba(175, 184, 57, 0.815)'

    }
    else{
        //boa noite
        img.src = 'img/noite.jpg'
        msgHora.innerHTML += '<p>Boa Noite!<p/>'
        window.document.body.style.background = 'rgba(27, 27, 26, 0.925)'


    }


}

