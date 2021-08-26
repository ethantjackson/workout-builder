import React from 'react';
import RestStep from '../components/layout/restStep/RestStep';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setPlanID,
  setPlanName,
  setPlanSteps,
} from '../actions/WorkoutPlanActions';

const PlanGuidePage = ({
  id,
  name,
  steps,
  setPlanID,
  setPlanName,
  setPlanSteps,
}) => {
  return <RestStep restTime={12} />;
};

const mapStateToProps = (state) => ({
  id: state.plan.id,
  name: state.plan.name,
  steps: state.plan.steps,
});

PlanGuidePage.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
  setPlanID: PropTypes.func.isRequired,
  setPlanName: PropTypes.func.isRequired,
  setPlanSteps: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  setPlanID,
  setPlanName,
  setPlanSteps,
})(PlanGuidePage);
