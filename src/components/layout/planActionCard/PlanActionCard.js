import React, { useState, useEffect } from 'react';
import Preloader from '../Preloader';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import './PlanActionCard.css';

const PlanActionCard = ({ plan }) => {
  const [workouts, setWorkouts] = useState([]);

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
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, { position: 'bottom' });
  }, []);

  useEffect(() => {
    const workoutIDs = plan.steps.map((step) => step.workout_id);
    getWorkoutArr(workoutIDs);
    //eslint-disable-next-line
  }, [plan]);

  useEffect(() => {
    console.log(workouts);
  }, [workouts]);

  return (
    <div className='planActionCard'>
      {/* <div className='top'> */}
      <h5 className='planName'>{plan.name}</h5>
      <ul className='planActions'>
        <li className='tooltipped planAction' data-tooltip='Run Plan Guide'>
          <i className='material-icons'>play_circle_filled</i>
        </li>
        <li className='tooltipped planAction' data-tooltip='Edit Plan'>
          <i className='material-icons'>create</i>
        </li>
        <li className='tooltipped planAction' data-tooltip='Delete Plan'>
          <i className='material-icons'>delete</i>
        </li>
      </ul>
      {/* </div> */}
      {workouts.length <= 0 ? (
        <Preloader />
      ) : (
        <div className='stepPreviewContainer'>
          {workouts.map((workout, index) => (
            <div
              key={workout._id}
              className='stepPreview'
              style={
                index >= workouts.length || plan.steps[index].workoutRest <= 0
                  ? {
                      borderRight: 'none',
                      paddingRight: '0',
                    }
                  : {}
              }
            >
              <img
                className='workoutImg'
                src={workout.demo}
                alt='workout-img'
              />
              {index < workouts.length && plan.steps[index].workoutRest > 0 && (
                <p className='workoutRest'>{plan.steps[index].workoutRest}s</p>
              )}
              <p className='stepDetails'>
                {plan.steps[index].reps}
                <span className='units'> reps</span> {plan.steps[index].sets}
                <span className='units'> sets</span>
                <br />
                {plan.steps[index].setRest}s <span className='units'>rest</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

PlanActionCard.propTypes = {
  plan: PropTypes.object.isRequired,
};

export default PlanActionCard;
