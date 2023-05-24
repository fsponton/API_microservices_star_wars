const { catchedAsync } = require("../utils")

module.exports = {
    getList: catchedAsync(require("./getList")),
    getById: catchedAsync(require("./getById")),
    createCharacter: catchedAsync(require("./createCharacter"))
}