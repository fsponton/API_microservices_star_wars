const axios = require("axios")

module.exports = {
    list: async () => {
        return await axios.get("http:localhost:8004/Character")
    },

    create: async (character) => {
        return await axios({
            method: "post",
            url: "http:localhost:8004/Character",
            data: character
        })
    }
}



