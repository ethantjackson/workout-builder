import React, { useState, useEffect } from 'react';
import GuideStep from '../../components/layout/guideStep/GuideStep';
import RestStep from '../../components/layout/restStep/RestStep';
import BackButton from '../../components/layout/backButton/BackButton';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setPlanID,
  setPlanName,
  setPlanSteps,
} from '../../actions/WorkoutPlanActions';
// import M from 'materialize-css/dist/js/materialize.min.js';
import './PlanGuidePage.css';

const PlanGuidePage = ({ plan, setPlanID, setPlanName, setPlanSteps }) => {
  let history = useHistory();
  const [workouts, setWorkouts] = useState([]);

  // useEffect(() => {
  //   var elems = document.querySelectorAll('.tooltipped');
  //   console.log(elems);
  //   M.Tooltip.init(elems, { position: 'left' });
  // }, [workouts]);

  useEffect(() => {
    if (plan.id === null) {
      history.push('/plans');
    }
    //eslint-disable-next-line
  }, [plan]);

  const getWorkout = async (workoutID) => {
    const res = await fetch('/workout/' + workoutID);
    const data = await res.json();
    return data;
  };

  const getWorkoutArr = async (workoutIDs) => {
    const imgs = await Promise.all(
      workoutIDs.map(async (workoutID) => await getWorkout(workoutID))
    );
    setWorkouts(imgs);
  };

  useEffect(() => {
    const workoutIDs = plan.steps.map((step) => step.workout_id);
    getWorkoutArr(workoutIDs);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {workouts.length > 0 && (
        <>
          <GuideStep workout={workouts[0]} step={plan.steps[0]} />
          <div className='row'>
            <div className='col s4 offset-s7 m2 offset-m8 xl1 offset-xl8 nextStepPreview '>
              <p>CONTINUE TO</p>
              <img
                src={workouts[0].demo}
                className='stepPreviewImg'
                alt='step-preview-img'
              />
            </div>
          </div>
        </>
      )}
      {/* <RestStep restTime={12} /> */}
      <BackButton
        altText={'CANCEL'}
        target='/plans'
        onClick={() => {
          setPlanID(null);
          setPlanName('');
          setPlanSteps([]);
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  plan: state.plan,
});

PlanGuidePage.propTypes = {
  plan: PropTypes.object.isRequired,
  setPlanID: PropTypes.func.isRequired,
  setPlanName: PropTypes.func.isRequired,
  setPlanSteps: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  setPlanID,
  setPlanName,
  setPlanSteps,
})(PlanGuidePage);
