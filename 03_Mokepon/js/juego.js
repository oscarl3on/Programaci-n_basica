let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador(){
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
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE")
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje("GANASTE")
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje("GANASTE")
    }else {
        crearMensaje("PERDISTE")
    }

}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + '-' + resultado

    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)