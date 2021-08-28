import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../layout/Preloader';
import './PlanStep.css';

//display: workout name, workout gif
//edit: reps(12), sets(3), set rest(60)s, workout rest(120)s <- invalid field if isLastWorkout
const PlanStep = ({
  step: { reps, sets, setRest, workoutRest, workout_id, _id },
  deleteStep,
  editStep,
  isLast,
}) => {
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    if (isLast) {
      editStep({ workoutRest: 0 }, _id);
    }
    //eslint-disable-next-line
  }, [isLast, _id]);

  useEffect(() => {
    const fetchWorkout = async () => {
      const res = await fetch('/workout/' + workout_id);
      const data = await res.json();
      setWorkout(data);
    };
    fetchWorkout();
  }, [workout_id]);

  return (
    <div className='row stepDiv'>
      <div style={{ position: 'relative' }}>
        <i
          className='small material-icons deleteIcon'
          onClick={() => deleteStep(_id)}
        >
          delete
        </i>
      </div>
      {!workout ? (
        <Preloader />
      ) : (
        <>
          <div
            className='col s4'
            onClick={() => console.log(workout.name, _id)}
          >
            <h4 className='workoutName'>{workout.name}</h4>
            <img
              className='workoutDemo'
              src={workout.demo}
              alt='workout-demo'
            />
          </div>
          <div className='col s8 stepInputsDiv'>
            <div className='row'>
              <div className='col s4 xl6'>
                <div className='input-field col s12 m8 l6 offset-m1 offset-l2'>
                  <input
                    id='reps'
                    type='number'
                    value={!isNaN(reps) && reps !== null ? reps : ''}
                    onChange={(e) => {
                      if (e.target.value >= 0)
                        editStep({ reps: parseInt(e.target.value) }, _id);
                    }}
                  />
                  <label className='active' htmlFor='reps'>
                    Reps
                  </label>
                </div>
              </div>
              <div className='col s8 xl6'>
                <div className='input-field col s12 m8 l6 offset-m1 offset-l2'>
                  <input
                    id='setRest'
                    type='number'
                    value={!isNaN(setRest) && setRest !== null ? setRest : ''}
                    onChange={(e) => {
                      if (e.target.value >= 0)
                        editStep({ setRest: parseInt(e.target.value) }, _id);
                    }}
                  />
                  <label className='active' htmlFor='reps'>
                    Set Rest (s)
                  </label>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col s4 xl6'>
                <div className='input-field col s12 m8 l6 offset-m1 offset-l2'>
                  <input
                    id='sets'
                    type='number'
                    value={!isNaN(sets) && sets !== null ? sets : ''}
                    onChange={(e) => {
                      if (e.target.value >= 0)
                        editStep({ sets: parseInt(e.target.value) }, _id);
                    }}
                  />
                  <label className='active' htmlFor='reps'>
                    Sets
                  </label>
                </div>
              </div>
              {!isLast && (
                <div className='col s8 xl6'>
                  <div className='input-field col s12 m8 l6 offset-m1 offset-l2'>
                    <input
                      id='reps'
                      type='number'
                      value={
                        !isNaN(workoutRest) && workoutRest !== null
                          ? workoutRest
                          : ''
                      }
                      onChange={(e) => {
                        if (e.target.value >= 0)
                          editStep(
                            { workoutRest: parseInt(e.target.value) },
                            _id
                          );
                      }}
                    />
                    <label className='active' htmlFor='reps'>
                      Workout Rest (s)
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

PlanStep.propTypes = {
  step: PropTypes.object.isRequired,
  deleteStep: PropTypes.func.isRequired,
  editStep: PropTypes.func.isRequired,
  isLast: PropTypes.bool.isRequired,
};

export default PlanStep;
