import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SubMuscleButton from '../../layout/subMuscleButton/SubMuscleButton';
import { setSubMuscles } from '../../../actions/WorkoutActions';
import AllButton from '../../layout/allButton/AllButton';
import ClearButton from '../../layout/clearButton/ClearButton';
import {
  Test,
  ClavicularPectoral,
  CostalPectoral,
  SternalPectoral,
  LatissimusDorsi,
  ErectorSpinae,
  Rhomboids,
  TeresMajorAndMinor,
  Trapezius,
} from '../../../img/index';
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
          { name: 'Clavicular Pectoral', img: ClavicularPectoral },
          { name: 'Costal Pectoral', img: SternalPectoral },
          { name: 'Sternal Pectoral', img: CostalPectoral },
        ]);
        break;
      case 'SHOULDERS':
        setSubMuscleOptions([
          { name: 'Anterior Deltoid Head', img: Test },
          { name: 'Lateral Deltoid Head', img: Test },
          { name: 'Posterior Deltoid Head', img: Test },
          { name: 'Rotator Cuff', img: Test },
        ]);
        break;
      case 'BACK':
        setSubMuscleOptions([
          { name: 'Latissimus Dorsi', img: LatissimusDorsi },
          { name: 'Rhomboids', img: Rhomboids },
          { name: 'Teres Major & Minor', img: TeresMajorAndMinor },
          { name: 'Erector Spinae', img: ErectorSpinae },
          { name: 'Trapezius', img: Trapezius },
        ]);
        break;
      case 'LEGS':
        setSubMuscleOptions([
          { name: 'Gluteus Maximus', img: Test },
          { name: 'Vastus Medcialis', img: Test },
          { name: 'Vastus Lateralis & Intermedius', img: Test },
          { name: 'Hamstrings', img: Test },
          { name: 'Gastrocnemius', img: Test },
          { name: 'Hip Abductors', img: Test },
          { name: 'Hip Adductors', img: Test },
        ]);
        break;
      case 'ABS':
        setSubMuscleOptions([
          { name: 'External Abdominal Oblique', img: Test },
          { name: 'Upper Rectus Abdominis', img: Test },
          { name: 'Lower Rectus Abdominis', img: Test },
          { name: 'Internal Abdominal Oblique', img: Test },
          { name: 'Serratus', img: Test },
        ]);
        break;
      case 'ARMS':
        setSubMuscleOptions([
          { name: 'Short Bicep Head', img: Test },
          { name: 'Long Bicep Head', img: Test },
          { name: 'Brachialis', img: Test },
          { name: 'Forearms', img: Test },
          { name: 'Long Tricep Head', img: Test },
          { name: 'Medial Tricep Head', img: Test },
          { name: 'Lateral Tricep Head', img: Test },
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
            <SubMuscleButton
              subMuscle={subMuscle.name}
              img={subMuscle.img}
              key={index}
            />
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
          setSubMuscles(
            subMuscleOptions.map((subMuscleOption) => subMuscleOption.name)
          );
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
