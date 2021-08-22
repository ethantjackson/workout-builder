import React from 'react';
import PropTypes from 'prop-types';
import PlanStep from './PlanStep';
import { useHistory } from 'react-router-dom';
import './PlanEditor.css';

//setName
//PlanStep
//newPlanStep
const PlanEditor = ({ planName, planSteps, setPlanName, setPlanSteps }) => {
  let history = useHistory();
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
      <div className='row'>
        <div className='input-field col s12 m6 offset-m3 l4 offset-l4'>
          <input
            id='planName'
            type='text'
            value={planName}
            onChange={(e) => setPlanName(e.target.value)}
          />
          <label htmlFor='planName' className='active'>
            Plan Name
          </label>
        </div>
      </div>
      {planSteps.map((step, index) => (
        <PlanStep
          key={step._id + index}
          step={step}
          deleteStep={deleteStep}
          editStep={editStep}
          isLast={index === planSteps.length - 1 ? true : false}
        />
      ))}
      <div className='addStepDiv' onClick={() => history.push('/add-step')}>
        + Add Step
      </div>
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
