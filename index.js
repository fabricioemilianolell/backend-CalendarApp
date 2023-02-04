
const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config()
const cors = require("cors");



// crear el servidor de express
const app = express();

// base de datos 
dbConnection()

//CORS 
app.use(cors())

// directorio público
app.use( express.static("public"))


// lectura y parseo del body
app.use(express.json())


// RUTAS
// TODO: auth (autenticación del usuario) // crear, login, renew
app.use("/api/auth", require("./routes/auth"));
//TODO: CRUD: Eventos
app.use("/api/events", require("./routes/events"));


// escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`servidor corriendo en puerto ${ process.env.PORT }`)
})