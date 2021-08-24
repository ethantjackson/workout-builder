import {
  SET_CURR_USER,
  GET_CURR_USER_PLANS,
  DELETE_CURR_USER_PLAN,
  SET_MESSAGE,
  SET_AUTHENTICATED,
  USERS_ERROR,
} from './types';

// TODO: login, register, logout, isauthenticated
// after each action, set curr user appropriately

export const loginUser = (user) => async (dispatch) => {
  try {
    const res = await fetch('/user/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.status !== 401) {
      const data = await res.json();
      dispatch({
        type: SET_AUTHENTICATED,
        payload: data.isAuthenticated,
      });
      dispatch({
        type: SET_CURR_USER,
        payload: data.user,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: null,
      });
    } else {
      //dispatch error message username or password incorrect
      dispatch({
        type: SET_AUTHENTICATED,
        payload: false,
      });
      dispatch({
        type: SET_CURR_USER,
        payload: { email: '', name: '' },
      });
      dispatch({
        type: SET_MESSAGE,
        payload: 'Incorrect email or password.',
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: USERS_ERROR, payload: err.response.data });
  }
};

export const getUserPlans = () => async (dispatch) => {
  try {
    const res = await fetch('/user/plans');
    if (res.status !== 401) {
      const data = await res.json();
      if (data.authenticated === true) {
        dispatch({
          type: GET_CURR_USER_PLANS,
          payload: data.workoutPlans,
        });
      }
    } else {
      dispatch({
        type: SET_MESSAGE,
        payload: "Cannot get user's workout plans",
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: USERS_ERROR, payload: err.response.data });
  }
};

export const deleteUserPlan = (planID) => async (dispatch) => {
  try {
    const res = await fetch('/user/plan/' + planID, {
      method: 'DELETE',
    });
    if (res.status !== 401) {
      const data = await res.json();
      if (!data.message.msgError) {
        dispatch({
          type: DELETE_CURR_USER_PLAN,
          payload: planID,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: USERS_ERROR, payload: err.response.data });
  }
};

export const registerUser = (user) => async (dispatch) => {
  try {
    const res = await fetch('/user/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: SET_MESSAGE,
      payload: data.message.msgBody,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: USERS_ERROR, payload: err.response.data });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const res = await fetch('/user/logout');
    const data = await res.json();
    if (data.success) {
      dispatch({
        type: SET_AUTHENTICATED,
        payload: false,
      });
      dispatch({
        type: SET_CURR_USER,
        payload: data.user, //empty user
      });
      dispatch({
        type: SET_MESSAGE,
        payload: null,
      });
    } else {
      dispatch({
        type: SET_MESSAGE,
        payload: 'Logout failed.',
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: USERS_ERROR, payload: err.response.data });
  }
};

export const setMessage = (message) => {
  return {
    type: SET_MESSAGE,
    payload: message,
  };
};

export const checkAuthenticated = () => async (dispatch) => {
  try {
    const res = await fetch('/user/authenticated');
    if (res.status !== 401) {
      const data = await res.json();
      dispatch({
        type: SET_AUTHENTICATED,
        payload: data.isAuthenticated,
      });
      dispatch({
        type: SET_CURR_USER,
        payload: data.user,
      });
    } else {
      dispatch({
        type: SET_AUTHENTICATED,
        payload: false,
      });
      dispatch({
        type: SET_CURR_USER,
        payload: { email: '', name: '' },
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: USERS_ERROR, payload: err.response.data });
  }
};
