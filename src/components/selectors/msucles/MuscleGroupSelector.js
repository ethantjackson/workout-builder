import React, { useState, useEffect } from 'react';
import Back from '../../../img/back.png';
import Front from '../../../img/front.png';
import Side from '../../../img/side.png';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './MuscleGroupSelector.css';

const MuscleGroupSelector = () => {
  useEffect(() => {
    M.AutoInit();
    var instance = M.Carousel.init({
      indicators: true,
    });
  }, []);

  return (
    <>
      <h1 className='instructionsHeader'>SELECT A MUSCLE GROUP TO BEGIN</h1>
      <div className='carousel no-autoinit'>
        <a className='carousel-item' href='#front'>
          <img src={Front} alt='front-img' />
        </a>
        <a className='carousel-item' href='#back'>
          <img src={Back} alt='back-img' />
        </a>
        <a className='carousel-item' href='#side'>
          <img src={Side} alt='side-img' />
        </a>
      </div>
    </>
  );
};

export default MuscleGroupSelector;
