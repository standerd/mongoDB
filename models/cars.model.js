const mongoose = require("mongoose");

let CarsSchema = mongoose.Schema({
  make: {
    type: String,
    required: true
  },
  modelYear: {
    type: Number,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  reg: {
    type: String,
    required: true
  },
  adress: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model("Cars", CarsSchema);
