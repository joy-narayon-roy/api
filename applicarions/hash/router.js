const router = require("express").Router();

const {
  decrypt_get_controller,
  default_controller,
  encrypt_get_controller,
} = require("./controller");

router.get("/e", encrypt_get_controller);

router.get("/d", decrypt_get_controller);
router.get("*", default_controller);

module.exports = router;
