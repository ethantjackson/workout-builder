import React, { useState, useEffect } from 'react';
import EquipmentButton from '../../layout/equipmentButton/EquipmentButton';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setEquipment } from '../../../actions/WorkoutActions';
import {
  BenchPress,
  Dumbells,
  SmithMachine,
  ChestPressMachine,
  DipStation,
  T_BAR,
  CableMachine,
  ButterflyMachine,
  // BattleRopes,
  SuspensionTrainer,
  Barbell,
  Pull_UpBar,
  CableRowMachine,
  PulldownMachine,
  RomanChair,
  RearFlyMachine,
  OverheadPressMachine,
  CrunchMachine,
  // AdjustableBench,
  MedicineBall,
  AbRoller,
  HexBar,
  Kettlebell,
  LegCurlMachine,
  KickbackMachine,
  LegExtensionMachine,
  LegPressMachine,
  Sled,
  // JumpRope,
  BicepCurlMachine,
  CalfRaiseMachine,
  TricepExtension,
  HighRowMachine,
  LowRowMachine,
  LateralRaiseMachine,
  CalfExtensionMachine,
  SquatMachine,
  TricepBar,
  ObliqueCrunchMachine,
  ProneLegCurlMachine,
  HackSquatMachine,
  LegRaiseStation,
} from '../../../img/index';
import ClearButton from '../../layout/clearButton/ClearButton';
import AllButton from '../../layout/allButton/AllButton';
import './EquipmentSelector.css';

const EquipmentSelector = ({ muscleGroup, setEquipment }) => {
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
          { name: 'Hex Bar', img: HexBar },
          { name: 'Smith Machine', img: SmithMachine },
          { name: 'Chest Press Machine', img: ChestPressMachine },
          { name: 'Dip Station', img: DipStation },
          { name: 'T Bar', img: T_BAR },
          { name: 'Cable Machine', img: CableMachine },
          { name: 'Butterfly Machine', img: ButterflyMachine },
          { name: 'Medicine Ball', img: MedicineBall },
          { name: 'Suspension Trainer', img: SuspensionTrainer },
        ]);
        break;
      case 'BACK':
        setEquipmentOptions([
          { name: 'Dumbells', img: Dumbells },
          { name: 'Barbell', img: Barbell },
          { name: 'Hex Bar', img: HexBar },
          { name: 'Pull-Up Bar', img: Pull_UpBar },
          { name: 'T Bar', img: T_BAR },
          { name: 'Cable Machine', img: CableMachine },
          { name: 'Cable Row Machine', img: CableRowMachine },
          { name: 'Smith Machine', img: SmithMachine },
          { name: 'Pulldown Machine', img: PulldownMachine },
          { name: 'Roman Chair', img: RomanChair },
          { name: 'Rear Fly Machine', img: RearFlyMachine },
          { name: 'High Row Machine', img: HighRowMachine },
          { name: 'Low Row Machine', img: LowRowMachine },
          { name: 'Medicine Ball', img: MedicineBall },
          { name: 'Kettlebell', img: Kettlebell },
          { name: 'Suspension Trainer', img: SuspensionTrainer },
        ]);
        break;
      case 'SHOULDERS':
        setEquipmentOptions([
          { name: 'Dumbells', img: Dumbells },
          { name: 'Barbell', img: Barbell },
          { name: 'Hex Bar', img: HexBar },
          { name: 'Cable Machine', img: CableMachine },
          { name: 'Overhead Press Machine', img: OverheadPressMachine },
          { name: 'Lateral Raise Machine', img: LateralRaiseMachine },
          { name: 'Rear Fly Machine', img: RearFlyMachine },
          { name: 'Dip Station', img: DipStation },
          { name: 'Medicine Ball', img: MedicineBall },
          { name: 'Kettlebell', img: Kettlebell },
          { name: 'Suspension Trainer', img: SuspensionTrainer },
        ]);
        break;
      case 'ABS':
        setEquipmentOptions([
          { name: 'Dumbells', img: Dumbells },
          { name: 'Medicine Ball', img: MedicineBall },
          { name: 'Pull Up Bar', img: Pull_UpBar },
          { name: 'Cable Machine', img: CableMachine },
          { name: 'Crunch Machine', img: CrunchMachine },
          { name: 'Oblique Crunch Machine', img: ObliqueCrunchMachine },
          { name: 'Leg Raise Station', img: LegRaiseStation },
          { name: 'Ab Roller', img: AbRoller },
          { name: 'Roman Chair', img: RomanChair },
          { name: 'Kettlebell', img: Kettlebell },
          { name: 'Suspension Trainer', img: SuspensionTrainer },
        ]);
        break;
      case 'LEGS':
        setEquipmentOptions([
          { name: 'Dumbells', img: Dumbells },
          { name: 'Barbell', img: Barbell },
          { name: 'Hex Bar', img: HexBar },
          { name: 'Smith Machine', img: SmithMachine },
          { name: 'Leg Press Machine', img: LegPressMachine },
          { name: 'Squat Machine', img: SquatMachine },
          { name: 'Hack Squat Machine', img: HackSquatMachine },
          { name: 'Leg Curl Machine', img: LegCurlMachine },
          { name: 'Prone Leg Curl Machine', img: ProneLegCurlMachine },
          { name: 'Leg Extension Machine', img: LegExtensionMachine },
          { name: 'Kickback Machine', img: KickbackMachine },
          { name: 'Calf Raise Machine', img: CalfRaiseMachine },
          { name: 'Calf Extension Machine', img: CalfExtensionMachine },
          { name: 'Medicine Ball', img: MedicineBall },
          { name: 'Kettlebell', img: Kettlebell },
          { name: 'Sled', img: Sled },
          { name: 'Suspension Trainer', img: SuspensionTrainer },
        ]);
        break;
      case 'ARMS':
        setEquipmentOptions([
          { name: 'Dumbells', img: Dumbells },
          { name: 'Barbell', img: Barbell },
          { name: 'Tricep Bar', img: TricepBar },
          { name: 'Cable Machine', img: CableMachine },
          { name: 'Bicep Curl Machine', img: BicepCurlMachine },
          { name: 'Pulldown Machine', img: PulldownMachine },
          { name: 'Overhead Press Machine', img: OverheadPressMachine },
          { name: 'Tricep Extension Machine', img: TricepExtension },
          { name: 'Dip Station', img: DipStation },
          { name: 'Pull Up Bar', img: Pull_UpBar },
          { name: 'Medicine Ball', img: MedicineBall },
          { name: 'Kettlebell', img: Kettlebell },
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
      <ClearButton onClick={() => setEquipment([])} />
      <AllButton
        onClick={() =>
          setEquipment(
            equipmentOptions.map((equipmentItem) => equipmentItem.name)
          )
        }
      />
    </div>
  );
};

EquipmentSelector.propTypes = {
  muscleGroup: PropTypes.string.isRequired,
  setEquipment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  muscleGroup: state.workout.muscleGroup,
});

export default connect(mapStateToProps, { setEquipment })(EquipmentSelector);
