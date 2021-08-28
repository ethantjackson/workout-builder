import React from 'react';
import PlanEditor from '../components/plans/PlanEditor';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setPlanID,
  setPlanName,
  setPlanSteps,
  addPlan,
} from '../actions/WorkoutPlanActions';
import BackButton from '../components/layout/backButton/BackButton';
import NextButton from '../components/layout/nextButton/NextButton';
import M from 'materialize-css/dist/js/materialize.min.js';

const NewPlanPage = ({
  name,
  steps,
  setPlanID,
  setPlanName,
  setPlanSteps,
  addPlan,
}) => {
  const handleSave = (e) => {
    const checkValidInput = () => {
      for (const step of steps) {
        if (
          isNaN(step.reps) ||
          isNaN(step.sets) ||
          isNaN(step.setRest) ||
          isNaN(step.workoutRest)
        )
          return false;
        if (step.reps <= 0 || step.sets <= 0) return false;
        if (step.setRest < 0 || step.workoutRest < 0) return false;
      }
      return true;
    };
    const isValidInput = checkValidInput();
    if (name.length > 0 && steps.length > 0 && isValidInput) {
      addPlan({
        name: name,
        steps: steps.map(({ _id, ...rest }) => rest),
      });
      setPlanID(null);
      setPlanSteps([]);
      setPlanName('');
    } else {
      if (name.length <= 0) {
        e.preventDefault();
        M.toast({ html: 'Please enter a plan name...' });
      }
      if (steps.length <= 0) {
        e.preventDefault();
        M.toast({ html: 'Please add at least one step...' });
      }
      if (!isValidInput) {
        e.preventDefault();
        M.toast({ html: 'Please provide valid reps, sets, and rest times...' });
      }
    }
  };

  return (
    <>
      <div className='container'>
        <h1 className='instructionsHeader'>New Workout Plan</h1>
        <PlanEditor
          planName={name}
          setPlanName={setPlanName}
          planSteps={steps}
          setPlanSteps={setPlanSteps}
        />
      </div>
      <BackButton
        altText={'CANCEL'}
        target='/home-page'
        onClick={() => {
          setPlanID(null);
          setPlanName('');
          setPlanSteps([]);
        }}
      />
      <NextButton
        altText={'SAVE PLAN'}
        target='/home-page'
        onClick={handleSave}
      />
    </>
  );
};

NewPlanPage.propTypes = {
  name: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
  setPlanID: PropTypes.func.isRequired,
  setPlanName: PropTypes.func.isRequired,
  setPlanSteps: PropTypes.func.isRequired,
  addPlan: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.plan.name,
  steps: state.plan.steps,
});

export default connect(mapStateToProps, {
  setPlanID,
  setPlanName,
  setPlanSteps,
  addPlan,
})(NewPlanPage);
