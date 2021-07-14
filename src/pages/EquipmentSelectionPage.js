import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setIncludeNoEquipment } from '../actions/WorkoutActions';
import EquipmentSelector from '../components/selectors/equipment/EquipmentSelector';
import NextButton from '../components/layout/nextButton/NextButton';
import BackButton from '../components/layout/backButton/BackButton';

const EquipmentSelectionPage = ({
  muscleGroup,
  includeNoEquipment,
  setIncludeNoEquipment,
}) => {
  const [checked, setChecked] = useState(includeNoEquipment);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

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
      <h1 className='instructionsHeader'>
        Select {_.lowerCase(muscleGroup)} equipment
      </h1>
      <div className='switch'>
        <label>
          Include No-Equipment Exercises {windowSize.width < 660 && <br />}
          <input
            type='checkbox'
            checked={checked}
            onChange={(e) => {
              setIncludeNoEquipment(e.target.checked);
              setChecked(e.target.checked);
            }}
          />
          <span className='lever'></span>
        </label>
      </div>
      <EquipmentSelector />
      <BackButton target='/sub-muscle-selection' />
      <NextButton target='/workouts' />
    </>
  );
};

EquipmentSelectionPage.propTypes = {
  muscleGroup: PropTypes.string.isRequired,
  includeNoEquipment: PropTypes.bool.isRequired,
  setIncludeNoEquipment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  muscleGroup: state.workout.muscleGroup,
  includeNoEquipment: state.workout.includeNoEquipment,
});

export default connect(mapStateToProps, { setIncludeNoEquipment })(
  EquipmentSelectionPage
);
