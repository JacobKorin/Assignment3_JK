var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Workouts = require('../models/workouts.js');

//Defining a function to display all the workouts
module.exports.DislayWorkoutlist = async (req,res,next)=>{
    try{
       var WorkoutList = await Workouts.find(); 

       //when function call render book/list
       res.render('book/list', {
          title: 'Workout List', 
          WorkoutList: WorkoutList
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('book/list', {
          error: 'Error on server'
       });
    }
 };

 //Defining a function render the add workout page
 module.exports.AddWorkout = async (req,res,next)=>{
    try{
        res.render('book/add',
        {
            title:'Add Workout'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('book/list',
        {
            error: 'Error on the server'
        });
    }
};

//Defining a function to update the database after a new workout has been added
module.exports.ProcessWorkout = async (req,res,next)=>{
    try{
        let newWorkout = Workouts({
            "Name":req.body.Name,
            "Date": req.body.Date,
            "Length": req.body.Length,
            "Exercises": req.body.Exercises
        });
        Workouts.create(newWorkout).then(() =>{
            res.redirect('/workoutslist')
        })
    }
    catch(error){
        console.error(error);
        res.render('book/list',
        {
            error: 'Error on the server'
        });
    }
};

//Defining a function to render the page that allows the user to edit a db entry
module.exports.EditWorkout = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const workoutToEdit = await Workouts.findById(id);
    res.render('book/edit',
    {
        title:'Edit Book',
        Workouts:workoutToEdit
    })
}
catch(error){
    //console.error(err);
    res.render('book/list',
    {
        error: 'Error on the server'
    });
}
}

//Defining a function to update the database after a workout has been edited
module.exports.ProcessEditWorkout = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedWorkout = Workouts({
            "_id":id,
            "Name":req.body.name,
            "Date": req.body.date,
            "Length": req.body.Length,
            "Exercises": req.body.Exercises,
        });
        Workouts.findByIdAndUpdate(id,updatedWorkout).then(()=>{
            res.redirect('/workoutslist')
        });
    }
    catch(error){
        //console.error(err);
        res.render('book/list',
        {
            error: 'Error on the server'
        });
    }
}

//Defining a function to delete an entry from the db
module.exports.DeleteWorkout = (req,res,next)=>{
    try{
        let id = req.params.id;
        Workouts.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/workoutslist')
        })
    }
    catch(error){
        //console.error(err);
        res.render('book/list'),
        {
            error: 'Error on the server'
        };
    }
}