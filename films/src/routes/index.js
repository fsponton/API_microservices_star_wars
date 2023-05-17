const { Router } = require("express");
const controller = require("../controllers")

const router = Router();

router.get("/", (req, res) => res.status(200).send("Hello, you are in microservices of FILMS"));

router.get("/films", controller.getFilms);

module.exports = router;
