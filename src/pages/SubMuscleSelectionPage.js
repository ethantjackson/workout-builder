import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import SubMuscleSelector from '../components/selectors/subMuscles/SubMuscleSelector.js';
import NextButton from '../components/layout/nextButton/NextButton';
import BackButton from '../components/layout/backButton/BackButton';

const SubMuscleSelectionPage = ({ subMuscles, isNested }) => {
  const handleNext = (e) => {
    if (subMuscles.length === 0) {
      e.preventDefault();
      M.toast({ html: 'Please select target muscles.' });
    }
  };
  return (
    <>
      <h1 className='instructionsHeader'>Target muscles</h1>
      <SubMuscleSelector isNested={isNested} />
      <BackButton isNested={isNested} target='/muscle-group-selection' />
      <NextButton
        target='/equipment-selection'
        onClick={(e) => handleNext(e)}
      />
    </>
  );
};

SubMuscleSelectionPage.propTypes = {
  subMuscles: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  subMuscles: state.workout.subMuscles,
});

export default connect(mapStateToProps, {})(SubMuscleSelectionPage);
