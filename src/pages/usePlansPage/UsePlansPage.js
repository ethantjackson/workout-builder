import React, { useEffect } from 'react';
import PlanActionCard from '../../components/layout/planActionCard/PlanActionCard';
import BackButton from '../../components/layout/backButton/BackButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserPlans } from '../../actions/UserActions';
import './UsePlansPage.css';

const UsePlansPage = ({ currUser, currUserPlans, getUserPlans }) => {
  useEffect(() => {
    getUserPlans();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className='container'>
        <h1 className='instructionsHeader'>
          <span className='userName'>{currUser.name}'s</span> Workout Plans
        </h1>
        {currUserPlans.map((plan) => (
          <PlanActionCard key={plan._id} plan={plan} />
        ))}
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
};

export default connect(mapStateToProps, { getUserPlans })(UsePlansPage);
