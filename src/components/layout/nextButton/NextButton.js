import React from 'react';
import './NextButton.css';

const NextButton = ({ target, onClick, altText }) => {
  return (
    <a href={target} className='nextButton' onClick={onClick}>
      {altText ? altText : 'NEXT'}
    </a>
  );
};

export default NextButton;
