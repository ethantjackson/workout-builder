import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import './AllButton.css';

const AllButton = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, { position: 'left' });
  }, []);
  return (
    <button className='allBtn tooltipped btn-flat' data-tooltip='Select All'>
      <i className='material-icons'>clear_all</i>
    </button>
  );
};

export default AllButton;
