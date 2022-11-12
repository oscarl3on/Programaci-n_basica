// COMENTARIOS: iniciar proyecto con, npm init, crear el archivo index.js, crear servidor, arrancar servidor con node index.js, apagar con ctrl c.

const express = require("express")
const app = express()
app.listen(8080, () => {
    console.log("Servidor funcionando")
})