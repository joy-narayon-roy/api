/**
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Function} next
 */
function myIpGetController(req, res, next) {
  const clientIP = req.ip;
  res.status(200).json({
    ip: "Top secret",
  });
}

module.exports = myIpGetController;
