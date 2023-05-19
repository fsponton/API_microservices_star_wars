const mongoose = require("mongoose");
const { URI_CONNECTION } = require("../enviroments")

const connection = mongoose.createConnection(URI_CONNECTION)


// const Character = connection.model("Character", require("./schemas/characterSchema"))
// const Film = connection.model("Film", require("./schemas/filmSchema"))

// Character.find()
//     .populate("films", ["_id", "title"]) // el character en la prop de films, solo trae objetos con prop _id y title
//     .then(res => console.log(res))

module.exports = {
    Character: connection.model("Character", require("./schemas/characterSchema")),
    Film: connection.model("Film", require("./schemas/filmSchema")),
    Planet: connection.model("Planet", require("./schemas/planetSchema"))
};