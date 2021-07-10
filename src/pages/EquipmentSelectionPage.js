import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setIncludeNoEquipment } from '../actions/WorkoutActions';
import EquipmentSelector from '../components/selectors/equipment/EquipmentSelector';
import ClearButton from '../components/layout/clearButton/ClearButton';
import AllButton from '../components/layout/allButton/AllButton';
import NextButton from '../components/layout/nextButton/NextButton';
import BackButton from '../components/layout/backButton/BackButton';

const EquipmentSelectionPage = ({ muscleGroup, includeNoEquipment }) => {
  const [checked, setChecked] = useState(includeNoEquipment);

  // useEffect(() => {
  //   setIncludeNoEquipment(checked);
  //   console.log(includeNoEquipment);
  // }, [checked]);

  return (
    <>
      <h1 className='instructionsHeader'>
        Select {_.lowerCase(muscleGroup)} equipment
      </h1>
      <div className='switch'>
        <label>
          Include No-Equipment Exercises
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
      <ClearButton />
      <AllButton />
      <BackButton target='/sub-muscle-selection' />
      <NextButton target='/' />
    </>
  );
};

EquipmentSelectionPage.propTypes = {
  muscleGroup: PropTypes.string.isRequired,
  includeNoEquipment: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  muscleGroup: state.workout.muscleGroup,
  includeNoEquipment: state.workout.includeNoEquipment,
});

export default connect(mapStateToProps, { setIncludeNoEquipment })(
  EquipmentSelectionPage
);
