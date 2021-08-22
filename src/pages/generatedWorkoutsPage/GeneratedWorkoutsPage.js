import React, { useEffect, useState } from 'react';
import WorkoutCard from '../../components/layout/workoutCard/WorkoutCard';
import RestartButton from '../../components/layout/restartButton/RestartButton';
import PrimaryButton from '../../components/layout/primaryButton/PrimaryButton';
import BackButton from '../../components/layout/backButton/BackButton';
import NextButton from '../../components/layout/nextButton/NextButton';
import Preloader from '../../components/layout/Preloader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getWorkouts,
  setWorkoutsLoading,
  shuffleWorkouts,
} from '../../actions/GeneratedWorkoutsActions';
import './GeneratedWorkoutsPage.css';

const GeneratedWorkoutsPage = ({
  workout,
  generatedWorkouts: { workouts, loading },
  getWorkouts,
  setWorkoutsLoading,
  shuffleWorkouts,
  isNested,
  getPreviousSelector,
  getNextSelector,
  setSelectedWorkout,
}) => {
  const [cardRows, setCardRows] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const makeRows = () => {
    var size = windowSize.width >= 992 ? 2 : 1;
    var rows = [];
    for (let i = 0; i < workouts.length; i += size) {
      rows.push(workouts.slice(i, i + size));
    }
    setCardRows(rows);
  };

  useEffect(() => {
    setWorkoutsLoading();
    getWorkouts(workout);

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    makeRows();
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    makeRows();
    // eslint-disable-next-line
  }, [workouts, windowSize]);

  return (
    <>
      <div className='container workoutCardsContainer'>
        <h1 className='instructionsHeader'>Generated Workouts</h1>
        {loading || workouts === null ? (
          <Preloader />
        ) : (
          cardRows.map((row, rowIndex) => (
            <div className='row' key={rowIndex}>
              {row.map((workoutItem) => (
                <div
                  className={
                    'col s12 l6' +
                    (row.length === 1 && rowIndex === cardRows.length - 1
                      ? ' offset-l3'
                      : '')
                  }
                  key={workoutItem.name}
                >
                  <WorkoutCard
                    workout={workoutItem}
                    setSelectedWorkout={setSelectedWorkout}
                  />
                </div>
              ))}
            </div>
          ))
        )}
      </div>
      {!loading && workouts !== null && (
        <>
          {!isNested && <RestartButton />}
          {isNested && (
            <>
              <BackButton onClick={getPreviousSelector} isNested={isNested} />
              <NextButton
                onClick={getNextSelector}
                is
                Nested={isNested}
                altText='ADD STEP'
              />
            </>
          )}
          <PrimaryButton
            tooltipText='Shuffle'
            materialIcon='casino'
            onClick={() => {
              shuffleWorkouts();
              makeRows();
            }}
            isNested={isNested}
          />
        </>
      )}
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

export default connect(mapStateToProps, {
  getWorkouts,
  setWorkoutsLoading,
  shuffleWorkouts,
})(GeneratedWorkoutsPage);
