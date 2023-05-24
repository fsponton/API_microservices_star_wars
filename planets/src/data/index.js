const axios = require("axios")

module.exports = {
    list: async () => {
        return await axios.get("http://database:8004/Planet")
    }
}