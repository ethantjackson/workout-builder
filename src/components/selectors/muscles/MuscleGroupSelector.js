import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMuscleGroup } from '../../../actions/MuscleActions';
import Back from '../../../img/back.png';
import Front from '../../../img/front.png';
import Side from '../../../img/side.png';
import Legs from '../../../img/legs.png';
import Arms from '../../../img/arms.png';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './MuscleGroupSelector.css';

const MuscleGroupSelector = ({ muscleGroup, setMuscleGroup }) => {
  console.log(muscleGroup);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState(muscleGroup);
  useEffect(() => {
    var instance = document.querySelectorAll('.carousel');
    M.Carousel.init(instance, {
      indicators: true,
      onCycleTo: (e) => {
        setSelectedMuscleGroup(e.id);
        setMuscleGroup(e.id);
      },
    });
    // eslint-disable-next-line
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

MuscleGroupSelector.propTypes = {
  muscleGroup: PropTypes.string.isRequired,
  setMuscleGroup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  muscleGroup: state.muscle.muscleGroup,
});

export default connect(mapStateToProps, { setMuscleGroup })(
  MuscleGroupSelector
);
