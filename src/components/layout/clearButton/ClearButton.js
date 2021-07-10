import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import './ClearButton.css';

const AllButton = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, { position: 'left' });
  }, []);
  return (
    <button className='clearBtn tooltipped btn-flat' data-tooltip='Clear All'>
      <i className='material-icons'>clear</i>
    </button>
  );
};

export default AllButton;
