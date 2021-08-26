import {
  SET_CURR_USER,
  GET_CURR_USER_PLANS,
  DELETE_CURR_USER_PLAN,
  SET_MESSAGE,
  SET_AUTHENTICATED,
  USERS_ERROR,
} from '../actions/types';

//TODO implement toastMessage (set ToastMessage on 401 res in actions)
const initialState = {
  currUser: null,
  currUserPlans: [],
  isAuthenticated: false,
  message: null,
  error: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURR_USER:
      return {
        ...state,
        currUser: action.payload,
      };
    case GET_CURR_USER_PLANS:
      return {
        ...state,
        currUserPlans: action.payload,
      };
    case DELETE_CURR_USER_PLAN:
      return {
        ...state,
        currUserPlans: state.currUserPlans.filter(
          (plan) => plan._id !== action.payload.toString()
        ),
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case USERS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
