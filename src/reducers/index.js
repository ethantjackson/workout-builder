import { combineReducers } from 'redux';
import WorkoutReducer from './WorkoutReducer';
import GeneratedWorkoutsReducer from './GeneratedWorkoutsReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  workout: WorkoutReducer,
  generatedWorkouts: GeneratedWorkoutsReducer,
  user: UserReducer,
});
