const { ClientError } = require("../utils/errors")

module.exports = (req, res, next) => {
    // const { name } = req.body
    // if (name) return next()
    // else throw new ClientError("Error en el nombre", 401)

    const { body } = req

    for (let prop in body) {
        const value = body[prop]
        if (value === null) throw new ClientError(`Falta el valor de ${prop}`, 401)
    }


}