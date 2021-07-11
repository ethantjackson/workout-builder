import React from 'react';
import './ClearButton.css';
import PropTypes from 'prop-types';

const AllButton = ({ onClick }) => {
  return (
    <div
      className='clearBtn tooltipped btn-flat'
      data-tooltip='Clear All'
      data-position='left'
      onClick={onClick}
    >
      <i className='material-icons'>clear</i>
    </div>
  );
};

AllButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AllButton;
