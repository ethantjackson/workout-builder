import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSubMuscles } from '../../../actions/MuscleActions';

const SubMuscleSelector = ({
  muscle: { muscleGroup, subMuscles },
  setSubMuscles,
}) => {
  useEffect(() => {
    switch (muscleGroup) {
      case 'CHEST':
        setSubMuscles([
          'Pectoralis Major',
          'Pectoralis Minor',
          'Serratus Anterior',
          'Subclavius',
        ]);
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [muscleGroup]);

  return (
    <div className='container row'>
      {subMuscles.map((muscle, index) => (
        <div className='col s6 l3' key={index}>
          <button type='button'>{muscle}</button>
        </div>
      ))}
    </div>
  );
};

SubMuscleSelector.propTypes = {
  muscle: PropTypes.object.isRequired,
  setSubMuscles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  muscle: state.muscle,
});

export default connect(mapStateToProps, { setSubMuscles })(SubMuscleSelector);
