const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  steps: [
    {
      workout_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workout',
        required: true,
      },
      reps: { type: Number, default: 12, required: true },
      sets: { type: Number, default: 3, required: true },
      setRest: { type: Number, default: 60, required: true },
      workoutRest: { type: Number, default: 120, required: true },
    },
  ],
});

module.exports = mongoose.model('Plan', PlanSchema);
