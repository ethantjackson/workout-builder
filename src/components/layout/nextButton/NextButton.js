import React from 'react';
import './NextButton.css';

const NextButton = ({ target, onClick }) => {
  return (
    <a href={target} className='nextButton' onClick={onClick}>
      NEXT
    </a>
  );
};

export default NextButton;
