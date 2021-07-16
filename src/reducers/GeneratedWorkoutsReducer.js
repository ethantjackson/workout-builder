import {
  GET_WORKOUTS,
  CLEAR_WORKOUTS,
  WORKOUTS_ERROR,
  SET_LOADING,
} from '../actions/types';

const initialState = {
  workouts: [],
  loading: false,
  error: null,
};

const GeneratedWorkoutsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORKOUTS:
      return {
        ...state,
        workouts: action.payload,
        loading: false,
      };
    case CLEAR_WORKOUTS:
      return {
        ...state,
        workouts: [],
      };
    case WORKOUTS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default GeneratedWorkoutsReducer;
