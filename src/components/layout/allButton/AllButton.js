import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AllButton = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, { position: 'left' });
  }, []);
  return (
    <button className='allBtn tooltipped' data-tooltip='Select All'>
      ALL
    </button>
  );
};

export default AllButton;
