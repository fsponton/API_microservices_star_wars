const store = require("../config/DDBB/index")
const { response } = require("../utils")

module.exports = async (req, res) => {
    const { model, id } = req.params
    console.log("model", model)
    console.log("id", id)
    const result = await store[model].getById(id)
    response(res, 200, result)
}


