const mongoose = require("mongoose");

const weedScheme4 = mongoose.Schema({
  percentageofweeds: Number,
  numberofweeds: Number,
  riskrating: String
});

module.exports = mongoose.model(
  "riskratingpiechart",
  weedScheme4,
  "riskratingpiechart"
);
