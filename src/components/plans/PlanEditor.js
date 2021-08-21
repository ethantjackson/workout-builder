import React from 'react';
import PropTypes from 'prop-types';
import PlanStep from './PlanStep';
import './PlanEditor.css';

//setName
//PlanStep
//newPlanStep
const PlanEditor = ({ plan }) => {
  return (
    <div className='planEditor'>
      {plan.steps.map((step, index) => (
        <PlanStep key={step.workout_id + index} workoutID={step.workout_id} />
      ))}
      <div className='addStepDiv'>+ Add Workout</div>
    </div>
  );
};

PlanEditor.propTypes = {
  plan: PropTypes.object.isRequired,
};

export default PlanEditor;
