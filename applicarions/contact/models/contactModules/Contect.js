const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: String,
  email: {
    type: String,
    required: true
  },
});

const Contact = model("Contact", contactSchema);

module.exports = Contact;
