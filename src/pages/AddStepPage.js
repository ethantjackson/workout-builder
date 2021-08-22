import React, { useState } from 'react';
import PlanPreview from '../components/layout/planPreview/PlanPreview';
// import MuscleGroupSelector from '../components/selectors/muscles/MuscleGroupSelector';
import MuscleGroupSelectionPage from '../pages/MuscleGroupSelectionPage';
// import SubMuscleSelector from '../components/selectors/subMuscles/SubMuscleSelector';
import SubMuscleSelectionPage from './SubMuscleSelectionPage';
import BackButton from '../components/layout/backButton/BackButton';
import NextButton from '../components/layout/nextButton/NextButton';

const selectors = [
  <MuscleGroupSelectionPage />,
  <SubMuscleSelectionPage isNested={true} />,
];

const AddStepPage = () => {
  const [selectorIdx, setSelectorIdx] = useState(0);

  const getNextSelector = () => {
    setSelectorIdx(selectorIdx + 1 >= selectors.length ? 0 : selectorIdx + 1);
  };

  return (
    <>
      <div
        style={{
          position: 'relative',
          height: '90%',
          overflowY: selectorIdx !== 0 ? 'auto' : 'hidden',
        }}
      >
        {selectors[selectorIdx]}
      </div>
      <BackButton altText='CANCEL' target='/plan' />
      <NextButton onClick={() => getNextSelector()} />
      <PlanPreview />
    </>
  );
};

export default AddStepPage;
