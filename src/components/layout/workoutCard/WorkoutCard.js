import React from 'react';
import './WorkoutCard.css';

const WorkoutCard = () => {
  return (
    <div className='col s12 l6 cardContainer'>
      <div className='card'>
        <div className='card-image waves-effect waves-block waves-light cardImg'>
          <img
            className='activator'
            src='https://res.cloudinary.com/workoutcloud/image/upload/v1626232208/workout-website/dumbbellbenchpress-1457043820_vwtchd.gif'
            alt='card-img'
            // style={{ height: '10vh', width: 'auto' }}
          />
        </div>
        <div className='card-content'>
          <span className='card-title activator'>
            Flat Dumbell Bench Press
            <i className='material-icons right'>more_vert</i>
          </span>
        </div>
        <div className='card-reveal'>
          <span className='card-title'>
            Flat Dumbell Bench Press
            <i className='material-icons right'>close</i>
          </span>
          <div className='left-align revealContent'>
            <blockquote className='revealSubHeader'>Tips:</blockquote>
            <ul className='revealList browser-default'>
              <li>
                Use a neutral grip to reduce stress placed on the shoulders. A
                neutral grip puts more focus on the triceps.
              </li>
              <li>
                This is a good exercise to go heavy and overload the pecs.
              </li>
            </ul>
            <br />
            <blockquote className='revealSubHeader'>
              Tangent Muscles Worked:
            </blockquote>
            <ul className='revealList browser-default'>
              <li>Anterior Deltoid Head</li>
              <li>Lateral Tricep Head</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
