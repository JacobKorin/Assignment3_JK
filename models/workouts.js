let mongoose = require('mongoose');

//Schema for my database
let workoutModel = mongoose.Schema({
    Name: String,
    Date: String,
    Length: Number,
    Exercises: String
    },
    {
        collection: "workouts"
    }

);

module.exports = mongoose.model('Workouts', workoutModel);