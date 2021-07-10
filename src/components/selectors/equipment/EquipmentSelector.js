import React, { useState, useEffect } from 'react';
import EquipmentButton from '../../layout/equipmentButton/EquipmentButton';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TestEquipment } from '../../../img/index';
import './EquipmentSelector.css';

const EquipmentSelector = ({ muscleGroup }) => {
  const [equipmentOptions, setEquipmentOptions] = useState([]);
  const [equipmentOptionRows, setEquipmentOptionRows] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const makeRows = () => {
    if (windowSize.width >= 992) {
      let rows = [];
      let i = 0;
      rows.push(equipmentOptions.slice(i, i + 3));
      while (i + 3 < equipmentOptions.length) {
        i += 3;
        rows.push(equipmentOptions.slice(i, i + 3));
      }
      setEquipmentOptionRows(rows);
    } else {
      let rows = [];
      let i = 0;
      rows.push(equipmentOptions.slice(i, i + 2));
      while (i + 2 < equipmentOptions.length) {
        i += 2;
        rows.push(equipmentOptions.slice(i, i + 2));
      }
      setEquipmentOptionRows(rows);
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
        setEquipmentOptions([
          'Dumbells',
          'Bench Press',
          'Smith Machine',
          'Chest Press Machine',
          'Dip Station',
          'T-Bar',
          'Cable Machine',
          'Butterfly Machine',
          'Battle Ropes',
          'Suspension Trainer',
        ]);
        break;
      case 'BACK':
        setEquipmentOptions([
          'Dumbells',
          'Barbell',
          'Pull-Up Bar',
          'T-Bar',
          'Cable Machine',
          'Cable Row Machine',
          'Smith Machine',
          'Pulldown Machine',
          'Dip Station',
          'Roman Chair',
          'Rear Delt Fly Machine',
          'Battle Ropes',
          'Suspension Trainer',
        ]);
        break;
      case 'SHOULDERS':
        setEquipmentOptions([
          'Dumbells',
          'Barbell',
          'Cable Machine',
          'Overhead Press Machine',
          'Dip Station',
          'Battle Ropes',
          'Suspension Trainer',
        ]);
        break;
      case 'ABS':
        setEquipmentOptions([
          'Dumbells',
          'Pull-Up Bar',
          'Cable Machine',
          'Crunch Machine',
          'Adjustable Bench',
          'Ab Roller',
          'Medicine Ball',
          'Roman Chair',
          'Battle Ropes',
          'Suspension Trainer',
        ]);
        break;
      case 'LEGS':
        setEquipmentOptions([
          'Dumbells',
          'Barbell',
          'Hex Bar',
          'Kettlebell',
          'Leg Curl Machine',
          'Leg Extension Machine',
          'Rear Leg Extension Machine',
          'Leg Press Machine',
          'Sled',
          'Jump Rope',
        ]);
        break;
      case 'ARMS':
        setEquipmentOptions([
          'Dumbells',
          'Barbell',
          'Cable Machine',
          'Arm Curl Machine',
          'Overhead Press Machine',
          'Tricep Extension Machine',
          'Dip Station',
          'Pull-Up Bar',
          'Battle Ropes',
          'Suspension Trainer',
        ]);
        break;
      default:
        break;
    }
  }, [muscleGroup]);

  useEffect(() => {
    makeRows();
    // eslint-disable-next-line
  }, [windowSize]);

  return (
    <div className='equipmentBtnsContainer container'>
      {equipmentOptionRows.map((row, rowIndex) => (
        <div className='equipmentBtnRow' key={rowIndex}>
          {row.map((equipmentItem, index) => (
            <EquipmentButton
              equipmentItem={equipmentItem}
              img={TestEquipment}
              key={index}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

EquipmentSelector.propTypes = {
  muscleGroup: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  muscleGroup: state.workout.muscleGroup,
});

export default connect(mapStateToProps, {})(EquipmentSelector);
