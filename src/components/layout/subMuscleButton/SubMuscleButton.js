import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSubMuscles } from '../../../actions/WorkoutActions';
import M from 'materialize-css/dist/js/materialize.min.js';
import './SubMuscleButton.css';

const SubMuscleButton = ({ subMuscles, subMuscle, img, setSubMuscles }) => {
  const [selected, setSelected] = useState(subMuscles.includes(subMuscle));

  useEffect(() => {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, { position: 'top' });
  }, []);

  useEffect(() => {
    setSelected(subMuscles.includes(subMuscle));
    // eslint-disable-next-line
  }, [subMuscles]);

  const handleSelect = () => {
    const newSelected = !selected;
    if (newSelected) {
      if (!subMuscles.includes(subMuscle))
        setSubMuscles([...subMuscles, subMuscle]);
    } else {
      setSubMuscles(subMuscles.filter((muscle) => muscle !== subMuscle));
    }
    setSelected(newSelected);
  };

  return (
    <div className='subMuscleBtnDiv'>
      <img
        className='subMuscleImgBtn tooltipped'
        style={{
          opacity: selected ? '1' : '.5',
          boxShadow: selected && '0px 0px 15px #26d1ed',
        }}
        src={img}
        alt='test-img'
        data-tooltip={subMuscle}
        onClick={() => handleSelect()}
      />
    </div>
  );
};

SubMuscleButton.propTypes = {
  subMuscle: PropTypes.string.isRequired,
  subMuscles: PropTypes.array.isRequired,
  setSubMuscles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  subMuscles: state.workout.subMuscles,
});

export default connect(mapStateToProps, { setSubMuscles })(SubMuscleButton);
