const { Schema } = require("mongoose");
const mbbsResultSchema = new Schema({
  name: {
    type: String,
  },
  roll: {
    type: String,
  },
  img: {
    type: String,
  },
  merit_position: {
    type: Number,
  },
  test_score: {
    type: Number,
  },
  merit_score: {
    type: Number,
  },
  college_name: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = mbbsResultSchema;
