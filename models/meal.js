const mongoose = require('mongoose');

var mealSchema = mongoose.Schema({
  meal: String,
  name: String,
  delivery_adress: String,
  phone: String,
  beverage: String
});

module.exports = mongoose.model('meal', mealSchema);
