import React from 'react';
import './BackButton.css';

const BackButton = ({ altText, target, isNested }) => {
  return (
    <a href={target} className={'backButton' + (isNested ? ' nested' : '')}>
      {altText ? altText : 'BACK'}
    </a>
  );
};

export default BackButton;
