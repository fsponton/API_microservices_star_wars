const axios = require("axios")

module.exports = {
    list: async () => {
        return await axios.get("http://database:8004/Film")
    },

    getById: async () => {
        return await axios({
            method: "get",
            url: `http://datanase:8004/Film/${id}`
        })
    }
}