import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setEquipment } from '../../../actions/WorkoutActions';
import M from 'materialize-css/dist/js/materialize.min.js';
import './EquipmentButton.css';

const EquipmentButton = ({ equipment, equipmentItem, img, setEquipment }) => {
  const [selected, setSelected] = useState(equipment.includes(equipmentItem));

  useEffect(() => {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, { position: 'top' });
  }, []);

  useEffect(() => {
    setSelected(equipment.includes(equipmentItem));
    // eslint-disable-next-line
  }, [equipment]);

  const handleSelect = () => {
    const newSelected = !selected;
    if (newSelected) {
      if (!equipment.includes(equipmentItem))
        setEquipment([...equipment, equipmentItem]);
    } else {
      setEquipment(
        equipment.filter((equipment) => equipment !== equipmentItem)
      );
    }
    setSelected(newSelected);
  };

  return (
    <div className='equipmentBtnDiv'>
      <img
        className='equipmentImgBtn tooltipped'
        style={{
          opacity: selected ? '1' : '.5',
          boxShadow: selected && '0px 0px 15px #26d1ed',
        }}
        src={img}
        alt='test-img'
        data-tooltip={equipmentItem}
        data-position='top'
        onClick={() => handleSelect()}
      />
    </div>
  );
};

EquipmentButton.propTypes = {
  equipmentItem: PropTypes.string.isRequired,
  equipment: PropTypes.array.isRequired,
  setEquipment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  equipment: state.workout.equipment,
});

export default connect(mapStateToProps, { setEquipment })(EquipmentButton);
