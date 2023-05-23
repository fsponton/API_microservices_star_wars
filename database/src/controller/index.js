const { catchedAsync } = require("../utils")

module.exports = {
    getCharacters: catchedAsync(require("./getCharacters")),
    getCharactersById: catchedAsync(require("./getCharacterById")),
    createCharacter: catchedAsync(require("./createCharacter"))
}