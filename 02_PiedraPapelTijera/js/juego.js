
//cuando un funcion no tiene parametros dentro de () es por se llama para ejecutarla, cuando tiene es para crearla

//Se declara la funcion
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//Para elegir el tipo de jugada
function eleccion(jugada){
    
    let resultado = ""
        
        if(jugada == 1){
        resultado = "Piedra"

    } else if (jugada == 2){
        resultado = "Papel"

    } else if (jugada == 3){
        resultado = "Tijera "
    } else {
        resultado = "Debe seleccionar una de las 3 opciones"
    }

    return resultado
}

//VARIABLES
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3){
    pc = aleatorio(1,3) // se llama a la funcion

    //MOMENTO DE ELEGIR
    jugador = prompt("Elije 1 para piedra, 2 para papel y 3 para tijera")
    
    //ELECCIONES
    alert("Tu eliges: " + eleccion(jugador))
    alert("PC elige: " + eleccion(pc))
    

    //COMBATE  //&& es un comparador al mismo tiempo
    if(pc == jugador){
        alert("EMPATE")
    } else if(jugador == 1 && pc ==3){
            alert("GANASTE")
            triunfos = triunfos + 1
    } else if(jugador == 2 && pc ==1){
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if(jugador == 3 && pc == 2){
        alert("GANASTE")
        triunfos = triunfos + 1
    }else {
        alert("PERDISTE")
        perdidas = perdidas + 1
    }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");
