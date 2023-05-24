const { ClientError } = require("../utils/errors")

module.exports = (req, res, next) => {
    const { body } = req

    for (let prop in body) {
        if (!body[prop]) throw new ClientError(`Falta el valor de ${prop}`, 401)
    }

    next()
}


