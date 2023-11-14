let mongoose = require('mongoose');

let workoutModel = mongoose.Schema({
    date: String,
    name: String,
    Length: Number,
    Exercises: String
    },
    {
        collection: "workout_tracker"
    }

);

module.exports = mongoose.model('Workouts', workoutModel);