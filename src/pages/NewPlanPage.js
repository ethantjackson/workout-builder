import React, { useState, useEffect } from 'react';
import PlanEditor from '../components/plans/PlanEditor';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPlanName, setPlanSteps } from '../actions/WorkoutPlanActions';
import BackButton from '../components/layout/backButton/BackButton';

const NewPlanPage = ({ name, steps, setPlanName, setPlanSteps }) => {
  // const [planName, setPlanName] = useState('Test Plan');
  // const [planSteps, setPlanSteps] = useState([
  //   {
  //     reps: 8,
  //     sets: 4,
  //     setRest: 100,
  //     workoutRest: 130,
  //     _id: '0',
  //     workout_id: '60f070673152366ab62c3593',
  //   },
  //   {
  //     reps: 20,
  //     sets: 5,
  //     setRest: 60,
  //     workoutRest: 0,
  //     _id: '1',
  //     workout_id: '610d894118065b373c0b0cf3',
  //   },
  // ]);

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
      <BackButton altText={'SAVE PLAN'} target='/home-page' />
    </>
  );
};

NewPlanPage.propTypes = {
  name: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.plan.name,
  steps: state.plan.steps,
  setPlanName: PropTypes.func.isRequired,
  setPlanSteps: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, { setPlanName, setPlanSteps })(
  NewPlanPage
);

// export default NewPlanPage;
