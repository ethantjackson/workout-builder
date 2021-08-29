import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import RestCard from './RestCard';
import './RestStep.css';

const RestStep = ({ restTime, getNext }) => {
  const timer = useRef(null);
  const [count, setCount] = useState(restTime);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) startTimer();

    return () => clearInterval(timer.current);
  }, [paused]);

  useEffect(() => {
    if (count < 0) {
      getNext();
    }
    //eslint-disable-next-line
  }, [count]);

  const startTimer = () => {
    timer.current = setInterval(() => {
      setCount((prevCount) => {
        return prevCount - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timer.current);
  };

  return (
    <div className='container restStepDiv'>
      <RestCard count={count > 0 ? count : 0} />
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
  getNext: PropTypes.func.isRequired,
};

export default RestStep;
