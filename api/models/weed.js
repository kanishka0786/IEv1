const mongoose = require("mongoose");

const weedScheme = mongoose.Schema({
  id: Number,
  name: String,
  Councildeclaration: String,
  image: String,
  c_names: Array,
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
  notifiable: Boolean
});

module.exports = mongoose.model("Weed", weedScheme, "weeds");
