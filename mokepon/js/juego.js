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

    if (inpuntHipodoge.checked){
        alert("Seleccionaste a Hipodoge")
    } else if (inpuntCapipepo.checked){
        alert("Seleccionaste a Capipepo")
    } else if (inputRatigueya.checked){
        alert("Selecionaste a Ratigueya")
    } else if (inputTucapalma.checked){
        alert("Seleccionaste a Tucapalma")
    } else if (inputPydos.checked){
        alert("Seleccionaste a Pydos")
    } else {
        alert('No has seleccionado nada aún')
}
}

window.addEventListener('load', iniciarJuego)