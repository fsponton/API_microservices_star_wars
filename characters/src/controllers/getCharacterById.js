const Characters = require("../data");
const { response } = require("../utils")

module.exports = async (req, res) => {
    const { id } = req.params
    const result = await Characters.getById(id)
    const character = await result.data
    response(res, 200, character)
}


