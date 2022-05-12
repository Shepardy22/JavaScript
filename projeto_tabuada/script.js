function gerarTabu(){
    let num = document.getElementById('tabu')
    let tab = document.getElementById('seltabu')
    

    if(num.value.length == 0){
        window.alert('digite um valor')
         
    }else{
        let numero = Number(num.value)   // convert
        cont = 1
        tab.innerText = ''
        while(cont <= 10){
            var item = document.createElement('option') // para criar elementos dentro do select, se usa option
            item.text = `${numero} x ${cont} = ${numero*cont}`
            tab.appendChild(item) 
            cont++
        }
    }
}
