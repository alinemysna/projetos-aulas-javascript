function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <10){
                //bebe
              img.setAttribute('src', 'bebe-menino.jpg') 
            }else if(idade  < 20){
                //crianca
                img.setAttribute('src', 'crianca-menino.jpg')
            } else if (idade < 30) {
                //adulto
                img.setAttribute('src', 'adolesc.menino.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) { ba
            gênero = 'Mulher'
            if (idade >=0 && idade <10){
                //bebe
              img.setAttribute('src', 'bebe-menina.jpg') 
            } else if (idade  < 20){
                //crianca
                img.setAttribute('src', 'crianca-menina.jpg')
            } else if (idade < 30) {
                //adulto
                img.setAttribute('src', 'adolesc.menina.jpg')
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}