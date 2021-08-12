import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions/UserActions';

const CreateAccountForm = ({ registerUser }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    if (email === '' || password === '' || confirmPassword === '') {
      e.preventDefault();
      M.toast({ html: 'Please enter a valid email and password...' });
    } else if (password !== confirmPassword) {
      e.preventDefault();
      M.toast({ html: 'The provided passwords do not match...' });
    } else {
      //add user
      registerUser({
        email: email,
        name: name,
        password: password,
      });
      setEmail('');
      setName('');
      setPassword('');
    }
  };

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
        <a
          href='/home-page'
          onClick={handleSubmit}
          className='modal-close signInButton'
        >
          Enter
        </a>
      </form>
    </div>
  );
};

CreateAccountForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

export default connect(null, { registerUser })(CreateAccountForm);
