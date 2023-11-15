var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

let Workouts = require('../models/workouts.js');
let WorkoutsController = require('../controllers/workouts.js');

// Read Operation
router.get('/', WorkoutsController.DislayWorkoutlist);
/* Get route for Add Book page --> Create */
router.get('/add', WorkoutsController.AddWorkout); 
/* Post route for Add Book page --> Create */
router.post('/add', WorkoutsController.ProcessWorkout);
/* Get route for displaying the Edit Book page --> Update */
router.get('/edit/:id', WorkoutsController.EditWorkout);
/* Post route for processing the Edit Book page --> Update */
router.post('/edit/:id', WorkoutsController.ProcessEditWorkout);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', WorkoutsController.DeleteWorkout);
 module.exports = router;