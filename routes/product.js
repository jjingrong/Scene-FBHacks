var express = require('express');
var router = express.Router();

// Models
var mongoose = require('mongoose');
var productModel = require('../models/product')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Product page' });
});

/* GET Product. */
router.get('/withinTimeframe', function(req, res, next) {
  // GET data
  var _location = req.query.showID
  var _start = req.query.timestamp
  
  var obj = {}
  obj.l = _location
  obj.s = _start
  res.json(obj)
});

/* Add product */
router.post('/addProduct', function(req,res,next) {
  productModel.create(req.body, function (err,post) {
    if (err) return next(err);
    res.json(post)
  })
})

module.exports = router;
