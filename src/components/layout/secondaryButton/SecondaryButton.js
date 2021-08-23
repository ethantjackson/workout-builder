import React from 'react';
import './SecondaryButton.css';
import PropTypes from 'prop-types';

const SecondaryButton = ({ onClick, tooltipText, materialIcon, isNested }) => {
  return (
    <div
      style={{
        bottom: isNested && 'calc(16%)',
        right: isNested && 'calc(5% + 4.1rem)',
      }}
      className='secondaryBtn tooltipped btn-flat'
      data-tooltip={tooltipText}
      data-position={isNested ? 'top' : 'left'}
      onClick={onClick}
    >
      <i className='material-icons'>{materialIcon}</i>
    </div>
  );
};

SecondaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  tooltipText: PropTypes.string.isRequired,
  materialIcon: PropTypes.string.isRequired,
};

export default SecondaryButton;
