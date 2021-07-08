import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSubMuscles } from '../../../actions/WorkoutActions';
import M from 'materialize-css/dist/js/materialize.min.js';
import './SubMuscleSelector.css';

const SubMuscleSelector = ({
  workout: { muscleGroup, subMuscles },
  setSubMuscles,
}) => {
  const [subMuscleOptions, setSubMuscleOptions] = useState([]);

  useEffect(() => {
    switch (muscleGroup) {
      case 'CHEST':
        setSubMuscleOptions([
          'Pectoralis Major',
          'Pectoralis Minor',
          'Serratus Anterior',
          'Subclavius',
        ]);
        break;
      case 'SHOULDERS':
        setSubMuscleOptions([
          'Anterior Deltoid Head',
          'Lateral Deltoid Head',
          'Posterior Deltoid Head',
          'Supraspinatus',
          'test',
        ]);
        break;
      case 'BACK':
        setSubMuscleOptions([
          'Latissimus Dorsi',
          'Rhomboids',
          'Teres Major & Minor',
          'Trapezius',
          'Erector Spinae',
          'Infraspinatus',
        ]);
        break;
      case 'LEGS':
        setSubMuscleOptions([
          'Gluteus Muscles',
          'Quadriceps',
          'Hamstrings',
          'Gastrocnemius',
          'Peroneal Muscles',
          'Soleus',
        ]);
        break;
      case 'ABS':
        setSubMuscleOptions([
          'External Abdominal Oblique',
          'Rectus Abdominis',
          'Internal Abdominal Oblique',
        ]);
        break;
      case 'ARMS':
        setSubMuscleOptions([
          'Short Bicep Head',
          'Long Bicep Head',
          'Brachialis',
          'Brachioradialis',
          'Long Tricep Head',
          'Medial Tricep Head',
          'Lateral Tricep Head',
        ]);
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [muscleGroup]);

  useEffect(() => {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, { position: 'top' });
  }, [subMuscleOptions]);

  return (
    <div className='container row'>
      {subMuscleOptions.map((muscle, index) => (
        <div
          className={
            'subMuscleButtonDiv col s6 l4' +
            (subMuscleOptions.length % 3 === 2 &&
            subMuscleOptions.length - 2 <= index
              ? subMuscleOptions.length - 2 === index
                ? ' r2SecondLast'
                : ' r2Last'
              : '') +
            ((subMuscleOptions.length % 2 === 1 ||
              subMuscleOptions.length % 3 === 1) &&
            subMuscleOptions.length - 1 === index &&
            subMuscleOptions.length > 3
              ? ' oddLast'
              : '')
          }
          key={index}
        >
          <button
            className='subMuscleButton tooltipped'
            data-tooltip={muscle}
            type='button'
          >
            {muscle}
          </button>
        </div>
      ))}
    </div>
  );
};

SubMuscleSelector.propTypes = {
  workout: PropTypes.object.isRequired,
  setSubMuscles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps, { setSubMuscles })(SubMuscleSelector);
