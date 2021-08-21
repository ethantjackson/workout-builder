import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../layout/Preloader';
import './PlanStep.css';

//display: workout name, workout gif
//edit: reps(12), sets(3), set rest(60)s, workout rest(120)s <- invalid field if isLastWorkout
const PlanStep = ({ workoutID }) => {
  const [workout, setWorkout] = useState(null);
  const [reps, setReps] = useState(12);
  const [sets, setSets] = useState(3);
  const [setRest, setSetRest] = useState(60);
  const [workoutRest, setWorkoutRest] = useState(120);

  useEffect(() => {
    const fetchWorkout = async () => {
      const res = await fetch('/workout/' + workoutID);
      const data = await res.json();
      setWorkout(data);
    };
    fetchWorkout();
  }, [workoutID]);

  if (!workout) return <Preloader />;
  return (
    <div className='row stepDiv'>
      <div className='col s4'>
        <h4 className='workoutName'>{workout.name}</h4>
        <img className='workoutDemo' src={workout.demo} alt='workout-demo' />
      </div>
      <div className='col s8 stepInputsDiv'>
        <div className='row'>
          <div className='col s4 m6'>
            <div className='input-field col s12 m8 l6 offset-m1 offset-l2'>
              <input
                id='reps'
                type='number'
                value={reps}
                onChange={(e) => setReps(e.target.value)}
              />
              <label className='active' htmlFor='reps'>
                Reps
              </label>
            </div>
          </div>
          <div className='col s8 m6'>
            <div className='input-field col s12 m8 l6 offset-m1 offset-l2'>
              <input
                id='setRest'
                type='number'
                value={setRest}
                onChange={(e) => setSetRest(e.target.value)}
              />
              <label className='active' htmlFor='reps'>
                Set Rest (s)
              </label>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col s4 m6'>
            <div className='input-field col s12 m8 l6 offset-m1 offset-l2'>
              <input
                id='sets'
                type='number'
                value={sets}
                onChange={(e) => setSets(e.target.value)}
              />
              <label className='active' htmlFor='reps'>
                Sets
              </label>
            </div>
          </div>
          <div className='col s8 m6'>
            <div className='input-field col s12 m8 l6 offset-m1 offset-l2'>
              <input
                id='reps'
                type='number'
                value={workoutRest}
                onChange={(e) => setWorkoutRest(e.target.value)}
              />
              <label className='active' htmlFor='reps'>
                Workout Rest (s)
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PlanStep.propTypes = {
  workoutID: PropTypes.string.isRequired,
};

export default PlanStep;
