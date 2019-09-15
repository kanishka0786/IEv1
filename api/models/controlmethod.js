const mongoose = require("mongoose");

const weedScheme6 = mongoose.Schema({
  Controlmethod: String,
  Descrption: String,
  equipment: String,
  Details: String,
  safetygear: String,
  Video: String,
  Image: String
});

module.exports = mongoose.model(
  "controlmethods",
  weedScheme6,
  "controlmethods"
);
