var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  // Data from video
  show: Number, // For demo purposes: 1 is star wars, 2 is silicon valley
  show_timestamp: Number, 
  
  // Data about product
  name: String,
  price: String,
  url: String,
  thumbnail: String,
  
  // General data
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);
