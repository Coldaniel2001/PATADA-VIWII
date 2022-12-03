/*VARIABLES*/

const comenzarPartida = document.querySelector(".comenzar-partida-padre");
const page1 = document.querySelector(".desktop-1")
const page2 = document.querySelector(".desktop-2")


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