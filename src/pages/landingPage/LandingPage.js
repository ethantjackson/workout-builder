import React, { useState, useEffect } from 'react';
import { Front } from '../../img/index';
import './LandingPage.css';

const LandingPage = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <div className='landingContainer row'>
        {windowSize.width > 992 && (
          <div className='col m6 landingImgDiv'>
            <img className='landingImg' src={Front} alt='landing-img' />
          </div>
        )}
        <div className='col s12 l6 loginDiv'>
          <h1 className='instructionsHeader'>WORKOUT BUILDER</h1>
          <form className='loginForm' action=''>
            <div className='row'>
              <div className='input-field col s6 xl4 offset-s3 offset-xl4'>
                <input id='email' type='email' />
                <label htmlFor='email'>Email</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s6 xl4 offset-s3 offset-xl4'>
                <input id='password' type='password' autoComplete='on' />
                <label htmlFor='password'>Password</label>
              </div>
            </div>
          </form>
          <a href='/muscle-group-selection' className='signInButton'>
            SIGN IN
          </a>
          <p className='accountSubText'>
            <a href='#create-account-modal' className='modal-trigger '>
              Create an account
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
