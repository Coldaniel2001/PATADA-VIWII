/*VARIABLES*/

const comenzarPartida = document.querySelector(".comenzar-partida-padre");
const page1 = document.querySelector(".desktop-1")
const page2 = document.querySelector(".desktop-2")
const easyDif = document.querySelectorAll(".easy-dif");
const usuario = document.querySelector('#quien-eres');
const play = document.querySelector('.formulario-jugar');
const playing = document.querySelector('.playing');
const winner = document.querySelector('.winner');
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
        
    }
    
    /*COUNTDOWN 5 SEGUNDOS*/
    let contador = 2
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
    if(numeroAleatorio == 1){
        if(localStorage.getItem("character") == "Inaki"){
            
            setTimeout(() => {
                inaki1.style.marginBottom  = "-440px";
            }, 0);

        } else if(localStorage.getItem("character") == "Wilson"){
            
            setTimeout(() => {
                wilson1.style.marginBottom  = "-440px";
            }, 0);
           
        }else {
            
            setTimeout(() => {
                victor1.style.marginBottom  = "-440px";
            }, 0);
        }
    } else if(numeroAleatorio == 2){
        if(localStorage.getItem("character") == "Inaki"){
            inaki2.style.marginBottom  = "-150px";
            inaki2.style.zIndex = 3;
        } else if(localStorage.getItem("character") == "Wilson"){
            wilson2.style.marginBottom  = "-150px";
            wilson2.style.zIndex = 3;
        }else {
            victor2.style.marginBottom  = "-150px";
            victor2.style.zIndex = 3;
        }
    }else if(numeroAleatorio == 3){
        if(localStorage.getItem("character") == "Inaki"){
            inaki3.style.marginBottom  = "-500px";
            inaki3.style.zIndex = 3;
        } else if(localStorage.getItem("character") == "Wilson"){
            wilson3.style.marginBottom  = "-500px";
            wilson3.style.zIndex = 3;
        }else {
            victor3.style.marginBottom  = "-500px";
            victor3.style.zIndex = 3;
        }
    }else if(numeroAleatorio == 4){
        if(localStorage.getItem("character") == "Inaki"){
            inaki4.style.marginBottom  = "-325px";
            inaki4.style.zIndex = 3;
        } else if(localStorage.getItem("character") == "Wilson"){
            wilson4.style.marginBottom  = "-325px";
            wilson4.style.zIndex = 3;
        }else {
            victor4.style.marginBottom  = "-325px";
            victor4.style.zIndex = 3;
        }
    }else if(numeroAleatorio == 5){
        if(localStorage.getItem("character") == "Inaki"){
            inaki5.style.marginBottom  = "-175px";
            inaki5.style.zIndex = 3;
        } else if(localStorage.getItem("character") == "Wilson"){
            wilson5.style.marginBottom  = "-175px";
            wilson5.style.zIndex = 3;
        }else {
            victor5.style.marginBottom  = "-175px";
            victor5.style.zIndex = 3;
        }
    }else {
        if(localStorage.getItem("character") == "Inaki"){
            inaki6.style.marginBottom  = "-495px";
            inaki6.style.zIndex = 3;
        } else if(localStorage.getItem("character") == "Wilson"){
            wilson6.style.marginBottom  = "-495px";
            wilson6.style.zIndex = 3;
        }else {
            victor6.style.marginBottom  = "-495px";
            victor6.style.zIndex = 3;
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
}



function hardMode() {
    console.log("hard");
}


