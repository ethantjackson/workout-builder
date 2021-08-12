const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  steps: [
    {
      workout: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workout',
        required: true,
      },
      reps: { type: Number, required: true },
      sets: { type: Number, required: true },
      setRest: { type: Number, required: true },
      workoutRest: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model('Plan', PlanSchema);
