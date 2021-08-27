import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import RestCard from './RestCard';
import './RestStep.css';

const RestStep = ({ restTime }) => {
  const timer = useRef(null);
  const [count, setCount] = useState(restTime);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) startTimer();

    return () => clearInterval(timer.current);
  }, [paused]);

  const startTimer = () => {
    timer.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 0) return prevCount - 1;
        else {
          // alert('done');
          setPaused(true);
          return 0;
        }
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timer.current);
  };

  return (
    <div className='container restStepDiv'>
      <RestCard count={count} />
      <i
        className='playBtn material-icons medium'
        onClick={() => {
          if (paused) startTimer();
          else stopTimer();
          setPaused(!paused);
        }}
      >
        {paused ? 'play_arrow' : 'pause'}
      </i>
    </div>
  );
};

RestStep.propTypes = {
  restTime: PropTypes.number.isRequired,
};

export default RestStep;
