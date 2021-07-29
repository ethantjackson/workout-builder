import {
  SET_EQUIPMENT,
  SET_SUB_MUSCLES,
  SET_MUSCLE_GROUP,
  SET_INCLUDE_NO_EQUIPMENT,
  GET_EQUIPMENT_OPTIONS,
  SET_SELECTIONS_LOADING,
  SELECTIONS_ERROR,
} from './types';

import _ from 'lodash';

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
  return {
    type: SET_INCLUDE_NO_EQUIPMENT,
    payload: included,
  };
};

export const getEquipmentOptions = (subMuscles) => async (dispatch) => {
  try {
    const snakeCaseStringify = (arr) => {
      return arr.map((item) => _.snakeCase(item)).join('-');
    };

    const res = await fetch('/equipment/' + snakeCaseStringify(subMuscles));
    const data = await res.json();
    console.log(data);

    dispatch({
      type: GET_EQUIPMENT_OPTIONS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: SELECTIONS_ERROR,
      payload: err.response.data,
    });
  }
};

export const setSelectionsLoading = () => {
  return {
    type: SET_SELECTIONS_LOADING,
  };
};
