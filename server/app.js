const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');

var dotenv = require('dotenv');
dotenv.config();
var url = process.env.MONGO_URI;

const _ = require('lodash');

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

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const workoutSchema = {
  name: String,
  targets: Array,
  equipment: Array,
  demo: String,
  tangents: Array,
  tips: Array,
};

const Workout = mongoose.model('Workout', workoutSchema);

app.route('/workouts/:targets&:equipment').get(function (req, res) {
  const targetsString = req.params.targets;
  const equipmentString = req.params.equipment;

  const targets = targetsString.split('-').map((target) => _.startCase(target));
  const equipment = equipmentString
    .split('-')
    .map((equipment) => _.startCase(equipment));

  Workout.aggregate(
    [
      {
        $match: {
          $and: [
            { targets: { $in: targets } },
            {
              equipment: {
                $elemMatch: { $not: { $elemMatch: { $nin: equipment } } },
              },
            },
          ],
        },
      },
    ],
    function (err, found) {
      if (!err) res.send(found);
      else res.send(err);
    }
  );
});

app.route('/equipment/:targets').get(function (req, res) {
  const targetsString = req.params.targets;
  const targets = targetsString.split('-').map((target) => _.startCase(target));
  // console.log(targets);

  Workout.find({ targets: { $in: targets } }, function (err, foundWorkouts) {
    if (!err) {
      // console.log(foundWorkouts);
      let equipmentOptions = [];
      foundWorkouts.forEach((workout) => {
        workout.equipment.forEach((equipmentArr) => {
          equipmentArr.forEach((equipment) => {
            // console.log(equipment);
            if (equipmentOptions.indexOf(equipment) === -1)
              equipmentOptions.push(equipment);
          });
        });
      });
      // console.log(equipmentOptions);
      res.send(equipmentOptions);
    } else res.send(err);
  });
});

app.listen(5000, function () {
  console.log('Server started on port 5000');
});
