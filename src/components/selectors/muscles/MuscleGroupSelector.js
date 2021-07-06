import React, { useState, useEffect } from 'react';
import Back from '../../../img/back.png';
import Front from '../../../img/front.png';
import Side from '../../../img/side.png';
import Legs from '../../../img/legs.png';
import Arms from '../../../img/arms.png';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './MuscleGroupSelector.css';

const MuscleGroupSelector = () => {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState(null);
  useEffect(() => {
    var instance = document.querySelectorAll('.carousel');
    M.Carousel.init(instance, {
      indicators: true,
      onCycleTo: (e) => setSelectedMuscleGroup(e.id),
    });
  }, []);

  return (
    <>
      {selectedMuscleGroup !== null && (
        <h4 className='instructionsSubHeader'>{selectedMuscleGroup}</h4>
      )}
      <div className='carousel no-autoinit'>
        <a className='carousel-item' href='#front' id='CHEST'>
          <img src={Front} alt='front-img' />
        </a>
        <a className='carousel-item' href='#back' id='BACK'>
          <img src={Back} alt='back-img' />
        </a>
        <a className='carousel-item' href='#side' id='SHOULDERS'>
          <img src={Side} alt='side-img' />
        </a>
        <a className='carousel-item' href='#legs' id='LEGS'>
          <img src={Legs} alt='legs-img' />
        </a>
        <a className='carousel-item' href='#arms' id='ARMS'>
          <img src={Arms} alt='arms-img' />
        </a>
      </div>
    </>
  );
};

export default MuscleGroupSelector;
