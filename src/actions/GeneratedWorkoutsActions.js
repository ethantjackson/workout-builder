import {
  GET_WORKOUTS,
  CLEAR_WORKOUTS,
  SHUFFLE_WORKOUTS,
  WORKOUTS_ERROR,
  SET_WORKOUTS_LOADING,
} from './types';

import _ from 'lodash';

export const getWorkouts = (workout) => async (dispatch) => {
  try {
    const snakeCaseStringify = (arr) => {
      return arr.map((item) => _.snakeCase(item)).join('-');
    };

    const res = await fetch(
      '/workout/workouts/' +
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

export const shuffleWorkouts = () => {
  return {
    type: SHUFFLE_WORKOUTS,
  };
};

export const setWorkoutsLoading = () => {
  return {
    type: SET_WORKOUTS_LOADING,
  };
};
