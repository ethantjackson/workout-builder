import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './PlanPreview.css';
import { BenchPress } from '../../../img';

const PlanPreview = ({ steps, selectedWorkout }) => {
  const [workoutImgs, setWorkoutImgs] = useState([]);

  const getWorkoutImg = async (workoutID) => {
    const res = await fetch('/workout/' + workoutID);
    const data = await res.json();
    return data.demo;
  };

  const getWorkoutImgArr = async (workoutIDs) => {
    const imgs = await Promise.all(
      workoutIDs.map(async (workoutID) => await getWorkoutImg(workoutID))
    );
    setWorkoutImgs(imgs);
  };

  useEffect(() => {
    const workoutIDs = steps.map((step) => step.workout_id);
    getWorkoutImgArr(workoutIDs);
    //eslint-disable-next-line
  }, [steps]);

  return (
    <div className='planPreview'>
      {workoutImgs.map((img) => (
        <div key={img} className='stepPreview'>
          <img
            className={selectedWorkout ? 'selectedWorkoutImg' : 'workoutImg'}
            src={img}
            alt='preview-img'
          />
        </div>
      ))}
      {selectedWorkout === null ? (
        <div className='emptyStep'>
          <img src={BenchPress} alt='placeholder-img' />
          <div className='emptyStepIcon'>
            <i className='material-icons'>add</i>
          </div>
        </div>
      ) : (
        <div className='stepPreview'>
          <img
            className='selectedWorkoutImg selected'
            // className='workoutImg'
            src={selectedWorkout.demo}
            alt='selected-img'
          />
        </div>
      )}
    </div>
  );
};

PlanPreview.propTypes = {
  steps: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  steps: state.plan.steps,
});

export default connect(mapStateToProps, {})(PlanPreview);
