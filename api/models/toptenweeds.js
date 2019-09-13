const mongoose = require("mongoose");

const weedScheme3 = mongoose.Schema({
  id: Number,
  name: String,
  council_declaration: String,
  image: String,
  c_names: String,
  species_name: String,
  family: String,
  growth_form: String,
  flower_color: String,
  leaf_arr: String,
  foliage_color: String,
  deciduous: Boolean,
  flowering_time: String,
  control_methods: String,
  origin: String,
  notifiable: Boolean,
  riskranking_score: Number
});

module.exports = mongoose.model("toptenweeds", weedScheme3, "toptenweeds");
