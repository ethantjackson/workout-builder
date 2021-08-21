import React from 'react';
import PropTypes from 'prop-types';
import PlanStep from './PlanStep';
import './PlanEditor.css';

//setName
//PlanStep
//newPlanStep
const PlanEditor = ({ planName, planSteps, setPlanName, setPlanSteps }) => {
  const deleteStep = (id) => {
    setPlanSteps(planSteps.filter((step) => step._id !== id));
  };
  const editStep = (newVals, id) => {
    const editIdx = planSteps.findIndex((step) => step._id === id);
    const newStep = { ...planSteps[editIdx], ...newVals };
    let newPlanSteps = planSteps;
    newPlanSteps[editIdx] = newStep;
    setPlanSteps([...newPlanSteps]);
  };

  return (
    <div className='planEditor'>
      {planSteps.map((step, index) => {
        return (
          <PlanStep
            key={step._id + index}
            step={step}
            deleteStep={deleteStep}
            editStep={editStep}
          />
        );
      })}
      <div className='addStepDiv'>+ Add Workout</div>
    </div>
  );
};

PlanEditor.propTypes = {
  planName: PropTypes.string.isRequired,
  setPlanName: PropTypes.func.isRequired,
  planSteps: PropTypes.array.isRequired,
  setPlanSteps: PropTypes.func.isRequired,
};

export default PlanEditor;
