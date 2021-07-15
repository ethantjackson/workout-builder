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

// mongoose.connect('mongodb://localhost:27017/workouts', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect(
  'mongodb+srv://Ethan:GigRhgPMm4sbWahT@cluster0.laxv2.mongodb.net/workoutDB?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const workoutSchema = {
  name: String,
  targets: Array,
  equipment: Array,
  demo: String,
  tangents: Array,
  tips: Array,
};

const Workout = mongoose.model('Workout', workoutSchema);

app.route('/workouts').get(function (req, res) {
  Workout.find({}, function (err, foundWorkouts) {
    if (!err) res.send(foundWorkouts);
    else res.send(err);
  });
});

app.listen(5000, function () {
  console.log('Server started on port 5000');
});
