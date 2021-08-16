import React, { useState, useEffect } from 'react';
import { BenchPress } from '../../img/index';
import './HomePage.css';

const HomePage = () => {
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
    <div>
      <div className='topBar'>
        <div className='siteDiv'>
          <p className='siteTitle'>
            <img className='siteIcon' src={BenchPress} alt='site-icon' />{' '}
            &nbsp;&nbsp;
            {windowSize.width > 550 && 'WORKOUT BUILDER'}
          </p>
        </div>
        <div className='userDiv'>
          <ul>
            <li className='userAction'>
              <a href='#!'>logout</a>
            </li>
            <li className='userAction'>
              <a href='#!'>profile</a>
            </li>
            {windowSize.width > 550 && <li>Ethan Jackson</li>}
          </ul>
        </div>
      </div>
      <h1>Hi, Ethan Jackson</h1>
    </div>
  );
};

export default HomePage;
