import React from 'react';
import MuscleGroupSelector from '../components/selectors/muscles/MuscleGroupSelector';
import BackButton from '../components/layout/backButton/BackButton';
import NextButton from '../components/layout/nextButton/NextButton';

const MuscleGroupSelectionPage = () => {
  return (
    <>
      <h1 className='instructionsHeader'>Select a muscle group to begin</h1>
      <MuscleGroupSelector />
      <BackButton target='/' />
      <NextButton target={'/sub-muscle-selection'} />
    </>
  );
};

export default MuscleGroupSelectionPage;
