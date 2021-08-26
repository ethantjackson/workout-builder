import React, { useEffect } from 'react';
import PlanEditor from '../components/plans/PlanEditor';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setPlanID,
  setPlanName,
  setPlanSteps,
  updatePlan,
} from '../actions/WorkoutPlanActions';
import BackButton from '../components/layout/backButton/BackButton';
import NextButton from '../components/layout/nextButton/NextButton';
import { useHistory } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditPlanPage = ({
  id,
  name,
  steps,
  setPlanID,
  setPlanName,
  setPlanSteps,
  updatePlan,
}) => {
  let history = useHistory();
  useEffect(() => {
    if (id === null) {
      history.push('/plans');
    }
    //eslint-disable-next-line
  }, []);

  const handleSave = (e) => {
    if (name.length > 0 && steps.length > 0) {
      updatePlan(id, {
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
    }
  };

  return (
    <>
      <div className='container'>
        <h1 className='instructionsHeader'>Edit Workout Plan</h1>
        <PlanEditor
          planName={name}
          setPlanName={setPlanName}
          planSteps={steps}
          setPlanSteps={setPlanSteps}
        />
      </div>
      <BackButton
        altText={'CANCEL'}
        target='/plans'
        onClick={() => {
          setPlanID(null);
          setPlanName('');
          setPlanSteps([]);
        }}
      />
      <NextButton altText={'SAVE PLAN'} target='/plans' onClick={handleSave} />
    </>
  );
};

EditPlanPage.propTypes = {
  name: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
  setPlanID: PropTypes.func.isRequired,
  setPlanName: PropTypes.func.isRequired,
  setPlanSteps: PropTypes.func.isRequired,
  updatePlan: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  id: state.plan.id,
  name: state.plan.name,
  steps: state.plan.steps,
});

export default connect(mapStateToProps, {
  setPlanID,
  setPlanName,
  setPlanSteps,
  updatePlan,
})(EditPlanPage);
