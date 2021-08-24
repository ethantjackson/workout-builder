import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setMuscleGroup,
  setSubMuscles,
  setEquipment,
} from '../../../actions/WorkoutActions';
import { clearWorkouts } from '../../../actions/GeneratedWorkoutsActions';
import { Back, Front, Side, Legs, Arms, Abs } from '../../../img/index';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './MuscleGroupSelector.css';

const MuscleGroupSelector = ({
  muscleGroup,
  setMuscleGroup,
  setSubMuscles,
  setEquipment,
  clearWorkouts,
}) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const muscleGroups = ['CHEST', 'BACK', 'SHOULDERS', 'ABS', 'LEGS', 'ARMS'];
  const muscleGroupImgs = [Front, Back, Side, Abs, Legs, Arms];

  useEffect(() => {
    var instance = document.querySelectorAll('.carousel');
    M.Carousel.init(instance, {
      indicators: true,
      onCycleTo: (e) => {
        setMuscleGroup(e.id);
        setSubMuscles([]);
        setEquipment([]);
        clearWorkouts();
      },
    });
    // eslint-disable-next-line
  }, [windowSize]);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <h4 className='instructionsSubHeader'>{muscleGroup}</h4>
      <div
        className='carousel'
        style={{ marginTop: windowSize.height < 850 && '-3rem' }}
      >
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
  setSubMuscles: PropTypes.func.isRequired,
  setEquipment: PropTypes.func.isRequired,
  clearWorkouts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  muscleGroup: state.workout.muscleGroup,
});

export default connect(mapStateToProps, {
  setMuscleGroup,
  setSubMuscles,
  setEquipment,
  clearWorkouts,
})(MuscleGroupSelector);
