import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import './SubMuscleBtn.css';

const SubMuscleBtn = ({ muscle, img }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, { position: 'top' });
  }, []);

  return (
    <div className='subMuscleBtnDiv'>
      <img
        className='subMuscleImgBtn tooltipped'
        style={{
          opacity: selected ? '1' : '.3',
          boxShadow: selected && '0px 0px 15px #26d1ed',
        }}
        src={img}
        alt='test-img'
        data-tooltip={muscle}
        onClick={() => setSelected(!selected)}
      />
    </div>
  );
};

SubMuscleBtn.propTypes = {
  muscle: PropTypes.string.isRequired,
};

export default SubMuscleBtn;
