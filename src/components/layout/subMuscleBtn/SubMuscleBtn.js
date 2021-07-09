import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSubMuscles } from '../../../actions/WorkoutActions';
import M from 'materialize-css/dist/js/materialize.min.js';
import './SubMuscleBtn.css';

const SubMuscleBtn = ({ subMuscles, subMuscle, img, setSubMuscles }) => {
  const [selected, setSelected] = useState(subMuscles.includes(subMuscle));

  useEffect(() => {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, { position: 'top' });
  }, []);

  useEffect(() => {
    if (selected) {
      if (!subMuscles.includes(subMuscle))
        setSubMuscles([...subMuscles, subMuscle]);
    } else {
      setSubMuscles(subMuscles.filter((muscle) => muscle !== subMuscle));
    }
    // eslint-disable-next-line
  }, [selected]);

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
        data-tooltip={subMuscle}
        onClick={() => {
          setSelected(!selected);
        }}
      />
    </div>
  );
};

SubMuscleBtn.propTypes = {
  subMuscle: PropTypes.string.isRequired,
  subMuscles: PropTypes.array.isRequired,
  setSubMuscles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  subMuscles: state.workout.subMuscles,
});

export default connect(mapStateToProps, { setSubMuscles })(SubMuscleBtn);
