// COMENTARIOS: iniciar proyecto con, npm init, crear el archivo index.js, crear servidor, arrancar servidor con node index.js, apagar con ctrl c.

const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hola")
})

// Este es el puerto
app.listen(8080, () => {
    console.log("Servidor funcionando")
})