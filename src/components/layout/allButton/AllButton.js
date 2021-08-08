import React, { useEffect } from 'react';
import './AllButton.css';
import PropTypes from 'prop-types';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const AllButton = ({ onClick, tooltipText, materialIcon }) => {
  useEffect(() => {
    var instance = document.querySelectorAll('.tooltipped');
    instance.forEach((tooltip) => {
      M.Tooltip.init(tooltip, {});
    });
  }, []);

  return (
    <div
      className='allBtn tooltipped btn-flat'
      data-tooltip={tooltipText}
      data-position='left'
      onClick={onClick}
    >
      <i className='material-icons'>{materialIcon}</i>
    </div>
  );
};

AllButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  tooltipText: PropTypes.string.isRequired,
  materialIcon: PropTypes.string.isRequired,
};

export default AllButton;
