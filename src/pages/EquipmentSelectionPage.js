import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import EquipmentSelector from '../components/selectors/equipment/EquipmentSelector';
import NextButton from '../components/layout/nextButton/NextButton';
import BackButton from '../components/layout/backButton/BackButton';

const EquipmentSelectionPage = ({ muscleGroup, equipment, loading }) => {
  const handleNext = (e) => {
    if (equipment.length <= 0) {
      e.preventDefault();
      M.toast({ html: 'Please select equipment.' });
    }
  };

  return (
    <>
      <h1 className='instructionsHeader'>
        Select {_.lowerCase(muscleGroup)} equipment
      </h1>
      <EquipmentSelector />
      {!loading && (
        <>
          <BackButton target='/sub-muscle-selection' />
          <NextButton target='/workouts' onClick={(e) => handleNext(e)} />
        </>
      )}
    </>
  );
};

EquipmentSelectionPage.propTypes = {
  muscleGroup: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  muscleGroup: state.workout.muscleGroup,
  equipment: state.workout.equipment,
  loading: state.workout.loading,
});

export default connect(mapStateToProps, {})(EquipmentSelectionPage);
