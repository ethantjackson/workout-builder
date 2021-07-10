import {
  SET_EQUIPMENT,
  SET_SUB_MUSCLES,
  SET_MUSCLE_GROUP,
  SET_INCLUDE_NO_EQUIPMENT,
  SET_LOADING,
  // WORKOUT_ERROR,
} from './types';

export const setEquipment = (equipment) => {
  return {
    type: SET_EQUIPMENT,
    payload: equipment,
  };
};

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

export const setIncludeNoEquipment = (included) => {
  console.log(included);
  return {
    type: SET_INCLUDE_NO_EQUIPMENT,
    payload: included,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
