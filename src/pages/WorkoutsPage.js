import React from 'react';
import WorkoutCard from '../components/layout/workoutCard/WorkoutCard';
import RestartButton from '../components/layout/restartButton/RestartButton';

const WorkoutsPage = () => {
  return (
    <>
      <div className='container'>
        <h1 className='instructionsHeader'>Generated Workouts</h1>
        <div className='row'>
          <WorkoutCard />
          <WorkoutCard />
          <WorkoutCard />
          <WorkoutCard />
        </div>
      </div>
      <RestartButton />
    </>
  );
};

export default WorkoutsPage;
