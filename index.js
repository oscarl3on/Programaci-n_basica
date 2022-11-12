// COMENTARIOS: iniciar proyecto con, npm init, crear el archivo index.js, crear servidor, arrancar servidor con node index.js, apagar con ctrl c.
// npm install express

// Importación de librerias
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

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

    res.setHeader("Acces-Control-Allow-Origin", "*")

    res.send(id)
})

app.post("/mokepon/:jugadorId",(req, res) => {
    const jugadorId = req.params.jugadorId || ""
    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

// Este es el puerto
app.listen(8080, () => {
    console.log("Servidor funcionando")
})