import React from 'react';
import './NextButton.css';

const NextButton = ({ target }) => {
  return (
    <a href={target} className='nextButton'>
      NEXT
    </a>
  );
};

export default NextButton;
