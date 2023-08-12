/**
 * 
 * @param {Error} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports = function (err, req, res, next) {
  console.log(`${req.method} - ${req.path} - error : ${err.message}`);
  res.status(err.status||500).json({
    message: err.message,
  });
};
