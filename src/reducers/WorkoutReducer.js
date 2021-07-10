import {
  SET_EQUIPMENT,
  SET_SUB_MUSCLES,
  SET_MUSCLE_GROUP,
  SET_INCLUDE_NO_EQUIPMENT,
  SET_LOADING,
  WORKOUT_ERROR,
} from '../actions/types';

const initialState = {
  muscleGroup: '',
  subMuscles: [],
  equipment: [],
  includeNoEquipment: true,
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
    case SET_EQUIPMENT:
      return {
        ...state,
        equipment: action.payload,
      };
    case SET_INCLUDE_NO_EQUIPMENT:
      return {
        ...state,
        includeNoEquipment: action.payload,
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
