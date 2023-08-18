const Hash = require("./Hash");

function encrypt_get_controller(req, res) {
  let { key, text } = req.headers;
  if (key && text) {
    res.status(200).json(Hash.encrypt(text, key));
  } else {
    res.status(400).json({
      message: "Provide a valid key and text on heder",
    });
  }
}
function decrypt_get_controller(req, res) {
  let { key, text } = req.headers;

  if (key && text) {
    try {
      res.status(200).json(Hash.decrypt({ key, text }));
    } catch (err) {
      res.status(400).json({
        message: "Invaild",
      });
    }
  } else {
    res.status(400).json({
      message: "Provide a valid key and text on heder",
    });
  }
}
function default_controller(req, res) {
  res.status(404).json({
    message: "Not found",
  });
}

module.exports = {
  encrypt_get_controller,
  decrypt_get_controller,
  default_controller,
};
