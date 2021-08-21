const express = require('express');
const workoutRouter = express.Router();
const Workout = require('../models/Workout');

const _ = require('lodash');

workoutRouter.get('/:id', (req, res) => {
  const workoutID = req.params.id;
  Workout.findById(workoutID, function (err, foundWorkout) {
    if (!err) res.send(foundWorkout);
    else res.send(err);
  });
});

workoutRouter.get('/workouts/:targets&:equipment', (req, res) => {
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

workoutRouter.get('/equipment/:targets', (req, res) => {
  const targetsString = req.params.targets;
  const targets = targetsString.split('-').map((target) => _.startCase(target));

  Workout.find({ targets: { $in: targets } }, function (err, foundWorkouts) {
    if (!err) {
      let equipmentOptions = [];
      foundWorkouts.forEach((workout) => {
        workout.equipment.forEach((equipmentArr) => {
          equipmentArr.forEach((equipment) => {
            if (equipmentOptions.indexOf(equipment) === -1)
              equipmentOptions.push(equipment);
          });
        });
      });
      res.send(equipmentOptions);
    } else res.send(err);
  });
});

module.exports = workoutRouter;
