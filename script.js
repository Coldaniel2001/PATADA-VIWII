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
    
    let contador = 5
    const message = setInterval(()=>{  
        console.log(contador);
        contador--;
        if (contador == -1){
            if(getReady.classList.contains("get-ready"))
            getReady.classList.replace("get-ready", "get-ready-notShow")
            clearInterval(message);
        }

    }, 1000);
    for(i=0; countdown.length; i++){
        countdown[i].innerText += contador;
    }

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
    console.log("easy");
    
}


function hardMode() {
    console.log("hard");
}