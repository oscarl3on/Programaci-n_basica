let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3



function iniciarJuego(){
  

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionSeleccionarReiniciar = document.getElementById('reiniciar')
    sectionSeleccionarReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inpuntHipodoge = document.getElementById('hipodoge')
    let inpuntCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spandMascotaJugador = document.getElementById('mascota-jugador')

    if (inpuntHipodoge.checked){
        spandMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inpuntCapipepo.checked){
        spandMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked){
        spandMascotaJugador.innerHTML = 'Ratigueya'
    }else if (inputLangostelvis.checked){
        spandMascotaJugador.innerHTML = 'Langostelvis'
    }else if (inputTucapalma.checked){
        spandMascotaJugador.innerHTML = 'Tucapalma'
    } else if (inputPydos.checked){
        spandMascotaJugador.innerHTML = 'Pydos'
    } else {
        alert('No has seleccionado nada aún')
}

seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,6)
    let spandMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1){
        spandMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2){
        spandMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (mascotaAleatoria == 3){
        spandMascotaEnemigo.innerHTML = 'Ratigueya'
    } else if (mascotaAleatoria == 4){
        spandMascotaEnemigo.innerHTML = 'Langostelvis'
    } else if (mascotaAleatoria == 5){
        spandMascotaEnemigo.innerHTML = 'Tucapalma'
    } else {
        spandMascotaEnemigo.innerHTML = 'Pydos'
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    } else{
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")

    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    }else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()

}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal('FELICITACIONES 😲 Ganaste 🤗')
    } else if (vidasJugador == 0){
        crearMensajeFinal('LO SIENTO PERDISTE 🤐')
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + '-' + resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionSeleccionarReiniciar = document.getElementById('reiniciar')
    sectionSeleccionarReiniciar.style.display = 'block'
}

function reiniciarJuego (){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)