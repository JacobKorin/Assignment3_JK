var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

let Workouts = require('../models/workouts');

router.get('/', async(req,res,next) =>{
    try{
        const WorkoutList = await Workouts.find();
        res.render('workouts',{
            title: 'Workouts',
            WorkoutList: WorkoutList
        });
    }catch(err){
        console.error(err);
        res.render('workout_tracker',{
            error: 'Error on server'
        });
    }
});

module.exports = router;