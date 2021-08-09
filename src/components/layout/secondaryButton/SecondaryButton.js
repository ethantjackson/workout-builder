import React from 'react';
import './SecondaryButton.css';
import PropTypes from 'prop-types';

const SecondaryButton = ({ onClick, tooltipText, materialIcon }) => {
  return (
    <div
      className='clearBtn tooltipped btn-flat'
      data-tooltip={tooltipText}
      data-position='left'
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
