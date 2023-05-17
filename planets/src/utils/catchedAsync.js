module.exports = (fn) => {
    return function (req, res, next) {
        fn(req, res).catch((err) => { // si hay un error ejecutando FN con req y res, mando el error al manejador de exprees
            next(err)  //salto al manejador de errores de express.
        })
    }
}

// functon de orden superior -  que devuelve una function
//module.exports = (fn) => (req, res, next) => fn(req, res).catch((err) => next(err))   - Es lo mismo que lo de arriba