function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
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

    if (ataqueAleatorio == 1){
        //Hipodoge
    } else if (ataqueAleatorio == 2){
        //Capipepo
    } else if (ataqueAleatorio == 3){
        //Ratigueya
    } else if (ataqueAleatorio == 4){
        //Langostelvis
    } else if (ataqueAleatorio == 5){
        //Tucapalma
    } else {
        //Ratigueya
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)