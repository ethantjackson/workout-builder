import React, { useState, useEffect } from 'react';
import GuideStep from '../../components/layout/guideStep/GuideStep';
import RestStep from '../../components/layout/restStep/RestStep';
import BackButton from '../../components/layout/backButton/BackButton';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setPlanID,
  setPlanName,
  setPlanSteps,
} from '../../actions/WorkoutPlanActions';
// import M from 'materialize-css/dist/js/materialize.min.js';
import './PlanGuidePage.css';

const PlanGuidePage = ({ plan, setPlanID, setPlanName, setPlanSteps }) => {
  let history = useHistory();
  const [workouts, setWorkouts] = useState([]);
  const [currStepIdx, setCurrStepIdx] = useState(0);
  const [isRest, setIsRest] = useState(false);
  const [currSet, setCurrSet] = useState(1);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (plan.id === null) history.push('/plans');
    //eslint-disable-next-line
  }, [plan]);
  useEffect(() => {
    if (finished) history.push('/plans');
    //eslint-disable-next-line
  }, [finished]);

  const getWorkout = async (workoutID) => {
    const res = await fetch('/workout/' + workoutID);
    const data = await res.json();
    return data;
  };

  const getWorkoutArr = async (workoutIDs) => {
    const imgs = await Promise.all(
      workoutIDs.map(async (workoutID) => await getWorkout(workoutID))
    );
    setWorkouts(imgs);
  };

  useEffect(() => {
    const workoutIDs = plan.steps.map((step) => step.workout_id);
    getWorkoutArr(workoutIDs);
    //eslint-disable-next-line
  }, []);

  const getContent = () => {
    if (!isRest) {
      return (
        <GuideStep
          workout={workouts[currStepIdx]}
          step={plan.steps[currStepIdx]}
          currSet={currSet}
        />
      );
    } else {
      return (
        <RestStep
          restTime={
            currSet < plan.steps[currStepIdx].sets
              ? plan.steps[currStepIdx].setRest
              : plan.steps[currStepIdx].workoutRest
          }
          getNext={getNext}
        />
      );
    }
  };

  const getPreviewContent = () => {
    if (!isRest) {
      if (
        currSet < plan.steps[currStepIdx].sets
          ? plan.steps[currStepIdx].setRest > 0
          : plan.steps[currStepIdx].workoutRest > 0
      )
        return (
          <div className='restPreview'>
            <div className='restPreviewText'>
              {currSet < plan.steps[currStepIdx].sets
                ? plan.steps[currStepIdx].setRest
                : plan.steps[currStepIdx].workoutRest}
              s
            </div>
          </div>
        );
    }

    if (currSet < plan.steps[currStepIdx].sets)
      return (
        <img
          src={workouts[currStepIdx].demo}
          className='stepPreviewImg'
          alt='step-preview-img'
        />
      );
    else {
      if (currStepIdx + 1 < plan.steps.length) {
        return (
          <img
            src={workouts[currStepIdx + 1].demo}
            className='stepPreviewImg'
            alt='step-preview-img'
          />
        );
      } else {
        return (
          <div className='restPreview'>
            <div className='restPreviewText' style={{ fontSize: '2rem' }}>
              DONE!
            </div>
          </div>
        );
      }
    }
  };

  const getNext = () => {
    if (
      !isRest &&
      (currSet < plan.steps[currStepIdx].sets
        ? plan.steps[currStepIdx].setRest > 0
        : plan.steps[currStepIdx].workoutRest > 0)
    ) {
      // go to rest
      setIsRest(true);
    } else {
      setIsRest(false);
      if (currSet >= plan.steps[currStepIdx].sets) {
        //completed workout rest
        if (currStepIdx + 1 >= plan.steps.length) setFinished(true);
        else {
          setCurrStepIdx(currStepIdx + 1);
          setCurrSet(1);
        }
      } else {
        setCurrSet(currSet + 1);
      }
    }
  };

  return (
    <>
      {workouts.length > 0 && (
        <>
          {getContent()}
          <div className='row'>
            <div
              className='col s4 offset-s8 m2 offset-m8 xl1 offset-xl8 nextStepPreview'
              onClick={getNext}
            >
              <p>TO NEXT</p>
              {getPreviewContent()}
            </div>
          </div>
        </>
      )}
      <BackButton
        altText={'CANCEL'}
        target='/plans'
        onClick={() => {
          setPlanID(null);
          setPlanName('');
          setPlanSteps([]);
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  plan: state.plan,
});

PlanGuidePage.propTypes = {
  plan: PropTypes.object.isRequired,
  setPlanID: PropTypes.func.isRequired,
  setPlanName: PropTypes.func.isRequired,
  setPlanSteps: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  setPlanID,
  setPlanName,
  setPlanSteps,
})(PlanGuidePage);
