import { SET_PLAN_NAME, SET_PLAN_STEPS, PLANS_ERROR } from './types';

export const setPlanName = (name) => {
  return { type: SET_PLAN_NAME, payload: name };
};

export const setPlanSteps = (steps) => {
  return { type: SET_PLAN_STEPS, payload: steps };
};
