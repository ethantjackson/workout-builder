import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SubMuscleButton from '../../layout/subMuscleButton/SubMuscleButton';
import { setSubMuscles } from '../../../actions/WorkoutActions';
import AllButton from '../../layout/allButton/AllButton';
import ClearButton from '../../layout/clearButton/ClearButton';
import { Test } from '../../../img/index';
import './SubMuscleSelector.css';

const SubMuscleSelector = ({ workout: { muscleGroup }, setSubMuscles }) => {
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
          'Clavicular Pectoral',
          'Sternal Pectoral',
          'Costal Pectoral',
        ]);
        break;
      case 'SHOULDERS':
        setSubMuscleOptions([
          'Anterior Deltoid Head',
          'Lateral Deltoid Head',
          'Posterior Deltoid Head',
          'Rotator Cuff',
        ]);
        break;
      case 'BACK':
        setSubMuscleOptions([
          'Latissimus Dorsi',
          'Rhomboids',
          'Teres Major & Minor',
          'Erector Spinae',
          'Trapezius',
        ]);
        break;
      case 'LEGS':
        setSubMuscleOptions([
          'Gluteus Maximus',
          'Vastus Medcialis',
          'Vastus Lateralis & Intermedius',
          'Hamstrings',
          'Gastrocnemius',
          'Hip Abductors',
          'Hip Adductors',
        ]);
        break;
      case 'ABS':
        setSubMuscleOptions([
          'External Abdominal Oblique',
          'Upper Rectus Abdominis',
          'Lower Rectus Abdominis',
          'Internal Abdominal Oblique',
          'Serratus',
        ]);
        break;
      case 'ARMS':
        setSubMuscleOptions([
          'Short Bicep Head',
          'Long Bicep Head',
          'Brachialis',
          'Forearms',
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
  }, [windowSize]);

  return (
    <div className='subMuscleBtnsContainer container'>
      {subMuscleOptionRows.map((row, rowIndex) => (
        <div className='subMuscleBtnRow' key={rowIndex}>
          {row.map((subMuscle, index) => (
            <SubMuscleButton subMuscle={subMuscle} img={Test} key={index} />
          ))}
        </div>
      ))}
      <ClearButton
        onClick={() => {
          setSubMuscles([]);
        }}
      />
      <AllButton
        onClick={() => {
          setSubMuscles(subMuscleOptions);
        }}
      />
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
