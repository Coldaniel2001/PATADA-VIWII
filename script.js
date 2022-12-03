/*VARIABLES*/

const comenzarPartida = document.querySelector(".comenzar-partida-padre");
const page1 = document.querySelector(".desktop-1")
const page2 = document.querySelector(".desktop-2")
const easyDif = document.querySelectorAll(".easy-dif");
const easy = document.querySelector('#easy');
const dificult = document.querySelector('#dificult');
const selectWho = document.querySelectorAll(".select-who");
const inaki = document.querySelector('#inaki');
const wilson = document.querySelector('#wilson');
const victor = document.querySelector('#victor');
const usuario = document.querySelector('#quien-eres');

/*CICLOS FOR*/
for (let i = 0; i < easyDif.length; i++) {
    easyDif[i].addEventListener('click', function_easyDif);
}

for (let i = 0; i < selectWho.length; i++) {
    selectWho[i].addEventListener('click', function_selectWho);
}

/*EVENTOS*/
comenzarPartida.addEventListener("click", function_comenzarPartida)


/*FUNCIONES*/
function function_comenzarPartida () {
    if(page1.classList.contains("desktop-1")){
        page1.classList.replace("desktop-1", "desktop-1-notShow")
    }

    if(page2.classList.contains("desktop-2")){
        page2.classList.replace("desktop-2", "desktop-2-show")
    }
}

function function_easyDif () {
    if(easy.checked) {
        localStorage.setItem("dificulty", 'easy');
    }
    if(dificult.checked) {
        localStorage.setItem("dificulty", 'dificult');
    }
}

function function_selectWho () {
    if(inaki.checked) {
        localStorage.setItem('character', 'Inaki');
    }
    if(wilson.checked) {
        localStorage.setItem('character', 'Wilson');
    }
    if(victor.checked) {
        localStorage.setItem('character', 'Victor');
    }
}

