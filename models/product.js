var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  // Data from video
  show: String,
  timestamp: Number,
  
  // Data about product
  name: String,
  price: Number,
  url: String,
  thumbnail: String,
  
  // General data
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);
