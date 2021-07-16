import {
  GET_WORKOUTS,
  CLEAR_WORKOUTS,
  WORKOUTS_ERROR,
  SET_LOADING,
} from './types';

import _ from 'lodash';

export const getWorkouts = (workout) => async (dispatch) => {
  try {
    // setLoading();

    const snakeCaseStringify = (arr) => {
      return arr.map((item) => _.snakeCase(item)).join('-');
    };

    const res = await fetch(
      '/workouts/' +
        snakeCaseStringify(workout.subMuscles) +
        '&' +
        snakeCaseStringify(workout.equipment)
    );
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

export const clearWorkouts = () => {
  return {
    type: CLEAR_WORKOUTS,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
