import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMuscleGroup } from '../../../actions/WorkoutActions';
import Back from '../../../img/back.png';
import Front from '../../../img/front.png';
import Side from '../../../img/side.png';
import Legs from '../../../img/legs.png';
import Arms from '../../../img/arms.png';
import Abs from '../../../img/abs.png';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './MuscleGroupSelector.css';

const MuscleGroupSelector = ({ muscleGroup, setMuscleGroup }) => {
  const muscleGroups = ['CHEST', 'BACK', 'SHOULDERS', 'ABS', 'LEGS', 'ARMS'];
  const muscleGroupImgs = [Front, Back, Side, Abs, Legs, Arms];

  useEffect(() => {
    var instance = document.querySelectorAll('.carousel');
    M.Carousel.init(instance, {
      indicators: true,
      onCycleTo: (e) => {
        setMuscleGroup(e.id);
      },
    });
    // M.Carousel.getInstance(instance).set(
    //   muscleGroups.findIndex((muscle) => muscle === muscleGroup)
    // );
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h4 className='instructionsSubHeader'>{muscleGroup}</h4>
      <div className='carousel no-autoinit'>
        {muscleGroups.map((muscle, index) => (
          <a
            className='carousel-item'
            href={'#' + muscle}
            id={muscle}
            key={muscle}
          >
            <img src={muscleGroupImgs[index]} alt={muscle + '-img'} />
          </a>
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

export default connect(mapStateToProps, { setMuscleGroup })(
  MuscleGroupSelector
);
