const { Router } = require("express");
const controllers = require("../controllers")

const router = Router();

router.get("/planets", controllers.getPlanets);

module.exports = router;
