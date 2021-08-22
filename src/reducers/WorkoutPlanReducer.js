import { SET_PLAN_NAME, SET_PLAN_STEPS, PLANS_ERROR } from '../actions/types';

const initialState = {
  name: 'Test',
  steps: [
    {
      reps: 8,
      sets: 4,
      setRest: 100,
      workoutRest: 130,
      _id: '0',
      workout_id: '60f070673152366ab62c3593',
    },
    {
      reps: 20,
      sets: 5,
      setRest: 60,
      workoutRest: 0,
      _id: '1',
      workout_id: '610d894118065b373c0b0cf3',
    },
  ],
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
