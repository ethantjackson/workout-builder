import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ClearButton from '../components/layout/clearButton/ClearButton';
import AllButton from '../components/layout/allButton/AllButton';
import NextButton from '../components/layout/nextButton/NextButton';
import BackButton from '../components/layout/backButton/BackButton';

const EquipmentSelectionPage = ({ muscleGroup, subMuscles }) => {
  return (
    <>
      <h1 className='instructionsHeader'>
        Select {_.lowerCase(muscleGroup)} equipment
      </h1>
      <ClearButton />
      <AllButton />
      <BackButton target='/sub-muscle-selection' />
      <NextButton target='/' />
    </>
  );
};

EquipmentSelectionPage.propTypes = {
  subMuscles: PropTypes.array.isRequired,
  muscleGroup: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  subMuscles: state.workout.subMuscles,
  muscleGroup: state.workout.muscleGroup,
});

export default connect(mapStateToProps, {})(EquipmentSelectionPage);
