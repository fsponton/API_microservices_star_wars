const axios = require("axios")

module.exports = {
    list: async () => {
        return await axios.get("http://database:8004/Character")
    },

    create: async (formCharacter) => {
        return await axios({
            method: "post",
            url: "http://database:8004/Character",
            data: formCharacter,
        })
    },

    getById: async (id) => {
        return await axios({
            method: "get",
            url: `http://database:8004/Character/${id}`
        })
    }
}



