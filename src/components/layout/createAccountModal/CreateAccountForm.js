import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  registerUser,
  loginUser,
  setMessage,
} from '../../../actions/UserActions';
import { useHistory } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

const CreateAccountForm = ({
  registerUser,
  loginUser,
  setMessage,
  message,
}) => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email === '' ||
      password === '' ||
      confirmPassword === '' ||
      name === ''
    ) {
      M.toast({ html: 'Please enter a valid email and password...' });
    } else if (password.length < 8) {
      M.toast({ html: 'Password must be at least 8 characters long...' });
    } else if (password !== confirmPassword) {
      M.toast({ html: 'The provided passwords do not match...' });
    } else {
      registerUser({
        email: email,
        name: name,
        password: password,
      });
    }
  };

  useEffect(() => {
    if (message?.toLowerCase().includes('success')) {
      loginUser({ email: email, password: password });
    }
    setEmail('');
    setName('');
    setPassword('');
    setConfirmPassword('');
    //eslint-disable-next-line
  }, [message]);

  return (
    <div className='createAccountForm'>
      <h4 className='instructionsHeader'>Create Account</h4>
      <form>
        <div className='row'>
          <div className='input-field col s12 xl8 offset-xl2'>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='email' className='active'>
              Email
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12 xl8 offset-xl2'>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='name' className='active'>
              Preferred Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12 xl8 offset-xl2'>
            <input
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor='password' className='active'>
              Password
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12 xl8 offset-xl2'>
            <input
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor='confirmPassword' className='active'>
              Confirm Password
            </label>
          </div>
        </div>
        <a href='/' onClick={handleSubmit} className='signInButton'>
          Enter
        </a>
      </form>
    </div>
  );
};

CreateAccountForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  message: state.user.message,
});

export default connect(mapStateToProps, {
  registerUser,
  loginUser,
  setMessage,
})(CreateAccountForm);
