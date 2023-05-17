const Character = require("../data")
const { response } = require("../utils")

module.exports = async (req, res) => {
    response(res, 201, await Character.create())
}


