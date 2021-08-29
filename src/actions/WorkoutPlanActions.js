import {
  SET_PLAN_ID,
  SET_PLAN_NAME,
  SET_PLAN_STEPS,
  ADD_PLAN_STEP,
  SET_MESSAGE,
  PLANS_ERROR,
} from './types';

import { getUserPlans } from './UserActions';

export const setPlanID = (id) => {
  return { type: SET_PLAN_ID, payload: id };
};

export const setPlanName = (name) => {
  return { type: SET_PLAN_NAME, payload: name };
};

export const setPlanSteps = (steps) => {
  return { type: SET_PLAN_STEPS, payload: steps };
};

export const addPlanStep = (step) => {
  return { type: ADD_PLAN_STEP, payload: step };
};

export const addPlan = (plan) => async (dispatch) => {
  //try save plan (edit to be save or replace)
  //if valid id edit if invalid add
  try {
    const res = await fetch('/user/plan', {
      method: 'POST',
      body: JSON.stringify(plan),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.status !== 401) {
      const data = await res.json();
      if (data.message.msgError === false) {
        dispatch(getUserPlans());
      } else {
        dispatch({ type: SET_MESSAGE, payload: data.message.msgBody });
      }
    } else {
      dispatch({
        type: SET_MESSAGE,
        payload: 'Cannot add workout plan.',
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: PLANS_ERROR, payload: err.response.data });
  }
};

export const updatePlan = (id, plan) => async (dispatch) => {
  alert(id);
  try {
    const res = await fetch('user/plan/' + id, {
      method: 'PUT',
      body: JSON.stringify(plan),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.status !== 401) {
      const data = await res.json();
      if (data.message.msgError === false) {
        dispatch(getUserPlans());
      } else {
        dispatch({ type: SET_MESSAGE, payload: data.message.msgBody });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: PLANS_ERROR, payload: err.response.data });
  }
};
