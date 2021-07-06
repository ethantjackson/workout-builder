import { SET_SUB_MUSCLES, SET_MUSCLE_GROUP } from '../actions/types';

const initialState = {
  muscleGroup: '',
  subMuscles: [],
};

const MuscleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSCLE_GROUP:
      return {
        ...state,
        muscleGroup: action.payload,
      };
    case SET_SUB_MUSCLES:
      return {
        ...state,
        subMuscles: action.payload,
      };
    default:
      return state;
  }
};

export default MuscleReducer;
