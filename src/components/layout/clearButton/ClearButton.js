import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AllButton = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, { position: 'left' });
  }, []);
  return (
    <button className='clearBtn tooltipped' data-tooltip='Clear All'>
      CLEAR
    </button>
  );
};

export default AllButton;
