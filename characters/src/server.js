const express = require("express");
const morgan = require("morgan");

const server = express();
server.use(morgan("dev"));
server.use(express.json());

server.use("/", require("./routes"));

// si uno pone una ruta que no existe se ve el siguiente error.
server.use("*", (req, res) => {
    res.status(404).send("Not found")
})


//los errores q ocurren en cualquier lugar llegan aca, por ejemplo si falta algun dato en un metodo post. 
server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message
    })
})

module.exports = server;
