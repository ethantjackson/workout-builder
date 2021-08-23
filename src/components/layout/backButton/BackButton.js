import React from 'react';
import './BackButton.css';

const BackButton = ({ onClick, altText, target, isNested }) => {
  return (
    <a
      href={target}
      className={'backButton' + (isNested ? ' nested' : '')}
      onClick={onClick}
    >
      {altText ? altText : 'BACK'}
    </a>
  );
};

export default BackButton;
