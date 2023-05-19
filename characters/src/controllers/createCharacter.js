const Character = require("../data")
const { response } = require("../utils")

module.exports = async (req, res) => {
    const character = req.body
    response(res, 201, await Character.create(character))
}


