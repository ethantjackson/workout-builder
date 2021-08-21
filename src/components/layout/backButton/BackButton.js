import React from 'react';
import './BackButton.css';

const BackButton = ({ altText, target }) => {
  return (
    <a href={target} className='backButton'>
      {altText ? altText : 'BACK'}
    </a>
  );
};

export default BackButton;
