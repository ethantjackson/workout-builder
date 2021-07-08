import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSubMuscles } from '../../../actions/WorkoutActions';
import SubMuscleBtn from '../../layout/subMuscleBtn/SubMuscleBtn';
import { Test } from '../../../img/index';
import './SubMuscleSelector.css';

const SubMuscleSelector = ({
  workout: { muscleGroup, subMuscles },
  setSubMuscles,
}) => {
  const [subMuscleOptions, setSubMuscleOptions] = useState([]);
  const [subMuscleOptionRows, setSubMuscleOptionRows] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const makeRows = () => {
    if (windowSize.width >= 992) {
      let rows = [];
      let i = 0;
      rows.push(subMuscleOptions.slice(i, i + 3));
      while (i + 3 < subMuscleOptions.length) {
        i += 3;
        rows.push(subMuscleOptions.slice(i, i + 3));
      }
      setSubMuscleOptionRows(rows);
    } else {
      let rows = [];
      let i = 0;
      rows.push(subMuscleOptions.slice(i, i + 2));
      while (i + 2 < subMuscleOptions.length) {
        i += 2;
        rows.push(subMuscleOptions.slice(i, i + 2));
      }
      setSubMuscleOptionRows(rows);
    }
  };

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
    makeRows();
    // eslint-disable-next-line
  }, [windowSize, subMuscleOptions]);

  return (
    <div className='container'>
      {subMuscleOptionRows.map((row, rowIndex) => (
        <div className='subMuscleBtnRow' key={rowIndex}>
          {row.map((muscle, index) => (
            <SubMuscleBtn muscle={muscle} img={Test} key={index} />
          ))}
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
