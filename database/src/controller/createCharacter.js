const store = require("../config/DDBB/index")
const { response } = require("../utils")

module.exports = async (req, res) => {
    const { model } = req.params
    const formCharacter = req.body
    const result = await store[model].insert(formCharacter)
    response(res, 201, result)
}


