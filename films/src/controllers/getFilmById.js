const Films = require("../data");
const { response } = require("../utils")

module.exports = async (req, res) => {
    const result = await Films.getById(id)
    const film = await result.data
    response(res, 200, film)
}


