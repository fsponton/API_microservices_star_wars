const { Schema } = require("mongoose")


const filmSchema = Schema({
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: String,
    characters: [{ type: String, ref: "Character" }],  // ARRAY DE REFERECNIA A CHARACTERS
    planets: [{ type: String, ref: "Planet" }],//REFERENCIA AL ID DEL PLANETA
})

filmSchema.statics.list = async function () {
    return await this.find()
        .populate("characters", ["name"])
        .populate("planets", ["name"])
}

filmSchema.statics.getById = async function () {
    return await this.findById(id)
}

module.exports = filmSchema;