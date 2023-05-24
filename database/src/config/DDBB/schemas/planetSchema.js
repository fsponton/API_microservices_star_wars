const { Schema } = require("mongoose")


const planetSchema = Schema({
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: [{ type: String, ref: "Character" }],
    films: [{ type: String, ref: "Film" }]
})

planetSchema.statics.list = async function () {
    return await this.find()
        .populate("residents", ["name"])
        .populate("films", ["name"])
}

planetSchema.statics.getById = async function (id) {
    return await this.findById(id)
}

module.exports = planetSchema;