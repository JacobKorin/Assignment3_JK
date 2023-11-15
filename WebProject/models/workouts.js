let mongoose = require('mongoose');

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