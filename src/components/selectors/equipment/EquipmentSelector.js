import React, { useState, useEffect } from 'react';
import EquipmentButton from '../../layout/equipmentButton/EquipmentButton';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BenchPress,
  Dumbells,
  SmithMachine,
  ChestPressMachine,
  DipStation,
  T_BAR,
  CableMachine,
  ButterflyMachine,
  BattleRopes,
  SuspensionTrainer,
  Barbell,
  Pull_UpBar,
  CableRowMachine,
  PulldownMachine,
  RomanChair,
  RearDeltFlyMachine,
  OverheadPressMachine,
  CrunchMachine,
  AdjustableBench,
  MedicineBall,
  AbRoller,
  HexBar,
  Kettlebell,
  LegCurlMachine,
  KickbackMachine,
  LegExtensionMachine,
  LegPressMachine,
  Sled,
  JumpRope,
  BicepCurlMachine,
  CalfRaiseMachine,
  TricepExtension,
} from '../../../img/index';
import './EquipmentSelector.css';

const EquipmentSelector = ({ muscleGroup }) => {
  const [equipmentOptions, setEquipmentOptions] = useState([]);
  const [equipmentOptionRows, setEquipmentOptionRows] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const makeRows = () => {
    if (windowSize.width >= 992) {
      let rows = [];
      let i = 0;
      rows.push(equipmentOptions.slice(i, i + 3));
      while (i + 3 < equipmentOptions.length) {
        i += 3;
        rows.push(equipmentOptions.slice(i, i + 3));
      }
      setEquipmentOptionRows(rows);
    } else {
      let rows = [];
      let i = 0;
      rows.push(equipmentOptions.slice(i, i + 2));
      while (i + 2 < equipmentOptions.length) {
        i += 2;
        rows.push(equipmentOptions.slice(i, i + 2));
      }
      setEquipmentOptionRows(rows);
    }
  };

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

  useEffect(() => {
    switch (muscleGroup) {
      case 'CHEST':
        setEquipmentOptions([
          { name: 'Dumbells', img: Dumbells },
          { name: 'Bench Press', img: BenchPress },
          { name: 'Smith Machine', img: SmithMachine },
          { name: 'Chest Press Machine', img: ChestPressMachine },
          { name: 'Dip Station', img: DipStation },
          { name: 'T-Bar', img: T_BAR },
          { name: 'Cable Machine', img: CableMachine },
          { name: 'Butterfly Machine', img: ButterflyMachine },
          { name: 'Battle Ropes', img: BattleRopes },
          { name: 'Suspension Trainer', img: SuspensionTrainer },
        ]);
        break;
      case 'BACK':
        setEquipmentOptions([
          { name: 'Dumbells', img: Dumbells },
          { name: 'Barbell', img: Barbell },
          { name: 'Pull-Up Bar', img: Pull_UpBar },
          { name: 'T-Bar', img: T_BAR },
          { name: 'Cable Machine', img: CableMachine },
          { name: 'Cable Row Machine', img: CableRowMachine },
          { name: 'Smith Machine', img: SmithMachine },
          { name: 'Pulldown Machine', img: PulldownMachine },
          { name: 'Dip Station', img: DipStation },
          { name: 'Roman Chair', img: RomanChair },
          { name: 'Rear Delt Fly Machine', img: RearDeltFlyMachine },
          { name: 'Battle Ropes', img: BattleRopes },
          { name: 'Suspension Trainer', img: SuspensionTrainer },
        ]);
        break;
      case 'SHOULDERS':
        setEquipmentOptions([
          { name: 'Dumbells', img: Dumbells },
          { name: 'Barbell', img: Barbell },
          { name: 'Cable Machine', img: CableMachine },
          { name: 'Overhead Press Machine', img: OverheadPressMachine },
          { name: 'Dip Station', img: DipStation },
          { name: 'Battle Ropes', img: BattleRopes },
          { name: 'Suspension Trainer', img: SuspensionTrainer },
        ]);
        break;
      case 'ABS':
        setEquipmentOptions([
          { name: 'Dumbells', img: Dumbells },
          { name: 'Medicine Ball', img: MedicineBall },
          { name: 'Pull-Up Bar', img: Pull_UpBar },
          { name: 'Cable Machine', img: CableMachine },
          { name: 'Crunch Machine', img: CrunchMachine },
          { name: 'Adjustable Bench', img: AdjustableBench },
          { name: 'Ab Roller', img: AbRoller },
          { name: 'Roman Chair', img: RomanChair },
          { name: 'Battle Ropes', img: BattleRopes },
          { name: 'Suspension Trainer', img: SuspensionTrainer },
        ]);
        break;
      case 'LEGS':
        setEquipmentOptions([
          { name: 'Dumbells', img: Dumbells },
          { name: 'Barbell', img: Barbell },
          { name: 'Hex Bar', img: HexBar },
          { name: 'Kettlebell', img: Kettlebell },
          { name: 'Leg Press Machine', img: LegPressMachine },
          { name: 'Leg Curl Machine', img: LegCurlMachine },
          { name: 'Leg Extension Machine', img: LegExtensionMachine },
          { name: 'Kickback Machine', img: KickbackMachine },
          { name: 'Calf Raise Machine', img: CalfRaiseMachine },
          { name: 'Sled', img: Sled },
          { name: 'Jump Rope', img: JumpRope },
        ]);
        break;
      case 'ARMS':
        setEquipmentOptions([
          { name: 'Dumbells', img: Dumbells },
          { name: 'Barbell', img: Barbell },
          { name: 'Cable Machine', img: CableMachine },
          { name: 'Bicep Curl Machine', img: BicepCurlMachine },
          { name: 'Overhead Press Machine', img: OverheadPressMachine },
          { name: 'Tricep Extension Machine', img: TricepExtension },
          { name: 'Dip Station', img: DipStation },
          { name: 'Pull-Up Bar', img: Pull_UpBar },
          { name: 'Battle Ropes', img: BattleRopes },
          { name: 'Suspension Trainer', img: SuspensionTrainer },
        ]);
        break;
      default:
        break;
    }
  }, [muscleGroup]);

  useEffect(() => {
    makeRows();
    // eslint-disable-next-line
  }, [windowSize]);

  return (
    <div className='equipmentBtnsContainer container'>
      {equipmentOptionRows.map((row, rowIndex) => (
        <div className='equipmentBtnRow' key={rowIndex}>
          {row.map((equipmentItem, index) => (
            <EquipmentButton
              equipmentItem={equipmentItem.name}
              img={equipmentItem.img}
              key={index}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

EquipmentSelector.propTypes = {
  muscleGroup: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  muscleGroup: state.workout.muscleGroup,
});

export default connect(mapStateToProps, {})(EquipmentSelector);
