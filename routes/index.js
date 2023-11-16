var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

//Get workouts page
router.get('/workouts', function(req, res, next) {
  res.render('index', { title: 'Workout Tracker' });
});

module.exports = router;