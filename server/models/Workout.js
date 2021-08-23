const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  targets: { type: Array, required: true },
  equipment: { type: Array, required: true },
  demo: { type: String, required: true },
  tangents: { type: Array, required: true },
  tips: { type: Array, required: true },
});

module.exports = mongoose.model('Workout', WorkoutSchema);
