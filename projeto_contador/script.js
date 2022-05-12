function contar(){
    var inicioC = window.document.getElementById('inicioC')
    var fimC = window.document.getElementById('fimC')
    var passoC = window.document.getElementById('passoC')
    var resul = window.document.getElementById('result')

    var contInicio = Number(inicioC.value)
    var contFim = Number(fimC.value)
    var contPasso = Number(passoC.value)
    var resultC = ''
    
    if(contFim <= 0 || contFim == null){
        window.alert('Insira um valor do final maior que 0!')
        resul.innerText = ('impossivel contar')
    }
    if(contPasso <= 0 || contPasso == null){
        window.alert('Passo não pode ser 0, começando com 1!')
        contPasso = 1
    }

for(resultC = contInicio, resul.innerText ='contando...';resultC <= contFim ;resultC = resultC+contPasso ){
    resul.innerText += ` ${resultC}`
    

}
    
    
}


