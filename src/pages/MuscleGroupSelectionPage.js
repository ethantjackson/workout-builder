import React from 'react';
import MuscleGroupSelector from '../components/selectors/muscles/MuscleGroupSelector';
import BackButton from '../components/layout/backButton/BackButton';
import NextButton from '../components/layout/nextButton/NextButton';

const MuscleGroupSelectionPage = ({ isNested, getNextSelector }) => {
  const handleNext = (e) => {
    if (isNested) {
      e.preventDefault();
      getNextSelector();
    }
  };
  return (
    <>
      <h1 className='instructionsHeader'>Select a muscle group to begin</h1>
      <MuscleGroupSelector />
      {!isNested && <BackButton target='/home-page' />}
      <NextButton target={'/sub-muscle-selection'} onClick={handleNext} />
    </>
  );
};

export default MuscleGroupSelectionPage;
