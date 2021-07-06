import React from 'react';
import SubMuscleSelector from '../components/selectors/subMuscles/SubMuscleSelector.js';
import NextButton from '../components/layout/nextButton/NextButton';
import BackButton from '../components/layout/backButton/BackButton';

const SubMuscleSelectionPage = () => {
  return (
    <>
      <h1 className='instructionsHeader'>Target muscles</h1>
      <SubMuscleSelector />
      <BackButton target='/muscle-group-selection' />
      <NextButton target='/' />
    </>
  );
};

export default SubMuscleSelectionPage;
