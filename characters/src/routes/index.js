const { Router } = require("express");
const controllers = require("../controllers")
const middleware = require("../middlewares")

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("Hello, you are in microservices of CHARACTERS")
});

router.get("/characters", controllers.getCharacters);

router.post("/createCharacter", middleware.characterValidation, controllers.createCharacter)

module.exports = router;
