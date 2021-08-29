import React, { useState } from 'react';
import PlanPreview from '../components/layout/planPreview/PlanPreview';
import MuscleGroupSelectionPage from '../pages/MuscleGroupSelectionPage';
import SubMuscleSelectionPage from './SubMuscleSelectionPage';
import EquipmentSelectionPage from './EquipmentSelectionPage';
import GeneratedWorkoutsPage from './generatedWorkoutsPage/GeneratedWorkoutsPage';
import BackButton from '../components/layout/backButton/BackButton';
import { connect } from 'react-redux';
import { addPlanStep } from '../actions/WorkoutPlanActions';
import { useHistory } from 'react-router-dom';

const AddStepPage = ({ id, addPlanStep }) => {
  let history = useHistory();
  const [selectorIdx, setSelectorIdx] = useState(0);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const getPreviousSelector = () => {
    setSelectorIdx(selectorIdx - 1 < 0 ? 0 : selectorIdx - 1);
  };

  const getNextSelector = () => {
    if (selectorIdx + 1 >= selectors.length) {
      addPlanStep({
        reps: 12,
        sets: 3,
        setRest: 60,
        workoutRest: 0,
        workout_id: selectedWorkout._id,
      });
      if (id === null) history.push('/plan');
      else history.push('/edit-plan');
    }
    setSelectorIdx(selectorIdx + 1);
  };

  const selectors = [
    <MuscleGroupSelectionPage
      isNested={true}
      getNextSelector={getNextSelector}
    />,
    <SubMuscleSelectionPage
      isNested={true}
      getPreviousSelector={getPreviousSelector}
      getNextSelector={getNextSelector}
    />,
    <EquipmentSelectionPage
      isNested={true}
      getPreviousSelector={getPreviousSelector}
      getNextSelector={getNextSelector}
    />,
    <GeneratedWorkoutsPage
      isNested={true}
      getPreviousSelector={getPreviousSelector}
      getNextSelector={getNextSelector}
      setSelectedWorkout={setSelectedWorkout}
    />,
  ];

  return (
    <>
      <div
        style={{
          position: 'relative',
          height: '86%',
          overflowY: selectorIdx !== 0 ? 'auto' : 'hidden',
        }}
      >
        {selectors[selectorIdx]}
      </div>
      <BackButton altText='CANCEL' target='/plan' />
      <PlanPreview selectedWorkout={selectedWorkout} />
    </>
  );
};

const mapStateToProps = (state) => ({
  id: state.plan.id,
});

export default connect(mapStateToProps, { addPlanStep })(AddStepPage);
