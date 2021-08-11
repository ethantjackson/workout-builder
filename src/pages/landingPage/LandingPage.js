import React from 'react';
import { Front } from '../../img/index';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <>
      <div className='landingContainer row'>
        <div className='col m6 landingImgDiv hide-on-med-and-down'>
          <img className='landingImg' src={Front} alt='landing-img' />
        </div>
        <div className='col s12 l6 loginDiv'>
          <h1 className='instructionsHeader'>WORKOUT BUILDER</h1>
          <div className='socialBtnDiv'>
            <a className='socialBtn google' href='#!'>
              <i className='fab fa-google'></i> &nbsp; Sign in with Google
            </a>
          </div>
          <div className='socialBtnDiv'>
            <a className='socialBtn facebook' href='#!'>
              <i className='fab fa-facebook'></i> &nbsp; Sign in with Facebook
            </a>
          </div>
          {/* <hr /> */}
          <form className='loginForm' action=''>
            <div className='row'>
              <div className='input-field col s8 xl6 offset-s2 offset-xl3'>
                <input id='email' type='email' />
                <label htmlFor='email'>Email</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s8 xl6 offset-s2 offset-xl3'>
                <input id='password' type='password' autoComplete='on' />
                <label htmlFor='password'>Password</label>
              </div>
            </div>
          </form>
          <a href='/home-page' className='signInButton'>
            SIGN IN
          </a>
          <p className='accountSubText'>
            <a href='#create-account-modal' className='modal-trigger '>
              Create an account{' '}
              <i className='material-icons tiny'>info_outline</i>
            </a>
          </p>
          <p className='accountSubText'>
            <a href='/muscle-group-selection' className='modal-trigger '>
              Continue as guest
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
