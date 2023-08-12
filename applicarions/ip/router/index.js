const myIpGetController = require("../controller/myIpGetController");

const router = require("express").Router();

router.get("/", myIpGetController);

module.exports = router;
