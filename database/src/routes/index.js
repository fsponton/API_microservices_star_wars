const { Router } = require("express")
const router = Router();
const middlewares = require("../middlewares")
const controllers = require("../controller")


//routes of characters
router.get("/:model", middlewares.validateModel, controllers.getList)


router.get("/:model/:id", middlewares.validateModel, controllers.getById)


router.post("/:model", middlewares.validateModel, controllers.createCharacter)



module.exports = router;