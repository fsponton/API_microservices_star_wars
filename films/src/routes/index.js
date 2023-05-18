const { Router } = require("express");
const controller = require("../controllers")

const router = Router();

router.get("/films", controller.getFilms);

module.exports = router;
