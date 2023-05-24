const store = require("../config/DDBB/index")
const { response } = require("../utils")

module.exports = async (req, res) => {
    const { model } = req.params
    const result = await store[model].list()
    response(res, 200, result)
}