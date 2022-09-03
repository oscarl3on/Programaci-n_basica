function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    let inpuntHipodoge = document.getElementById('hipodoge')
    let inpuntCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spandMascotaJugador = document.getElementById('mascota-jugador')

    if (inpuntHipodoge.checked){
        spandMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inpuntCapipepo.checked){
        spandMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked){
        spandMascotaJugador.innerHTML = 'Ratigueya'
    } else if (inputTucapalma.checked){
        spandMascotaJugador.innerHTML = 'Tucapalma'
    } else if (inputPydos.checked){
        spandMascotaJugador.innerHTML = 'Pydos'
    } else {
        alert('No has seleccionado nada aún')
}
}

window.addEventListener('load', iniciarJuego)