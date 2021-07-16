import React, { useEffect } from 'react';
import WorkoutCard from '../../components/layout/workoutCard/WorkoutCard';
import RestartButton from '../../components/layout/restartButton/RestartButton';
import Preloader from '../../components/layout/Preloader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getWorkouts,
  setLoading,
} from '../../actions/GeneratedWorkoutsActions';
import './GeneratedWorkoutsPage.css';

const GeneratedWorkoutsPage = ({
  workout,
  generatedWorkouts: { workouts, loading },
  getWorkouts,
  setLoading,
}) => {
  useEffect(() => {
    setLoading();
    getWorkouts(workout);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className='container workoutCardsContainer'>
        <h1 className='instructionsHeader'>Generated Workouts</h1>
        {workouts.length === 0 ? (
          <p>{'No workouts found :('}</p>
        ) : loading || workouts === null ? (
          <Preloader />
        ) : (
          <div className='row'>
            {workouts.map((workoutItem, index) => {
              return <WorkoutCard workout={workoutItem} key={index} />;
            })}
          </div>
        )}
      </div>
      {!loading && workouts !== null && <RestartButton />}
    </>
  );
};

const mapStateToProps = (state) => ({
  workout: state.workout,
  generatedWorkouts: state.generatedWorkouts,
});

GeneratedWorkoutsPage.propTypes = {
  generatedWorkouts: PropTypes.object.isRequired,
  getWorkouts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getWorkouts, setLoading })(
  GeneratedWorkoutsPage
);
