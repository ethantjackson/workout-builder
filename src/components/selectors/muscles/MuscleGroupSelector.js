import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMuscleGroup } from '../../../actions/WorkoutActions';
import { setSubMuscles } from '../../../actions/WorkoutActions';
import { Back, Front, Side, Legs, Arms, Abs } from '../../../img/index';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './MuscleGroupSelector.css';

const MuscleGroupSelector = ({
  muscleGroup,
  setMuscleGroup,
  setSubMuscles,
}) => {
  const muscleGroups = ['CHEST', 'BACK', 'SHOULDERS', 'ABS', 'LEGS', 'ARMS'];
  const muscleGroupImgs = [Front, Back, Side, Abs, Legs, Arms];

  useEffect(() => {
    var instance = document.querySelectorAll('.carousel');
    M.Carousel.init(instance, {
      indicators: true,
      onCycleTo: (e) => {
        setMuscleGroup(e.id);
        setSubMuscles([]);
      },
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h4 className='instructionsSubHeader'>{muscleGroup}</h4>
      <div className='carousel no-autoinit'>
        {muscleGroups.map((muscle, index) => (
          <div className='carousel-item' id={muscle} key={muscle}>
            <img src={muscleGroupImgs[index]} alt={muscle + '-img'} />
          </div>
        ))}
      </div>
    </>
  );
};

MuscleGroupSelector.propTypes = {
  muscleGroup: PropTypes.string.isRequired,
  setMuscleGroup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  muscleGroup: state.workout.muscleGroup,
});

export default connect(mapStateToProps, { setMuscleGroup, setSubMuscles })(
  MuscleGroupSelector
);
