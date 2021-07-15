import { GET_WORKOUTS, WORKOUTS_ERROR, SET_LOADING } from './types';

export const getWorkouts = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/workouts');
    const data = await res.json();

    dispatch({
      type: GET_WORKOUTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: WORKOUTS_ERROR,
      payload: err.response.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
