import { combineReducers } from 'redux';
import WorkoutReducer from './WorkoutReducer';
import GeneratedWorkoutsReducer from './GeneratedWorkoutsReducer';

export default combineReducers({
  workout: WorkoutReducer,
  generatedWorkouts: GeneratedWorkoutsReducer,
});
