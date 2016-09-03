var express = require('express');
var router = express.Router();

// Models
var mongoose = require('mongoose');
var productModel = require('../models/product')

/* GET ALL prod. */
router.get('/', function(req, res, next) {
  productModel.find(function (err,todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* GET Product within timeframe */
router.get('/withinTimeframe', function(req, res, next) {
  // GET data
  var _showID = req.query.showID
  var _timestamp = req.query.timestamp
  
  var payload = {}
  payload.l = _location
  payload.s = _start
  res.json(payload)
});

/* Add product */
router.post('/add', function(req,res,next) {
  productModel.create(req.body, function (err,post) {
    if (err) return next(err);
    res.json(post)
  })
})

module.exports = router;
