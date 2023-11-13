var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/workouts', function(req, res, next) {
  res.render('index', { title: 'Workout Tracker' });
});

router.get('/weight', function(req, res, next) {
  res.render('index', { title: 'Weight Tracker' });
});

module.exports = router;
