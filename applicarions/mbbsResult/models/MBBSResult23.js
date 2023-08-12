const { model } = require("mongoose");
const mbbsResultSchema = require("./mbbsResultSchema");
const MBBSResult23 = model("MBBSResult23", mbbsResultSchema);
module.exports = MBBSResult23;
