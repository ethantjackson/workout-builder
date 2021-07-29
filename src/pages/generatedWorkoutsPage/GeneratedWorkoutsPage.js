import React, { useEffect, useState } from 'react';
import WorkoutCard from '../../components/layout/workoutCard/WorkoutCard';
import RestartButton from '../../components/layout/restartButton/RestartButton';
import Preloader from '../../components/layout/Preloader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getWorkouts,
  setWorkoutsLoading,
} from '../../actions/GeneratedWorkoutsActions';
import './GeneratedWorkoutsPage.css';

const GeneratedWorkoutsPage = ({
  workout,
  generatedWorkouts: { workouts, loading },
  getWorkouts,
  setWorkoutsLoading,
}) => {
  const [cardRows, setCardRows] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

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
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    var size = windowSize.width >= 992 ? 2 : 1;
    var rows = [];
    for (let i = 0; i < workouts.length; i += size) {
      rows.push(workouts.slice(i, i + size));
    }
    setCardRows(rows);
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
                  <WorkoutCard workout={workoutItem} />
                </div>
              ))}
            </div>
          ))
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

export default connect(mapStateToProps, { getWorkouts, setWorkoutsLoading })(
  GeneratedWorkoutsPage
);
