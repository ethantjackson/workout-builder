import React, { useEffect } from 'react';
import PlanActionCard from '../../components/layout/planActionCard/PlanActionCard';
import BackButton from '../../components/layout/backButton/BackButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserPlans, deleteUserPlan } from '../../actions/UserActions';
import {
  setPlanID,
  setPlanName,
  setPlanSteps,
} from '../../actions/WorkoutPlanActions';
import './UsePlansPage.css';

const UsePlansPage = ({
  currUser,
  currUserPlans,
  getUserPlans,
  deleteUserPlan,
  setPlanID,
  setPlanName,
  setPlanSteps,
}) => {
  useEffect(() => {
    getUserPlans();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className='container'>
        <h1 className='usePlanHeader'>
          <span className='userName'>{currUser.name}'s</span> Workout Plans
        </h1>
        {currUserPlans.map((plan) => (
          <PlanActionCard
            key={plan._id}
            plan={plan}
            deleteUserPlan={deleteUserPlan}
            setPlanID={setPlanID}
            setPlanName={setPlanName}
            setPlanSteps={setPlanSteps}
          />
        ))}
        {currUserPlans.length <= 0 && (
          <>
            <h3 className='usePlanSubHeader'>No plans yet...</h3>
            <a className='addPlanBtn' href='/plan'>
              + ADD WORKOUT PLAN
            </a>
          </>
        )}
      </div>
      <BackButton altText={'HOME'} target='/home-page' />
    </>
  );
};

const mapStateToProps = (state) => ({
  currUser: state.user.currUser,
  currUserPlans: state.user.currUserPlans,
});

UsePlansPage.propTypes = {
  currUser: PropTypes.object.isRequired,
  currUserPlans: PropTypes.array.isRequired,
  getUserPlans: PropTypes.func.isRequired,
  deleteUserPlan: PropTypes.func.isRequired,
  setPlanID: PropTypes.func.isRequired,
  setPlanName: PropTypes.func.isRequired,
  setPlanSteps: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  getUserPlans,
  deleteUserPlan,
  setPlanID,
  setPlanName,
  setPlanSteps,
})(UsePlansPage);
