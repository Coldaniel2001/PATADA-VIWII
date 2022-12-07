/*VARIABLES*/

const comenzarPartida = document.querySelector(".comenzar-partida-padre");
const page1 = document.querySelector(".desktop-1")
const page2 = document.querySelector(".desktop-2")
const easyDif = document.querySelectorAll(".easy-dif");
const usuario = document.querySelector('#quien-eres');
const play = document.querySelector('.formulario-jugar');
const returnPlay = document.querySelector('.volver-formulario-jugar');
const playing = document.querySelector('.playing');
const winner = document.querySelector('.winner');
const currentUser = document.querySelector('.current-user');
const countdown = document.querySelector(".countdown")
const getReady = document.querySelector(".get-ready")
const caraSeleccionada = document.querySelector(".cara-seleccionada");
const recordSegundos = document.querySelector(".record-segundos");
const lose = document.querySelector(".lose");
const sameFace = document.querySelector(".return-lose");
const difFace = document.querySelector(".again-lose");
const page4 = document.querySelector(".who-face-pattle");
const sameFaceWin = document.querySelector(".return");
const difFaceWin = document.querySelector(".again");

  /*posiciones caras*/
  let inaki1 = document.querySelector(".inaki1");
  let inaki2 = document.querySelector(".inaki2");
  let inaki3 = document.querySelector(".inaki3");
  let inaki4 = document.querySelector(".inaki4");
  let inaki5 = document.querySelector(".inaki5");
  let inaki6 = document.querySelector(".inaki6");
  let victor1 = document.querySelector(".victor1");
  let victor2 = document.querySelector(".victor2");
  let victor3 = document.querySelector(".victor3");
  let victor4 = document.querySelector(".victor4");
  let victor5 = document.querySelector(".victor5");
  let victor6 = document.querySelector(".victor6");
  let wilson1 = document.querySelector(".wilson1");
  let wilson2 = document.querySelector(".wilson2");
  let wilson3 = document.querySelector(".wilson3");
  let wilson4 = document.querySelector(".wilson4");
  let wilson5 = document.querySelector(".wilson5");
  let wilson6 = document.querySelector(".wilson6");


/*///////////////////////MODO FACIL///////////////*/

 /* coger todas las imagenes */
 

/*EVENTOS*/
comenzarPartida.addEventListener("click", function_comenzarPartida);
play.addEventListener("submit", function_play);
sameFace.addEventListener("click", function_sameFace);
difFace.addEventListener("click", function_difFace);
sameFaceWin.addEventListener("click", function_sameFaceWin)
difFaceWin.addEventListener("click", function_difFaceWin);
returnPlay.addEventListener("submit",function_difFaceWinPlay);


/*FUNCIONES*/

function function_play(event){
    event.preventDefault();
    if(facil.checked) {
        localStorage.setItem("dificulty", 'easy');
    }
    if(dificil.checked) {
        localStorage.setItem("dificulty", 'dificult');
    }

    if(inaki.checked) {
        localStorage.setItem('character', 'Inaki');
    }
    if(wilson.checked) {
        localStorage.setItem('character', 'Wilson');
    }
    if(victor.checked) {
        localStorage.setItem('character', 'Victor');
    }

    if(quienEres) {
        localStorage.setItem('username', quienEres.value);
    }
    if(page2.classList.contains('desktop-2-show')){
        page2.classList.replace('desktop-2-show', 'desktop-2');
    }
    if(playing.classList.contains('playing')){
        playing.classList.replace('playing', 'playing-show');
        currentUser.innerHTML = localStorage.getItem('username');
        
    }
    
    /*COUNTDOWN 5 SEGUNDOS*/
    let contador = 5;
    const message = setInterval(()=>{  
        console.log(contador);
        contador--;
        if (contador == 0){
            if(getReady.classList.contains("get-ready")){
                countdown.innerHTML = 'GO!';
            }         
        }else if (contador == -1) {
            getReady.classList.replace("get-ready", "get-ready-notShow")
            clearInterval(message);
            if(localStorage.getItem('dificulty') == 'easy') {
                easyMode();
            }
            if(localStorage.getItem('dificulty') == 'dificult') {
                hardMode();
            }

        }
        else {
            countdown.innerHTML = contador;
        }
    }, 1000);
    

}



function function_comenzarPartida () {
    if(page1.classList.contains("desktop-1")){
        page1.classList.replace("desktop-1", "desktop-1-notShow");
    }

    if(page2.classList.contains("desktop-2")){
        page2.classList.replace("desktop-2", "desktop-2-show");
    }
}


function easyMode() {

    let imgEase = document.querySelectorAll(".img-ease");
    for(let i = 0; i < imgEase.length; i++ ){
     imgEase[i].addEventListener("click", ganar_partida);
    }
  

    /*TIEMPO DE JUEGO */
    let tiempoJuego = 0;
    
    let time = setInterval(() => {
        tiempoJuego += 0.01;
        console.log(tiempoJuego.toFixed(3));
        localStorage.setItem("tiempo de juego", tiempoJuego.toFixed(3) );
        if(winner.classList.contains("winner-show")){
            clearInterval(time);
        }
    }, 10);

    /*Numero aleatorio*/
    let numeroAleatorio = Math.floor(Math.random() * (6) + 1);
    localStorage.setItem("Numero Aleatorio", numeroAleatorio)
    if(numeroAleatorio == 1){
        if(localStorage.getItem("character") == "Inaki"){

              setInterval(() => {
                    inaki1.style.marginBottom  = "-440px";
                }, 0);
    
                setInterval(() => {
                    inaki1.style.marginBottom  = "-607px";
                }, 3000);
                
            
            

        } else if(localStorage.getItem("character") == "Wilson"){
            
            setTimeout(() => {
                wilson1.style.marginBottom  = "-440px";
            }, 0);

            setTimeout(() => {
                wilson1.style.marginBottom  = "-607px";
            }, 2000);
           
        }else {
            
            setTimeout(() => {
                victor1.style.marginBottom  = "-440px";
            }, 0);

            setTimeout(() => {
                victor1.style.marginBottom  = "-607px";
            }, 2000);
        }
    } else if(numeroAleatorio == 2){
        if(localStorage.getItem("character") == "Inaki"){
            setTimeout(() => {
                inaki2.style.marginBottom  = "-180px";
            }, 0);
        } else if(localStorage.getItem("character") == "Wilson"){
            setTimeout(() => {
                wilson2.style.marginBottom  = "-180px";
            }, 0)
                
        }else {
            setTimeout(() => {
                victor2.style.marginBottom  = "-180px";
            }, 0);
        }
    }else if(numeroAleatorio == 3){
        if(localStorage.getItem("character") == "Inaki"){
            setTimeout(() => {
                inaki3.style.marginBottom  = "-540px";
            }, 0);
        } else if(localStorage.getItem("character") == "Wilson"){
            setTimeout(() => {
                wilson3.style.marginBottom  = "-540px";
            }, 0)
                
        }else {
            setTimeout(() => {
                victor3.style.marginBottom  = "-540px";
            }, 0);
        }
    }else if(numeroAleatorio == 4){
        if(localStorage.getItem("character") == "Inaki"){
            setTimeout(() => {
                inaki4.style.marginBottom  = "-360px";
            }, 0);
        } else if(localStorage.getItem("character") == "Wilson"){
            setTimeout(() => {
                wilson4.style.marginBottom  = "-360px";
            }, 0)
                
        }else {
            setTimeout(() => {
                victor4.style.marginBottom  = "-360px";
            }, 0);
        }
    }else if(numeroAleatorio == 5){
        if(localStorage.getItem("character") == "Inaki"){
            setTimeout(() => {
                inaki5.style.marginBottom  = "-215px";
            }, 0);
        } else if(localStorage.getItem("character") == "Wilson"){
            setTimeout(() => {
                wilson5.style.marginBottom  = "-215px";
            }, 0)
                
        }else {
            setTimeout(() => {
                victor5.style.marginBottom  = "-215px";
            }, 0);
        }
    }else {
        if(localStorage.getItem("character") == "Inaki"){
            setTimeout(() => {
                inaki6.style.marginBottom  = "-545px";
            }, 0);
        } else if(localStorage.getItem("character") == "Wilson"){
            setTimeout(() => {
                wilson6.style.marginBottom  = "-545px";
            }, 0)
                
        }else {
            setTimeout(() => {
                victor6.style.marginBottom  = "-545px";
            }, 0);
        }
    }
}
    

/*si ganas*/

function ganar_partida(){
    if(playing.classList.contains('playing-show')){
        playing.classList.replace('playing-show', 'playing');
    }
    if(winner.classList.contains('winner')){
        winner.classList.replace('winner', 'winner-show');
    }
    caraSeleccionada.innerHTML = `"${localStorage.getItem('character')}"`;
    recordSegundos.innerHTML = `${localStorage.getItem("tiempo de juego")} segundos`;

    if(localStorage.getItem("Numero Aleatorio") == 1){
        if(localStorage.getItem("character") == "Inaki"){

            setInterval(() => {
                inaki1.style.marginBottom  = "-607px";
            }, 0);
    
        } else if(localStorage.getItem("character") == "Wilson"){
            
            setTimeout(() => {
                wilson1.style.marginBottom  = "-607px";
            }, 0);
           
        }else {
            
            setTimeout(() => {
                victor1.style.marginBottom  = "-607px";
            }, 0);
        }
    } else if(localStorage.getItem("Numero Aleatorio") == 2){
        if(localStorage.getItem("character") == "Inaki"){
            setTimeout(() => {
                inaki2.style.marginBottom  = "-360px";
            }, 0);
        } else if(localStorage.getItem("character") == "Wilson"){
            setTimeout(() => {
                wilson2.style.marginBottom  = "-360px";
            }, 0)
                
        }else {
            setTimeout(() => {
                victor2.style.marginBottom  = "-360px";
            }, 0);
        }
    }else if(localStorage.getItem("Numero Aleatorio") == 3){
        if(localStorage.getItem("character") == "Inaki"){
            setTimeout(() => {
                inaki3.style.marginBottom  = "-710px";
            }, 0);
        } else if(localStorage.getItem("character") == "Wilson"){
            setTimeout(() => {
                wilson3.style.marginBottom  = "-710px";
            }, 0)
                
        }else {
            setTimeout(() => {
                victor3.style.marginBottom  = "-710px";
            }, 0);
        }
    }else if(localStorage.getItem("Numero Aleatorio") == 4){
        if(localStorage.getItem("character") == "Inaki"){
            setTimeout(() => {
                inaki4.style.marginBottom  = "-530px";
            }, 0);
        } else if(localStorage.getItem("character") == "Wilson"){
            setTimeout(() => {
                wilson4.style.marginBottom  = "-530px";
            }, 0)
                
        }else {
            setTimeout(() => {
                victor4.style.marginBottom  = "-530px";
            }, 0);
        }
    }else if(localStorage.getItem("Numero Aleatorio") == 5){
        if(localStorage.getItem("character") == "Inaki"){
            setTimeout(() => {
                inaki5.style.marginBottom  = "-379px";
            }, 0);
        } else if(localStorage.getItem("character") == "Wilson"){
            setTimeout(() => {
                wilson5.style.marginBottom  = "-379px";
            }, 0)
                
        }else {
            setTimeout(() => {
                victor5.style.marginBottom  = "-379px";
            }, 0);
        }
    }else {
        if(localStorage.getItem("character") == "Inaki"){
            setTimeout(() => {
                inaki6.style.marginBottom  = "-695px";
            }, 0);
        } else if(localStorage.getItem("character") == "Wilson"){
            setTimeout(() => {
                wilson6.style.marginBottom  = "-695px";
            }, 0)
                
        }else {
            setTimeout(() => {
                victor6.style.marginBottom  = "-695px";
            }, 0);
        }
    }
}

function function_sameFaceWin() {
    if(winner.classList.contains("winner-show")){
        winner.classList.replace("winner-show", "winner")
    }

    if(getReady.classList.contains("get-ready-notShow")){
        getReady.classList.replace("get-ready-notShow", "get-ready")

    }

    if(playing.classList.contains('playing')){
        playing.classList.replace('playing', 'playing-show');
        
        
        let contador = 5;
        const message = setInterval(()=>{  
        console.log(contador);
        contador--;
        if (contador == 0){
            if(getReady.classList.contains("get-ready")){
                countdown.innerHTML = 'GO!';
            }         
        }else if (contador == -1) {
            getReady.classList.replace("get-ready", "get-ready-notShow")
            clearInterval(message);
            if(localStorage.getItem('dificulty') == 'easy') {
                easyMode();
            }
            if(localStorage.getItem('dificulty') == 'dificult') {
                hardMode();
            }

        }
        else {
            countdown.innerHTML = contador;
        } 
    }, 1000);
    }
   
}

function function_difFaceWin() {
    if(winner.classList.contains("winner-show")){
        winner.classList.replace("winner-show", "winner")
    }

    if(page4.classList.contains('who-face-pattle')){
        page4.classList.replace('who-face-pattle', 'who-face-pattle-show'); 
    }
}

function function_difFaceWinPlay(event){
    event.preventDefault();
    if(returnInaki.checked) {
        localStorage.setItem('character', 'Inaki');
    }
    if(returnWilson.checked) {
        localStorage.setItem('character', 'Wilson');
    }
    if(returnVictor.checked) {
        localStorage.setItem('character', 'Victor');
    }

    if(page4.classList.contains('who-face-pattle-show')){
        page4.classList.replace('who-face-pattle-show', 'who-face-pattle');
    }
    if(getReady.classList.contains("get-ready-notShow")){
        getReady.classList.replace("get-ready-notShow", "get-ready")

    }

    if(playing.classList.contains('playing')){
        playing.classList.replace('playing', 'playing-show');
        
        
        let contador = 5;
        const message = setInterval(()=>{  
        console.log(contador);
        contador--;
        if (contador == 0){
            if(getReady.classList.contains("get-ready")){
                countdown.innerHTML = 'GO!';
            }         
        }else if (contador == -1) {
            getReady.classList.replace("get-ready", "get-ready-notShow")
            clearInterval(message);
            if(localStorage.getItem('dificulty') == 'easy') {
                easyMode();
            }
            if(localStorage.getItem('dificulty') == 'dificult') {
                hardMode();
            }

        }else {
            countdown.innerHTML = contador;
        } 
    }, 1000);
    
    }
    
    
}

/*si pierdes*/

function perder_partida(){
    if(playing.classList.contains('playing-show')){
        playing.classList.replace('playing-show', 'playing');
    }
    if(lose.classList.contains("lose")){
        lose.classList.replace("lose", "lose-show");
    }

    if(winner.classList.contains('winner-show')){
        winner.classList.replace('winner-show', 'winner');
    }
}

function function_sameFace() {

    if(lose.classList.contains("lose-show")){
        lose.classList.replace("lose-show", "lose")

    }

    if(getReady.classList.contains("get-ready-notShow")){
        getReady.classList.replace("get-ready-notShow", "get-ready")

    }

    if(playing.classList.contains('playing')){
        playing.classList.replace('playing', 'playing-show');
        
        let contador = 5;
        const message = setInterval(()=>{  
        console.log(contador);
        contador--;
        if (contador == 0){
            if(getReady.classList.contains("get-ready")){
                countdown.innerHTML = 'GO!';
            }         
        }else if (contador == -1) {
            getReady.classList.replace("get-ready", "get-ready-notShow")
            clearInterval(message);
            if(localStorage.getItem('dificulty') == 'easy') {
                easyMode();
            }
            if(localStorage.getItem('dificulty') == 'dificult') {
                hardMode();
            }

        }
        else {
            countdown.innerHTML = contador;
        } 
    }, 1000);
    }
   
}

function function_difFace() {
    if(lose.classList.contains("lose-show")){
        lose.classList.replace("lose-show", "lose")
    }

    if(page4.classList.contains('who-face-pattle')){
        page4.classList.replace('who-face-pattle', 'who-face-pattle-show');
}
}


function hardMode() {
   

    /*TIEMPO DE JUEGO */
    let tiempoJuego = 0;
    
    let time = setInterval(() => {
        tiempoJuego += 0.01;
        console.log(tiempoJuego.toFixed(3));
        localStorage.setItem("tiempo de juego", tiempoJuego.toFixed(3) );
        if(winner.classList.contains("winner-show")){
            clearInterval(time);
        }
        if(lose.classList.contains("lose-show")){
            clearInterval(time);
        }
    }, 10);

    /*Numero aleatorio*/
    let numeroAleatorio = Math.floor((Math.random() * (6)) + 1);
    if(numeroAleatorio == 1){
        if(localStorage.getItem("character") == "Inaki"){

        let inakiWin = document.querySelectorAll(".inaki-win");
        for(let i = 0; i < inakiWin.length; i++ ){
         inakiWin[i].addEventListener("click", ganar_partida);
        
         let victorLose = document.querySelectorAll(".victor-win");
         for(let i = 0; i < victorLose.length; i++ ){
          victorLose[i].addEventListener("click", perder_partida);
         }
         let wilsonLose = document.querySelectorAll(".wilson-win");
         for(let i = 0; i < wilsonLose.length; i++ ){
          wilsonLose[i].addEventListener("click", perder_partida);
         }
    
    }
            setTimeout(() => {
                inaki1.style.marginBottom  = "-440px";
            }, 0);

            setTimeout(() => {
                inaki1.style.marginBottom  = "-607px";
            }, 3000);

            setTimeout(() => {
                wilson2.style.marginBottom  = "-180px";
            }, 0)

            setTimeout(() => {
                wilson2.style.marginBottom  = "-360px";
            }, 3000)

            setTimeout(() => {
                victor5.style.marginBottom  = "-215px";
            }, 0);

            setTimeout(() => {
                victor5.style.marginBottom  = "-378px";
            }, 3000);


        } else if(localStorage.getItem("character") == "Wilson"){

        let wilsonWin = document.querySelectorAll(".wilson-win");
        for(let i = 0; i < wilsonWin.length; i++ ){
         wilsonWin[i].addEventListener("click", ganar_partida);
        
         let victorLose = document.querySelectorAll(".victor-win");
         for(let i = 0; i < victorLose.length; i++ ){
          victorLose[i].addEventListener("click", perder_partida);
         }
         let inakiLose = document.querySelectorAll(".inaki-win");
         for(let i = 0; i < inakiLose.length; i++ ){
          inakiLose[i].addEventListener("click", perder_partida);
         }
        }
            
            setTimeout(() => {
                wilson1.style.marginBottom  = "-440px";
            }, 0);

            setTimeout(() => {
                wilson1.style.marginBottom  = "-607px";
            }, 3000);

            setTimeout(() => {
                inaki6.style.marginBottom  = "-545px";
            }, 0);

            setTimeout(() => {
                inaki6.style.marginBottom  = "-694px";
            }, 3000);

            setTimeout(() => {
                victor3.style.marginBottom  = "-540px";
            }, 0);

            setTimeout(() => {
                victor3.style.marginBottom  = "-710px";
            }, 3000);
           
        }else {
        let victorWin = document.querySelectorAll(".victor-win");
        for(let i = 0; i < victorWin.length; i++ ){
         victorWin[i].addEventListener("click", ganar_partida);
        
         let wilsonLose = document.querySelectorAll(".wilson-win");
         for(let i = 0; i < wilsonLose.length; i++ ){
          wilsonLose[i].addEventListener("click", perder_partida);
         }
         let inakiLose = document.querySelectorAll(".inaki-win");
         for(let i = 0; i < inakiLose.length; i++ ){
          inakiLose[i].addEventListener("click", perder_partida);
         }
        }
            setTimeout(() => {
                victor1.style.marginBottom  = "-440px";
            }, 0);

            setTimeout(() => {
                victor1.style.marginBottom  = "-607px";
            }, 3000);

            setTimeout(() => {
                inaki5.style.marginBottom  = "-215px";
            }, 0);

            setTimeout(() => {
                inaki5.style.marginBottom  = "-378px";
            }, 3000);

            setTimeout(() => {
                wilson3.style.marginBottom  = "-540px";
            }, 0);

            setTimeout(() => {
                wilson3.style.marginBottom  = "-710px";
            }, 3000);
        }

    }else if(numeroAleatorio == 2){
        if(localStorage.getItem("character") == "Inaki"){

        let inakiWin = document.querySelectorAll(".inaki-win");
        for(let i = 0; i < inakiWin.length; i++ ){
         inakiWin[i].addEventListener("click", ganar_partida);
        
         let victorLose = document.querySelectorAll(".victor-win");
         for(let i = 0; i < victorLose.length; i++ ){
          victorLose[i].addEventListener("click", perder_partida);
         }
         let wilsonLose = document.querySelectorAll(".wilson-win");
         for(let i = 0; i < wilsonLose.length; i++ ){
          wilsonLose[i].addEventListener("click", perder_partida);
         }
    
    }
            setTimeout(() => {
                inaki2.style.marginBottom  = "-180px";
            }, 0);

            setTimeout(() => {
                inaki2.style.marginBottom  = "-360px";
            }, 3000);

            setTimeout(() => {
                wilson4.style.marginBottom  = "-360px";
            }, 0)

            setTimeout(() => {
                wilson4.style.marginBottom  = "-530px";
            }, 3000)

            setTimeout(() => {
                victor6.style.marginBottom  = "-545px";
            }, 0);

            setTimeout(() => {
                victor6.style.marginBottom  = "-694px";
            }, 3000);


        } else if(localStorage.getItem("character") == "Wilson"){

        let wilsonWin = document.querySelectorAll(".wilson-win");
        for(let i = 0; i < wilsonWin.length; i++ ){
         wilsonWin[i].addEventListener("click", ganar_partida);
        
         let victorLose = document.querySelectorAll(".victor-win");
         for(let i = 0; i < victorLose.length; i++ ){
          victorLose[i].addEventListener("click", perder_partida);
         }
         let inakiLose = document.querySelectorAll(".inaki-win");
         for(let i = 0; i < inakiLose.length; i++ ){
          inakiLose[i].addEventListener("click", perder_partida);
         }
        }
            setTimeout(() => {
                wilson2.style.marginBottom  = "-180px";
            }, 0)

            setTimeout(() => {
                wilson2.style.marginBottom  = "-360px";
            }, 3000)

            setTimeout(() => {
                inaki6.style.marginBottom  = "-545px";
            }, 0);

            setTimeout(() => {
                inaki6.style.marginBottom  = "-694px";
            }, 3000);

            setTimeout(() => {
                victor5.style.marginBottom  = "-215px";
            }, 0);

            setTimeout(() => {
                victor5.style.marginBottom  = "-378px";
            }, 3000);

                
        }else {
        let victorWin = document.querySelectorAll(".victor-win");
        for(let i = 0; i < victorWin.length; i++ ){
         victorWin[i].addEventListener("click", ganar_partida);
        
         let wilsonLose = document.querySelectorAll(".wilson-win");
         for(let i = 0; i < wilsonLose.length; i++ ){
          wilsonLose[i].addEventListener("click", perder_partida);
         }
         let inakiLose = document.querySelectorAll(".inaki-win");
         for(let i = 0; i < inakiLose.length; i++ ){
          inakiLose[i].addEventListener("click", perder_partida);
         }
        }
            setTimeout(() => {
                victor2.style.marginBottom  = "-180px";
            }, 0);

            setTimeout(() => {
                victor2.style.marginBottom  = "-360px";
            }, 3000);

            setTimeout(() => {
                inaki6.style.marginBottom  = "-545px";
            }, 0);

            setTimeout(() => {
                inaki6.style.marginBottom  = "-694px";
            }, 3000);

            setTimeout(() => {
                wilson3.style.marginBottom  = "-540px";
            }, 0);

            setTimeout(() => {
                wilson3.style.marginBottom  = "-710px";
            }, 3000);
        }

    }else if(numeroAleatorio == 3){
        
        if(localStorage.getItem("character") == "Inaki"){
        let inakiWin = document.querySelectorAll(".inaki-win");
        for(let i = 0; i < inakiWin.length; i++ ){
         inakiWin[i].addEventListener("click", ganar_partida);
        
         let victorLose = document.querySelectorAll(".victor-win");
         for(let i = 0; i < victorLose.length; i++ ){
          victorLose[i].addEventListener("click", perder_partida);
         }
         let wilsonLose = document.querySelectorAll(".wilson-win");
         for(let i = 0; i < wilsonLose.length; i++ ){
          wilsonLose[i].addEventListener("click", perder_partida);
         }
    
    }
            setTimeout(() => {
                inaki3.style.marginBottom  = "-540px";
            }, 0);

            setTimeout(() => {
                inaki3.style.marginBottom  = "-710px";
            }, 3000);

            setTimeout(() => {
                victor4.style.marginBottom  = "-360px";
            }, 0);

            setTimeout(() => {
                victor4.style.marginBottom  = "-530px";
            }, 3000);

            setTimeout(() => {
                wilson2.style.marginBottom  = "-180px";
            }, 0)

            setTimeout(() => {
                wilson2.style.marginBottom  = "-360px";
            }, 3000)

        } else if(localStorage.getItem("character") == "Wilson"){

        let wilsonWin = document.querySelectorAll(".wilson-win");
        for(let i = 0; i < wilsonWin.length; i++ ){
         wilsonWin[i].addEventListener("click", ganar_partida);
        
         let victorLose = document.querySelectorAll(".victor-win");
         for(let i = 0; i < victorLose.length; i++ ){
          victorLose[i].addEventListener("click", perder_partida);
         }
         let inakiLose = document.querySelectorAll(".inaki-win");
         for(let i = 0; i < inakiLose.length; i++ ){
          inakiLose[i].addEventListener("click", perder_partida);
         }
        }
            setTimeout(() => {
                wilson3.style.marginBottom  = "-540px";
            }, 0)

            setTimeout(() => {
                wilson3.style.marginBottom  = "-710px";
            }, 3000)

            setTimeout(() => {
                inaki2.style.marginBottom  = "-180px";
            }, 0);

            setTimeout(() => {
                inaki2.style.marginBottom  = "-360px";
            }, 3000);

            setTimeout(() => {
                victor6.style.marginBottom  = "-545px";
            }, 0);

            setTimeout(() => {
                victor6.style.marginBottom  = "-694px";
            }, 3000);



                
        }else {
        let victorWin = document.querySelectorAll(".victor-win");
        for(let i = 0; i < victorWin.length; i++ ){
         victorWin[i].addEventListener("click", ganar_partida);
        
         let wilsonLose = document.querySelectorAll(".wilson-win");
         for(let i = 0; i < wilsonLose.length; i++ ){
          wilsonLose[i].addEventListener("click", perder_partida);
         }
         let inakiLose = document.querySelectorAll(".inaki-win");
         for(let i = 0; i < inakiLose.length; i++ ){
          inakiLose[i].addEventListener("click", perder_partida);
         }
        }
            setTimeout(() => {
                victor3.style.marginBottom  = "-540px";
            }, 0);

            setTimeout(() => {
                victor3.style.marginBottom  = "-710px";
            }, 3000);

            setTimeout(() => {
                wilson2.style.marginBottom  = "-180px";
            }, 0);

            setTimeout(() => {
                wilson2.style.marginBottom  = "-360px";
            }, 3000);

            setTimeout(() => {
                inaki6.style.marginBottom  = "-545px";
            }, 0);

            setTimeout(() => {
                inaki6.style.marginBottom  = "-694px";
            }, 3000);


        }
    }else if(numeroAleatorio == 4){
        if(localStorage.getItem("character") == "Inaki"){
        
        let inakiWin = document.querySelectorAll(".inaki-win");
        for(let i = 0; i < inakiWin.length; i++ ){
         inakiWin[i].addEventListener("click", ganar_partida);
        
         let victorLose = document.querySelectorAll(".victor-win");
         for(let i = 0; i < victorLose.length; i++ ){
          victorLose[i].addEventListener("click", perder_partida);
         }
         let wilsonLose = document.querySelectorAll(".wilson-win");
         for(let i = 0; i < wilsonLose.length; i++ ){
          wilsonLose[i].addEventListener("click", perder_partida);
         }
    
    }
            
            setTimeout(() => {
                inaki4.style.marginBottom  = "-360px";
            }, 0);

            setTimeout(() => {
                inaki4.style.marginBottom  = "-530px";
            }, 3000);


            setTimeout(() => {
                victor1.style.marginBottom  = "-440px";
            }, 0);

            setTimeout(() => {
                victor1.style.marginBottom  = "-607px";
            }, 3000);

            setTimeout(() => {
                wilson2.style.marginBottom  = "-180px";
            }, 0);

            setTimeout(() => {
                wilson2.style.marginBottom  = "-360px";
            }, 3000);


        } else if(localStorage.getItem("character") == "Wilson"){
        let wilsonWin = document.querySelectorAll(".wilson-win");
        for(let i = 0; i < wilsonWin.length; i++ ){
        wilsonWin[i].addEventListener("click", ganar_partida);
            
        let victorLose = document.querySelectorAll(".victor-win");
        for(let i = 0; i < victorLose.length; i++ ){
        victorLose[i].addEventListener("click", perder_partida);
        }
        let inakiLose = document.querySelectorAll(".inaki-win");
        for(let i = 0; i < inakiLose.length; i++ ){
        inakiLose[i].addEventListener("click", perder_partida);
    }
    }
            setTimeout(() => {
                wilson4.style.marginBottom  = "-360px";
            }, 0)

            setTimeout(() => {
                wilson4.style.marginBottom  = "-530px";
            }, 3000)

            setTimeout(() => {
                inaki1.style.marginBottom  = "-440px";
            }, 0);

            setTimeout(() => {
                inaki1.style.marginBottom  = "-607px";
            }, 3000);

            setTimeout(() => {
                victor6.style.marginBottom  = "-545px";
            }, 0);

            setTimeout(() => {
                victor6.style.marginBottom  = "-694px";
            }, 3000);


        }else {
        let victorWin = document.querySelectorAll(".victor-win");
        for(let i = 0; i < victorWin.length; i++ ){
         victorWin[i].addEventListener("click", ganar_partida);
        
         let wilsonLose = document.querySelectorAll(".wilson-win");
         for(let i = 0; i < wilsonLose.length; i++ ){
          wilsonLose[i].addEventListener("click", perder_partida);
         }
         let inakiLose = document.querySelectorAll(".inaki-win");
         for(let i = 0; i < inakiLose.length; i++ ){
          inakiLose[i].addEventListener("click", perder_partida);
         }
        }
            setTimeout(() => {
                victor4.style.marginBottom  = "-360px";
            }, 0);

            setTimeout(() => {
                victor4.style.marginBottom  = "-530px";
            }, 3000);

            setTimeout(() => {
                inaki2.style.marginBottom  = "-180px";
            }, 0);

            setTimeout(() => {
                inaki2.style.marginBottom  = "-360px";
            }, 3000);

            setTimeout(() => {
                wilson3.style.marginBottom  = "-540px";
            }, 0)

            setTimeout(() => {
                wilson3.style.marginBottom  = "-710px";
            }, 3000)
        }

    }else if(numeroAleatorio == 5){
        if(localStorage.getItem("character") == "Inaki"){
            
        let inakiWin = document.querySelectorAll(".inaki-win");
        for(let i = 0; i < inakiWin.length; i++ ){
        inakiWin[i].addEventListener("click", ganar_partida);
            
        let victorLose = document.querySelectorAll(".victor-win");
        for(let i = 0; i < victorLose.length; i++ ){
        victorLose[i].addEventListener("click", perder_partida);
        }
        let wilsonLose = document.querySelectorAll(".wilson-win");
        for(let i = 0; i < wilsonLose.length; i++ ){
        wilsonLose[i].addEventListener("click", perder_partida);
        }
        
        }
            setTimeout(() => {
                inaki5.style.marginBottom  = "-215px";
            }, 0);

            setTimeout(() => {
                inaki5.style.marginBottom  = "-378px";
            }, 3000);

            setTimeout(() => {
                wilson4.style.marginBottom  = "-360px";
            }, 0)

            setTimeout(() => {
                wilson4.style.marginBottom  = "-530px";
            }, 3000)

            setTimeout(() => {
                victor1.style.marginBottom  = "-440px";
            }, 0);

            setTimeout(() => {
                victor1.style.marginBottom  = "-607px";
            }, 3000);

        
        } else if(localStorage.getItem("character") == "Wilson"){
            let wilsonWin = document.querySelectorAll(".wilson-win");
            for(let i = 0; i < wilsonWin.length; i++ ){
            wilsonWin[i].addEventListener("click", ganar_partida);
                
            let victorLose = document.querySelectorAll(".victor-win");
            for(let i = 0; i < victorLose.length; i++ ){
            victorLose[i].addEventListener("click", perder_partida);
            }
            let inakiLose = document.querySelectorAll(".inaki-win");
            for(let i = 0; i < inakiLose.length; i++ ){
            inakiLose[i].addEventListener("click", perder_partida);
        }
        }
            setTimeout(() => {
                wilson5.style.marginBottom  = "-215px";
            }, 0)

            setTimeout(() => {
                wilson5.style.marginBottom  = "-378px";
            }, 3000)

            setTimeout(() => {
                victor2.style.marginBottom  = "-180px";
            }, 0);

            setTimeout(() => {
                victor2.style.marginBottom  = "-360px";
            }, 3000);

            setTimeout(() => {
                inaki6.style.marginBottom  = "-545px";
            }, 0);

            setTimeout(() => {
                inaki6.style.marginBottom  = "-694px";
            }, 3000);


                
        }else {
            let victorWin = document.querySelectorAll(".victor-win");
            for(let i = 0; i < victorWin.length; i++ ){
             victorWin[i].addEventListener("click", ganar_partida);
            
             let wilsonLose = document.querySelectorAll(".wilson-win");
             for(let i = 0; i < wilsonLose.length; i++ ){
              wilsonLose[i].addEventListener("click", perder_partida);
             }
             let inakiLose = document.querySelectorAll(".inaki-win");
             for(let i = 0; i < inakiLose.length; i++ ){
              inakiLose[i].addEventListener("click", perder_partida);
             }
            }

            setTimeout(() => {
                victor5.style.marginBottom  = "-215px";
            }, 0);

            setTimeout(() => {
                victor5.style.marginBottom  = "-378px";
            }, 3000);

            setTimeout(() => {
                wilson3.style.marginBottom  = "-540px";
            }, 0);

            setTimeout(() => {
                wilson3.style.marginBottom  = "-710px";
            }, 3000);

            setTimeout(() => {
                inaki6.style.marginBottom  = "-545px";
            }, 0);

            setTimeout(() => {
                inaki6.style.marginBottom  = "-694px";
            }, 3000);


        }

    }else {
        if(localStorage.getItem("character") == "Inaki"){
        let inakiWin = document.querySelectorAll(".inaki-win");
        for(let i = 0; i < inakiWin.length; i++ ){
        inakiWin[i].addEventListener("click", ganar_partida);
            
        let victorLose = document.querySelectorAll(".victor-win");
        for(let i = 0; i < victorLose.length; i++ ){
        victorLose[i].addEventListener("click", perder_partida);
        }
        let wilsonLose = document.querySelectorAll(".wilson-win");
        for(let i = 0; i < wilsonLose.length; i++ ){
        wilsonLose[i].addEventListener("click", perder_partida);
        }
        
        }
        
            setTimeout(() => {
                inaki6.style.marginBottom  = "-545px";
            }, 0);

            setTimeout(() => {
                inaki6.style.marginBottom  = "-694px";
            }, 3000);

            setTimeout(() => {
                wilson4.style.marginBottom  = "-360px";
            }, 0)

            setTimeout(() => {
                wilson4.style.marginBottom  = "-530px";
            }, 3000)

            setTimeout(() => {
                victor1.style.marginBottom  = "-440px";
            }, 0);

            setTimeout(() => {
                victor1.style.marginBottom  = "-607px";
            }, 3000);



        } else if(localStorage.getItem("character") == "Wilson"){
            let wilsonWin = document.querySelectorAll(".wilson-win");
            for(let i = 0; i < wilsonWin.length; i++ ){
            wilsonWin[i].addEventListener("click", ganar_partida);
                
            let victorLose = document.querySelectorAll(".victor-win");
            for(let i = 0; i < victorLose.length; i++ ){
            victorLose[i].addEventListener("click", perder_partida);
            }
            let inakiLose = document.querySelectorAll(".inaki-win");
            for(let i = 0; i < inakiLose.length; i++ ){
            inakiLose[i].addEventListener("click", perder_partida);
        }
        }
            setTimeout(() => {
                wilson6.style.marginBottom  = "-545px";
            }, 0);

            setTimeout(() => {
                wilson6.style.marginBottom  = "-694px";
            }, 3000);

            setTimeout(() => {
                victor5.style.marginBottom  = "-215px";
            }, 0);

            setTimeout(() => {
                victor5.style.marginBottom  = "-378px";
            }, 3000);

            setTimeout(() => {
                inaki3.style.marginBottom  = "-540px";
            }, 0);

            setTimeout(() => {
                inaki3.style.marginBottom  = "-710px";
            }, 3000);

     
        }else {
        let victorWin = document.querySelectorAll(".victor-win");
        for(let i = 0; i < victorWin.length; i++ ){
         victorWin[i].addEventListener("click", ganar_partida);
        
         let wilsonLose = document.querySelectorAll(".wilson-win");
         for(let i = 0; i < wilsonLose.length; i++ ){
          wilsonLose[i].addEventListener("click", perder_partida);
         }
         let inakiLose = document.querySelectorAll(".inaki-win");
         for(let i = 0; i < inakiLose.length; i++ ){
          inakiLose[i].addEventListener("click", perder_partida);
         }
        }
        
            setTimeout(() => {
                victor6.style.marginBottom  = "-545px";
            }, 0);

            setTimeout(() => {
                victor6.style.marginBottom  = "-694px";
            }, 3000);

            setTimeout(() => {
                wilson2.style.marginBottom  = "-180px";
            }, 0);

            setTimeout(() => {
                wilson2.style.marginBottom  = "-360px";
            }, 3000);

            setTimeout(() => {
                inaki1.style.marginBottom  = "-440px";
            }, 0);

            setTimeout(() => {
                inaki1.style.marginBottom  = "-607px";
            }, 3000);

   

        }
    }
}

