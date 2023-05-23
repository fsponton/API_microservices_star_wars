const { Router } = require("express")
const router = Router();
const middlewares = require("../middlewares")
const controllers = require("../controller")


router.get("/:model", middlewares.validateModel, controllers.getCharacters)


router.get("/:model/:id", middlewares.validateModel, controllers.getCharactersById)


router.post("/:model", middlewares.validateModel, controllers.createCharacter)

module.exports = router;