const mongoose = require("mongoose");

const weedScheme = mongoose.Schema({
  name: String,
  origin: String,
  image: String,
  flowering_time: String,
  identification: String,
  flora_affected: String,
  damage_caused: String,
  symptom_1: String,
  symptom_2: String,
  symptom_3: Boolean,
  symptom_4: String,
  control_method1: String,
  control_method2: String,
  control_method3: String,
  control_method4: String,
  pesticidecontrol_methods: String
});

module.exports = mongoose.model("pestdata", weedScheme, "pestdata");
