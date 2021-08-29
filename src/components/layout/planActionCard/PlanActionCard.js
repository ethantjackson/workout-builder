import React, { useState, useEffect } from 'react';
import Preloader from '../Preloader';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import './PlanActionCard.css';

const PlanActionCard = ({
  plan,
  deleteUserPlan,
  setPlanID,
  setPlanName,
  setPlanSteps,
}) => {
  let history = useHistory();
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
    return () => {
      elems.forEach((elem) => {
        var instance = M.Tooltip.getInstance(elem);
        instance?.destroy();
      });
    };
  }, []);

  useEffect(() => {
    const workoutIDs = plan.steps.map((step) => step.workout_id);
    getWorkoutArr(workoutIDs);
    //eslint-disable-next-line
  }, [plan]);

  return (
    <div className='planActionCard'>
      {/* <div className='top'> */}
      <h5 className='planName'>{plan.name}</h5>
      <ul className='planActions'>
        <li
          className='tooltipped planAction'
          data-tooltip='Run Plan Guide'
          onClick={() => {
            setPlanID(plan._id);
            setPlanName(plan.name);
            setPlanSteps(plan.steps);
            history.push('/guide');
          }}
        >
          <i className='material-icons'>play_circle_filled</i>
        </li>
        <li
          className='tooltipped planAction'
          data-tooltip='Edit Plan'
          onClick={() => {
            setPlanID(plan._id);
            setPlanName(plan.name);
            setPlanSteps(plan.steps);
            history.push('/edit-plan');
          }}
        >
          <i className='material-icons'>create</i>
        </li>
        <li
          className='tooltipped planAction'
          data-tooltip='Delete Plan'
          onClick={() => deleteUserPlan(plan._id)}
        >
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
              key={index}
              className='stepPreview stepPreviewDiv'
              style={
                index >= workouts.length || plan.steps[index].workoutRest <= 0
                  ? {
                      borderRight: 'none',
                      paddingRight: '1.5rem',
                      marginRight: '0',
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
  deleteUserPlan: PropTypes.func.isRequired,
};

export default PlanActionCard;
