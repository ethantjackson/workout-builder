import { combineReducers } from 'redux';
import WorkoutReducer from './WorkoutReducer';

export default combineReducers({ workout: WorkoutReducer });
