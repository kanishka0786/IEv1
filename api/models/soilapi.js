const mongoose = require("mongoose");

const soilapi = mongoose.Schema({
  name: String,
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
  New_Flower_Time: String,
  Soil_type: String,
  origin: String,
  notifiable: Boolean
});

module.exports = mongoose.model("soilapi", soilapi, "soilapi");
