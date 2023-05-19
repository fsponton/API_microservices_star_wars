const { Router } = require("express")
const store = require("../config/DDBB/index")
const router = Router();
const { validateModel } = require("../middlewares")

router.get("/:model", validateModel, async (req, res) => {
    const { model } = req.params
    const response = await store[model].list()
    res.status(200).json(response)
})



router.get("/:model/:id", validateModel, async (req, res) => {
    const { model, id } = req.params
    const response = await store[model].getById(id)
    res.status(200).json(response)
})


router.post("/:model", validateModel, async (req, res) => {
    const { model } = req.params
    const character = req.body

    const response = await store[model].create(character)

    res.status(200).json(response)
})


module.exports = router;