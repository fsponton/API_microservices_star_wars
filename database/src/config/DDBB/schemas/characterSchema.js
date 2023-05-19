const { Schema } = require("mongoose")

const genderSchema = Schema({
    status: {
        type: String,
        enum: ['female', 'men', 'N/A']
    }
})

const characterSchema = Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: genderSchema,
    homeworld: { type: String, ref: "Planet" }, //REFERENCIA AL ID DEL PLANETA
    films: [{ type: String, ref: "Film" }] // ARRAY DE REFERECNIA A PELICULAS
})

//listar characters
characterSchema.statics.list = async function () {
    return await this.find()
        .populate("homeworld", ["name"])
        .populate("films", ["title"])
}

//Get character by id
characterSchema.statics.getById = async function (id) {
    return await this.findById(id)
        .populate("homeworld", ["name"])
        .populate("films", ["title", "release_date"])
}

characterSchema.statics.insert = async function (character) {
    return await this.create(character)
}

module.exports = characterSchema;