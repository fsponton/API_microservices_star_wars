const Films = require("../data");



module.exports = async (req, res) => {
  res.status(200).json(await Films.list())
}