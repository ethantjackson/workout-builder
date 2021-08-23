import React, { useState, useEffect } from 'react';
import EquipmentButton from '../../layout/equipmentButton/EquipmentButton';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Preloader from '../../layout/Preloader';
import {
  setEquipment,
  getEquipmentOptions,
  setSelectionsLoading,
} from '../../../actions/WorkoutActions';
import {
  BenchPress,
  Dumbbells,
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
  NoEquipment,
  AbductionMachine,
  AdductionMachine,
} from '../../../img/index';
import SecondaryButton from '../../layout/secondaryButton/SecondaryButton';
import PrimaryButton from '../../layout/primaryButton/PrimaryButton';
import './EquipmentSelector.css';

const images = {};
images['Bench Press'] = BenchPress;
images['Dumbbells'] = Dumbbells;
images['Smith Machine'] = SmithMachine;
images['Chest Press Machine'] = ChestPressMachine;
images['Dip Station'] = DipStation;
images['T Bar'] = T_BAR;
images['Cable Machine'] = CableMachine;
images['Butterfly Machine'] = ButterflyMachine;
images['Suspension Trainer'] = SuspensionTrainer;
images['Barbell'] = Barbell;
images['Pull Up Bar'] = Pull_UpBar;
images['Cable Row Machine'] = CableRowMachine;
images['Pulldown Machine'] = PulldownMachine;
images['Roman Chair'] = RomanChair;
images['Rear Fly Machine'] = RearFlyMachine;
images['Overhead Press Machine'] = OverheadPressMachine;
images['Crunch Machine'] = CrunchMachine;
images['Medicine Ball'] = MedicineBall;
images['Ab Roller'] = AbRoller;
images['Hex Bar'] = HexBar;
images['Kettlebell'] = Kettlebell;
images['Leg Curl Machine'] = LegCurlMachine;
images['Kickback Machine'] = KickbackMachine;
images['Leg Extension Machine'] = LegExtensionMachine;
images['Leg Press Machine'] = LegPressMachine;
images['Sled'] = Sled;
images['Bicep Curl Machine'] = BicepCurlMachine;
images['Calf Raise Machine'] = CalfRaiseMachine;
images['Tricep Extension Machine'] = TricepExtension;
images['High Row Machine'] = HighRowMachine;
images['Low Row Machine'] = LowRowMachine;
images['Lateral Raise Machine'] = LateralRaiseMachine;
images['Calf Extension Machine'] = CalfExtensionMachine;
images['Squat Machine'] = SquatMachine;
images['Hack Squat Machine'] = HackSquatMachine;
images['Tricep Bar'] = TricepBar;
images['Oblique Crunch Machine'] = ObliqueCrunchMachine;
images['Prone Leg Curl Machine'] = ProneLegCurlMachine;
images['Leg Raise Station'] = LegRaiseStation;
images['No Equipment'] = NoEquipment;
images['Abduction Machine'] = AbductionMachine;
images['Adduction Machine'] = AdductionMachine;

const EquipmentSelector = ({
  subMuscles,
  equipmentOptions,
  loading,
  setEquipment,
  getEquipmentOptions,
  setSelectionsLoading,
  isNested,
}) => {
  const [equipmentOptionRows, setEquipmentOptionRows] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const makeRows = () => {
    if (equipmentOptions) {
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
    setSelectionsLoading();
    getEquipmentOptions(subMuscles);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    makeRows();
    // eslint-disable-next-line
  }, [windowSize, equipmentOptions]);

  if (loading) return <Preloader />;
  return (
    <div className='equipmentBtnsContainer container'>
      {equipmentOptionRows.map((row, rowIndex) => (
        <div className='equipmentBtnRow' key={rowIndex}>
          {row.map((equipmentItem, index) => (
            <EquipmentButton
              equipmentItem={equipmentItem}
              img={images[equipmentItem]}
              key={index}
            />
          ))}
        </div>
      ))}
      <SecondaryButton
        tooltipText='Clear All'
        materialIcon='clear'
        onClick={() => setEquipment([])}
        isNested={isNested}
      />
      <PrimaryButton
        tooltipText='Select All'
        materialIcon='clear_all'
        onClick={() =>
          setEquipment(equipmentOptions.map((equipmentItem) => equipmentItem))
        }
        isNested={isNested}
      />
    </div>
  );
};

EquipmentSelector.propTypes = {
  muscleGroup: PropTypes.string.isRequired,
  subMuscles: PropTypes.array.isRequired,
  equipmentOptions: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  setEquipment: PropTypes.func.isRequired,
  getEquipmentOptions: PropTypes.func.isRequired,
  setSelectionsLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  muscleGroup: state.workout.muscleGroup,
  subMuscles: state.workout.subMuscles,
  equipmentOptions: state.workout.equipmentOptions,
  loading: state.workout.loading,
});

export default connect(mapStateToProps, {
  setEquipment,
  getEquipmentOptions,
  setSelectionsLoading,
})(EquipmentSelector);
