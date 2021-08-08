import {
  GET_WORKOUTS,
  CLEAR_WORKOUTS,
  SHUFFLE_WORKOUTS,
  WORKOUTS_ERROR,
  SET_WORKOUTS_LOADING,
} from '../actions/types';

const initialState = {
  workouts: [],
  loading: false,
  error: null,
};

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

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
    case SHUFFLE_WORKOUTS:
      return {
        ...state,
        workouts: shuffle(state.workouts),
      };
    case WORKOUTS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case SET_WORKOUTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default GeneratedWorkoutsReducer;
