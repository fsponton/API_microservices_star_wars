const { Router } = require("express");
const controllers = require("../controllers")
const middlewares = require("../middlewares")

const router = Router();


router.get("/characters", controllers.getCharacters);

router.post("/characters/create", middlewares.characterValidation, controllers.createCharacter)

module.exports = router;
