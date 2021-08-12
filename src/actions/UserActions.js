import { SET_CURR_USER, USERS_ERROR } from './types';

export const registerUser = (user) => async (dispatch) => {
  try {
    var formBody = [];
    for (var property in user) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(user[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    const res = await fetch('/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charstet=UTF-8',
      },
      body: formBody,
    });
    const registeredUser = await res.json();

    dispatch({
      type: SET_CURR_USER,
      payload: registeredUser,
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: err.response.data,
    });
  }
};
