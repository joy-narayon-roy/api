const MBBSResult23 = require("../models/MBBSResult23");
function findGetController(req, res, errorHandel) {
  const { year } = req.params;
  let { roll, limit = 100, current = 1 } = req.query;
  if (roll) {
    MBBSResult23.findOne({
      roll,
    }).then((data) => {
      res.status(200).json(data);
    });
  } else {
    MBBSResult23.find()
      .skip((current - 1) * limit)
      .limit(limit)
      .then((data) => {
        res.status(200).json({
          data,
          page: {
            limit,
            current,
          },
        });
      });
  }
}
module.exports = findGetController;

/**
 * .skip((current - 1) * limit)
    .limit(limit)
    .then((data) => {
      //   console.clear();
      delete data[0].img;
      console.log(data[0].img);
    });
 */

/**
       if (limit && (!next || !preveous)) {
    if (!next) {
      next = limit;
    }
    if (!preveous) {
      preveous = next - limit;
    }
  }
     */
