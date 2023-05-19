module.exports = (req, res, next) => {
    const { model } = req.params

    if (!["Character", "Film", "Planet"].includes(model)) {
        throw Error("Invalid model/route")
    }


    next()
}