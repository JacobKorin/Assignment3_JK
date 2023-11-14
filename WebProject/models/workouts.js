let mongoose = require('mongoose');

let workoutModel = mongoose.Schema({
    date: String,
    name: String,
    Length: Number,
    Exercises: String
    },
    {
        collection: "workouts"
    }

);

module.exports = mongoose.model('Workouts', workoutModel);