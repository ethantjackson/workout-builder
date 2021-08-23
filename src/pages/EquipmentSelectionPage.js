import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import EquipmentSelector from '../components/selectors/equipment/EquipmentSelector';
import NextButton from '../components/layout/nextButton/NextButton';
import BackButton from '../components/layout/backButton/BackButton';

const EquipmentSelectionPage = ({
  muscleGroup,
  equipment,
  loading,
  isNested,
  getPreviousSelector,
  getNextSelector,
}) => {
  const handleBack = (e) => {
    if (isNested) {
      e.preventDefault();
      getPreviousSelector();
    }
  };

  const handleNext = (e) => {
    if (equipment.length <= 0) {
      e.preventDefault();
      M.toast({ html: 'Please select equipment.' });
    } else if (isNested) {
      e.preventDefault();
      getNextSelector();
    }
  };

  return (
    <>
      <h1 className='instructionsHeader'>
        Select {_.lowerCase(muscleGroup)} equipment
      </h1>
      <EquipmentSelector isNested={isNested} />
      {!loading && (
        <>
          <BackButton
            target='/sub-muscle-selection'
            onClick={handleBack}
            isNested={isNested}
          />
          <NextButton
            target='/workouts'
            onClick={handleNext}
            isNested={isNested}
          />
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
