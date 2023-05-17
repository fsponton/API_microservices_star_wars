const Characters = require("../data");
const { response } = require("../utils")

module.exports = async (req, res) => {
    response(res, 200, await Characters.list())
}


