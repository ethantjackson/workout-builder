import React from 'react';
import './AllButton.css';
import PropTypes from 'prop-types';

const AllButton = ({ onClick }) => {
  return (
    <div
      className='allBtn tooltipped btn-flat'
      data-tooltip='Select All'
      data-position='left'
      onClick={onClick}
    >
      <i className='material-icons'>clear_all</i>
    </div>
  );
};

AllButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AllButton;
