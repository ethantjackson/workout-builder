const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/workouts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const workoutSchema = {
  muscleGroup: '',
  subMuscles: [],
  equipment: [],
};

const Workout = mongoose.model('Workout', workoutSchema);

app.listen(5000, function () {
  console.log('Server started on port 5000');
});
