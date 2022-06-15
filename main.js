function tocaSom(seletorAudio) {
    const element = document.querySelector(seletorAudio);

    if (element != null && element.localName === 'audio'){
                element.play();
           }
    else {
        console.log ('Element not found or invalid selector');
    }       
}


const listaDeTeclas = document.querySelectorAll('.tecla');



for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const audio = tecla.classList[1];
    const idAudio =  `#som_${audio}`;  //template string
    
   
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){
        
      
    if (evento.code == 'Space' || evento.code == 'Enter'){
        tecla.classList.add('ativa');
    }
   
}

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
} 