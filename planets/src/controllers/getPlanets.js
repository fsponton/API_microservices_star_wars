const Planets = require("../data");
const { response } = require("../utils")

module.exports = async (req, res) => {
  const result = await Planets.list()
  response(res, 200, result.data)
}