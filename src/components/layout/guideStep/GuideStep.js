import React from 'react';
import WorkoutCard from '../workoutCard/WorkoutCard';
import PropTypes from 'prop-types';
import './GuideStep.css';

const GuideStep = ({ workout, step, currSet }) => {
  return (
    <div className='container'>
      <div className='row guideStepDiv'>
        <div className='col s12 m10 offset-m1 l8 offset-l2 xl6 offset-xl3'>
          <WorkoutCard workout={workout} />
          <p className='guideStepText'>
            <span style={{ borderRight: '.1rem dotted grey' }}>
              <span className='guideStepSubText'>set </span>
              <sup>{currSet}</sup>&frasl;
              <sub>{step.sets}</sub>{' '}
            </span>
            &nbsp;{step.reps} <span className='guideStepSubText'>reps</span>
          </p>
        </div>
      </div>
    </div>
  );
};

GuideStep.propTypes = {
  workout: PropTypes.object.isRequired,
  step: PropTypes.object.isRequired,
  currSet: PropTypes.number.isRequired,
};

export default GuideStep;
