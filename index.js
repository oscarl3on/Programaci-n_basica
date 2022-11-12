// COMENTARIOS: iniciar proyecto con, npm init, crear el archivo index.js, crear servidor, arrancar servidor con node index.js, apagar con ctrl c.
// npm install express

const express = require("express")
const app = express()

const jugadores = []

class Jugador{
    constructor(id) {
        this.id = id
    }
}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`
    
    const jugador = new Jugador(id)
    jugadores.push(jugador)

    res.send(id)
})

// Este es el puerto
app.listen(8080, () => {
    console.log("Servidor funcionando")
})