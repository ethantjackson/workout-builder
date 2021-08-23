import {
  SET_PLAN_NAME,
  SET_PLAN_STEPS,
  ADD_PLAN_STEP,
  PLANS_ERROR,
} from '../actions/types';

const initialState = {
  name: '',
  steps: [],
  error: null,
};

const WorkoutPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAN_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_PLAN_STEPS:
      return {
        ...state,
        steps: action.payload,
      };
    case ADD_PLAN_STEP:
      return {
        ...state,
        steps: [...state.steps, action.payload],
      };
    case PLANS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default WorkoutPlanReducer;
