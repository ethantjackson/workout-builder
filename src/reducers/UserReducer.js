import { SET_CURR_USER, USERS_ERROR } from '../actions/types';

const initialState = {
  currUser: null,
  error: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURR_USER:
      return {
        ...state,
        currUser: action.payload,
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
