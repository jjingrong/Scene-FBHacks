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

/* GET Product for show */
router.get('/getForShow', function(req, res, next) {
  // GET data
  var _showID = req.query.showID
  
  productModel.find({show: _showID} , function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Add product */
router.post('/add', function(req,res,next) {
  productModel.create(req.body, function (err,post) {
    if (err) return next(err);
    res.json(post)
  })
})

module.exports = router;
