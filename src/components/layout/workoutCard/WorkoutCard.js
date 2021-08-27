import React from 'react';
import './WorkoutCard.css';
import PropTypes from 'prop-types';

const WorkoutCard = ({ workout, setSelectedWorkout }) => {
  return (
    <div className='cardContainer'>
      <div
        className='card'
        onClick={() => {
          if (setSelectedWorkout) setSelectedWorkout(workout);
        }}
      >
        <div className='card-image waves-effect waves-block waves-light cardImg'>
          <img
            className='activator'
            rel={'external'}
            src={workout.demo}
            alt='card-img'
            // style={{ height: '10vh', width: 'auto' }}
          />
        </div>
        <div className='card-content'>
          <span className='card-title activator'>
            {workout.name}
            <i className='material-icons right'>more_vert</i>
          </span>
        </div>
        <div className='card-reveal'>
          <span className='card-title'>
            {workout.name}
            <i className='material-icons right'>close</i>
          </span>
          <div className='left-align revealContent'>
            {workout.tips.length > 0 && (
              <>
                <blockquote className='revealSubHeader'>Tips:</blockquote>
                <ul className='revealList browser-default'>
                  {workout.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </>
            )}
            <br />
            <blockquote className='revealSubHeader'>Target Muscles:</blockquote>
            <ul className='revealList browser-default'>
              {workout.targets.map((target, index) => (
                <li key={index}>{target}</li>
              ))}
            </ul>
            <br />
            {workout.tangents.length > 0 && (
              <>
                <blockquote className='revealSubHeader'>
                  Tangent Muscles Worked:
                </blockquote>
                <ul className='revealList browser-default'>
                  {workout.tangents.map((tangent, index) => (
                    <li key={index}>{tangent}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

WorkoutCard.propTypes = {
  workout: PropTypes.object.isRequired,
};

export default WorkoutCard;
