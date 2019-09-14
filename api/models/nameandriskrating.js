const mongoose = require("mongoose");

const weedScheme3 = mongoose.Schema({
  id: Number,
  Name: String,
  riskrating: String
});

module.exports = mongoose.model(
  "nameandriskrating",
  weedScheme3,
  "nameandriskrating"
);
