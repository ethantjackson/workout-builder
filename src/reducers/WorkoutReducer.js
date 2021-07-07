import {
  SET_SUB_MUSCLES,
  SET_MUSCLE_GROUP,
  SET_LOADING,
  WORKOUT_ERROR,
} from '../actions/types';

const initialState = {
  muscleGroup: '',
  subMuscles: [],
  equipment: [],
  loading: false,
  error: false,
};

const WorkoutReducer = (state = initialState, action) => {
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
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case WORKOUT_ERROR:
      console.error(action.payload);
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default WorkoutReducer;
