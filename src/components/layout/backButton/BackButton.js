import React from 'react';
import './BackButton.css';

const BackButton = ({ target }) => {
  return (
    <a href={target} className='backButton'>
      BACK
    </a>
  );
};

export default BackButton;
