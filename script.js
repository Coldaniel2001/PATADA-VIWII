/*VARIABLES*/

const comenzarPartida = document.querySelector(".comenzar-partida-padre");
const page1 = document.querySelector(".desktop-1")
const page2 = document.querySelector(".desktop-2")
const easyDif = document.querySelectorAll(".easy-dif");
const usuario = document.querySelector('#quien-eres');
const play = document.querySelector('.formulario-jugar');
const playing = document.querySelector('.playing');
const currentUser = document.querySelector('.current-user');
const countdown = document.querySelector(".countdown")
const getReady = document.querySelector(".get-ready")



/*///////////////////////MODO FACIL///////////////*/

 /* coger todas las imagenes */
 let imgEase = document.querySelectorAll(".img-ease");
 for(let i = 0; i < imgEase.length; i++ ){
     imgEase[i].addEventListener("click", ganar_partida);
 }

/*EVENTOS*/
comenzarPartida.addEventListener("click", function_comenzarPartida);
play.addEventListener("submit", function_play);

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
        if(localStorage.getItem('dificulty') == 'easy') {
            easyMode();
        }
        if(localStorage.getItem('dificulty') == 'dificult') {
            hardMode();
        }
    }
    
    /*COUNTDOWN 5 SEGUNDOS*/
    let contador = 6
    const message = setInterval(()=>{  
        console.log(contador);
        contador--;
        if (contador == 0){
            if(getReady.classList.contains("get-ready"))
            countdown.innerHTML = 'GO!';
        }else if (contador == -1) {
            getReady.classList.replace("get-ready", "get-ready-notShow")
            clearInterval(message);
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

    /*Numero aleatorio*/
    let numeroAleatorio = 1;
    console.log(numeroAleatorio);

    if(numeroAleatorio == 1){
        if(localStorage.getItem("character") == "Inaki"){
            inaki1.style.marginBottom  = "-450px";
            inaki1.style.transition  = "10s";
            
        } else if(localStorage.getItem("character") == "Wilson"){
            wilson1.style.marginBottom  = "-250px";
        }else {
            victor1.style.marginBottom  = "-450px";
        }
    } else if(numeroAleatorio == 2){
        if(localStorage.getItem("character") == "Inaki"){

        } else if(localStorage.getItem("character") == "Wilson"){

        }else {
            
        }
    }else if(numeroAleatorio == 3){
        if(localStorage.getItem("character") == "Inaki"){

        } else if(localStorage.getItem("character") == "Wilson"){

        }else {
            
        }
    }else if(numeroAleatorio == 4){
        if(localStorage.getItem("character") == "Inaki"){

        } else if(localStorage.getItem("character") == "Wilson"){

        }else {
            
        }
    }else if(numeroAleatorio == 5){
        if(localStorage.getItem("character") == "Inaki"){

        } else if(localStorage.getItem("character") == "Wilson"){

        }else {
            
        }
    }else {
        if(localStorage.getItem("character") == "Inaki"){

        } else if(localStorage.getItem("character") == "Wilson"){

        }else {
            
        }
    }

}

/*si ganas*/

function ganar_partida(){
    alert("ganaste");
}



function hardMode() {
    console.log("hard");
}


