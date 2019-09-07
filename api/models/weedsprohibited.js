const mongoose = require("mongoose");

const weedScheme1 = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Name: String,
  Description: String,
  Picture: String
});

module.exports = mongoose.model(
  "weedsprohibited",
  weedScheme1,
  "weedsprohibited"
);
