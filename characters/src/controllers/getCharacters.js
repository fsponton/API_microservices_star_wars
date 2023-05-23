const Characters = require("../data");
const { response } = require("../utils")

module.exports = async (req, res) => {
    const result = await Characters.list()
    const characters = await result.data
    response(res, 200, characters)
}


