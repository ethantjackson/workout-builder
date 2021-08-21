import React, { useState, useEffect } from 'react';
import PlanEditor from '../components/plans/PlanEditor';
// // import PropTypes from 'prop-types';
// // import { connect } from 'react-redux';
// import { getWorkout } from '../actions/GeneratedWorkoutsActions';
import BackButton from '../components/layout/backButton/BackButton';

const NewPlanPage = ({ getWorkout }) => {
  const [plan, setPlan] = useState({
    name: 'Test Plan',
    steps: [
      {
        reps: 8,
        sets: 4,
        setRest: 100,
        workoutRest: 130,
        workout_id: '60f070673152366ab62c3593',
      },
      {
        reps: 20,
        sets: 5,
        setRest: 60,
        workoutRest: 0,
        workout_id: '610d894118065b373c0b0cf3',
      },
    ],
  });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('/workout/60f070673152366ab62c3593');
  //     const data = await res.json();
  //     console.log(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <div className='container'>
        <h1 className='instructionsHeader'>New Workout Plan</h1>
        <PlanEditor plan={plan} />
      </div>
      <BackButton altText={'SAVE PLAN'} target='/home-page' />
    </>
  );
};

// NewPlanPage.propTypes = {
//   getWorkout: PropTypes.func.isRequired,
// };

// export default connect(null, { getWorkout })(NewPlanPage);

export default NewPlanPage;
