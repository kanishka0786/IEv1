const mongoose = require("mongoose");

const weedScheme = mongoose.Schema({
  name: String,
  origin: String,
  image: String,
  flowering_time: String,
  identification: String,
  flora_affected: String,
  damage_caused: String,
  symptoms: String,
  organic_control_methods: String,
  pesticidecontrol_methods: String
});

module.exports = mongoose.model("pestdata", weedScheme, "pestdata");
