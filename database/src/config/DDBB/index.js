const mongoose = require("mongoose");
const { URI_CONNECTION } = require("../enviroments")

const connection = mongoose.createConnection(URI_CONNECTION)


module.exports = {
    Character: connection.model("Character", require("./schemas/characterSchema")),
    Film: connection.model("Film", require("./schemas/filmSchema")),
    Planet: connection.model("Planet", require("./schemas/planetSchema"))
};