function verificar(){
    var data = new Date();
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtAno')
    var res = document.getElementById('res')
    
    if(fAno.value.length == 0 || fAno > ano){
        window.alert('Verifique o ano e tente novamente!')
    }else{
        var fSex = document.getElementsByName('radSex')
        var idade = ano - Number (fAno.value)
        var genero = ''
        var img = document.createElement(img)
        img.setAttribute('id', 'foto')
        if(fSex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
               //criança 
               img.setAttribute('src','img/foto-bebe-m.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','img/foto-jovem-m.png')  
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','img/foto-adulto-m.png')
            }else {
                //velho
                img.setAttribute('src','img/foto-idoso-m.png')
            } 

        } else if(fSex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança 
                img.setAttribute('src','img/foto-bebe-f.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','img/foto-jovem-f.png')  
            } else if(idade < 50){
                //adulto
                img.setAttribute('src','img/foto-adulto-f.png')
            } else {
                //velho
                img.setAttribute('src','img/foto-idoso-f.png')
            } 
    
        }
        
        res.style.te = 'center' // centralizar texto com js
        res.innerHTML = `Detectamos ${genero} de ${idade} Anos.`
        res.appendChild(img)
        
    }
}
