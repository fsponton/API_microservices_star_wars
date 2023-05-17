const { Router } = require("express");
const controllers = require("../controllers")

const router = Router();

router.get("/", (req, res) => res.status(200).send("Hello, you are in microservices of Planets"));

router.get("/planets", controllers.getPlanets);

module.exports = router;
