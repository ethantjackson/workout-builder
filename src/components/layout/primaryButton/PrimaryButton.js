import React, { useEffect } from 'react';
import './PrimaryButton.css';
import PropTypes from 'prop-types';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const PrimaryButton = ({ onClick, tooltipText, materialIcon, isNested }) => {
  useEffect(() => {
    var instance = document.querySelectorAll('.tooltipped');
    instance.forEach((tooltip) => {
      M.Tooltip.init(tooltip, {});
    });
  }, []);

  return (
    <div
      style={{ bottom: isNested && '16%' }}
      className='primaryBtn tooltipped btn-flat'
      data-tooltip={tooltipText}
      data-position={isNested ? 'top' : 'left'}
      onClick={onClick}
    >
      <i className='material-icons'>{materialIcon}</i>
    </div>
  );
};

PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  tooltipText: PropTypes.string.isRequired,
  materialIcon: PropTypes.string.isRequired,
};

export default PrimaryButton;
