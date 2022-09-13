let ataqueJugador

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego
    let botonAgua
    let botonTierra
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
    let ataqueAleatorio = aleatorio(1,6)
    let spandMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1){
        spandMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2){
        spandMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (ataqueAleatorio == 3){
        spandMascotaEnemigo.innerHTML = 'Ratigueya'
    } else if (ataqueAleatorio == 4){
        spandMascotaEnemigo.innerHTML = 'Langostelvis'
    } else if (ataqueAleatorio == 5){
        spandMascotaEnemigo.innerHTML = 'Tucapalma'
    } else {
        spandMascotaEnemigo.innerHTML = 'Pydos'
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)