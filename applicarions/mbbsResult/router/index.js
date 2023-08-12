const router = require("express").Router();
const findGetController = require("../controllers/findGetController");

router.get("/:year", findGetController);

module.exports = router;
