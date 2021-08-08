import React from 'react';
import './ClearButton.css';
import PropTypes from 'prop-types';

const ClearButton = ({ onClick, tooltipText, materialIcon }) => {
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

ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  tooltipText: PropTypes.string.isRequired,
  materialIcon: PropTypes.string.isRequired,
};

export default ClearButton;
