import React from 'react';
import WorkoutCard from '../workoutCard/WorkoutCard';
import PropTypes from 'prop-types';
import './GuideStep.css';

const GuideStep = ({ workout, step }) => {
  return (
    <div className='container'>
      <div className='row guideStepDiv'>
        <div className='col s12 m10 offset-m1 l8 offset-l2 xl6 offset-xl3'>
          <WorkoutCard workout={workout} />
          <p className='guideStepText'>
            {step.reps} <span className='units'>reps</span>
          </p>
        </div>
      </div>
      {/* <p
        className='guideBtn'
        onClick={() => {
          console.log('done');
        }}
        href='!#'
      >
        NEXT
      </p> */}
    </div>
  );
};

GuideStep.propTypes = {
  workout: PropTypes.object.isRequired,
  step: PropTypes.object.isRequired,
};

export default GuideStep;
