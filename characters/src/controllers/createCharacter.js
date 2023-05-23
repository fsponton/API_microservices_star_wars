const Character = require("../data")
const { response } = require("../utils")

module.exports = async (req, res) => {
    const form = req.body
    const result = await Character.create(form)
    const newCharacter = await result.data
    response(res, 201, newCharacter)
}



