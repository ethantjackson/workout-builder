import {
  SET_SUB_MUSCLES,
  SET_MUSCLE_GROUP,
  SET_LOADING,
  // WORKOUT_ERROR,
} from './types';

export const setSubMuscles = (subMuscles) => {
  return {
    type: SET_SUB_MUSCLES,
    payload: subMuscles,
  };
};

export const setMuscleGroup = (muscleGroup) => {
  return {
    type: SET_MUSCLE_GROUP,
    payload: muscleGroup,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
