import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SubMuscleButton from '../../layout/subMuscleButton/SubMuscleButton';
import { setSubMuscles } from '../../../actions/WorkoutActions';
import PrimaryButton from '../../layout/primaryButton/PrimaryButton';
import SecondaryButton from '../../layout/secondaryButton/SecondaryButton';
import {
  // Test,
  ClavicularPectoral,
  CostalPectoral,
  SternalPectoral,
  LatissimusDorsi,
  ErectorSpinae,
  Rhomboids,
  TeresMajorAndMinor,
  Trapezius,
  AnteriorDeltoidHead,
  LateralDeltoidHead,
  PosteriorDeltoidHead,
  RotatorCuff,
  ExternalAbdominalOblique,
  InternalAbdominalOblique,
  UpperRectusAbdominis,
  Serratus,
  LowerRectusAbdominis,
  Brachialis,
  Forearms,
  LateralTricepHead,
  LongBicepHead,
  LongTricepHead,
  MedialTricepHead,
  ShortBicepHead,
  Gastrocnemius,
  GluteusMaximus,
  Hamstrings,
  HipAbductors,
  HipAdductors,
  VastusLateralisAndRectusFemoris,
  VastusMedialis,
} from '../../../img/index';
import './SubMuscleSelector.css';

const SubMuscleSelector = ({
  workout: { muscleGroup },
  setSubMuscles,
  isNested,
}) => {
  const [subMuscleOptions, setSubMuscleOptions] = useState([]);
  const [subMuscleOptionRows, setSubMuscleOptionRows] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const makeRows = () => {
    if (windowSize.width >= 992) {
      let rows = [];
      let i = 0;
      rows.push(subMuscleOptions.slice(i, i + 3));
      while (i + 3 < subMuscleOptions.length) {
        i += 3;
        rows.push(subMuscleOptions.slice(i, i + 3));
      }
      setSubMuscleOptionRows(rows);
    } else {
      let rows = [];
      let i = 0;
      rows.push(subMuscleOptions.slice(i, i + 2));
      while (i + 2 < subMuscleOptions.length) {
        i += 2;
        rows.push(subMuscleOptions.slice(i, i + 2));
      }
      setSubMuscleOptionRows(rows);
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
        setSubMuscleOptions([
          { name: 'Clavicular Pectoral', img: ClavicularPectoral },
          { name: 'Costal Pectoral', img: SternalPectoral },
          { name: 'Sternal Pectoral', img: CostalPectoral },
        ]);
        break;
      case 'SHOULDERS':
        setSubMuscleOptions([
          { name: 'Anterior Deltoid Head', img: AnteriorDeltoidHead },
          { name: 'Lateral Deltoid Head', img: LateralDeltoidHead },
          { name: 'Posterior Deltoid Head', img: PosteriorDeltoidHead },
          { name: 'Rotator Cuff', img: RotatorCuff },
        ]);
        break;
      case 'BACK':
        setSubMuscleOptions([
          { name: 'Latissimus Dorsi', img: LatissimusDorsi },
          { name: 'Rhomboids', img: Rhomboids },
          { name: 'Teres Major And Minor', img: TeresMajorAndMinor },
          { name: 'Erector Spinae', img: ErectorSpinae },
          { name: 'Trapezius', img: Trapezius },
        ]);
        break;
      case 'LEGS':
        setSubMuscleOptions([
          { name: 'Gluteus Maximus', img: GluteusMaximus },
          { name: 'Vastus Medialis', img: VastusMedialis },
          {
            name: 'Vastus Lateralis And Rectus Femoris',
            img: VastusLateralisAndRectusFemoris,
          },
          { name: 'Hamstrings', img: Hamstrings },
          { name: 'Gastrocnemius', img: Gastrocnemius },
          { name: 'Hip Abductors', img: HipAbductors },
          { name: 'Hip Adductors', img: HipAdductors },
        ]);
        break;
      case 'ABS':
        setSubMuscleOptions([
          { name: 'Internal Abdominal Oblique', img: InternalAbdominalOblique },
          { name: 'External Abdominal Oblique', img: ExternalAbdominalOblique },
          { name: 'Upper Rectus Abdominis', img: UpperRectusAbdominis },
          { name: 'Lower Rectus Abdominis', img: LowerRectusAbdominis },
          { name: 'Serratus', img: Serratus },
        ]);
        break;
      case 'ARMS':
        setSubMuscleOptions([
          { name: 'Short Bicep Head', img: ShortBicepHead },
          { name: 'Long Bicep Head', img: LongBicepHead },
          { name: 'Brachialis', img: Brachialis },
          { name: 'Forearms', img: Forearms },
          { name: 'Long Tricep Head', img: LongTricepHead },
          { name: 'Medial Tricep Head', img: MedialTricepHead },
          { name: 'Lateral Tricep Head', img: LateralTricepHead },
        ]);
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [muscleGroup]);

  useEffect(() => {
    makeRows();
    // eslint-disable-next-line
  }, [windowSize]);

  return (
    <div className='subMuscleBtnsContainer container'>
      {subMuscleOptionRows.map((row, rowIndex) => (
        <div className='subMuscleBtnRow' key={rowIndex}>
          {row.map((subMuscle) => (
            <SubMuscleButton
              subMuscle={subMuscle.name}
              img={subMuscle.img}
              key={subMuscle.name}
            />
          ))}
        </div>
      ))}
      <SecondaryButton
        tooltipText='Clear All'
        materialIcon='clear'
        onClick={() => {
          setSubMuscles([]);
        }}
        isNested={isNested}
      />
      <PrimaryButton
        tooltipText='Select All'
        materialIcon='clear_all'
        onClick={() => {
          setSubMuscles(
            subMuscleOptions.map((subMuscleOption) => subMuscleOption.name)
          );
        }}
        isNested={isNested}
      />
    </div>
  );
};

SubMuscleSelector.propTypes = {
  workout: PropTypes.object.isRequired,
  setSubMuscles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps, { setSubMuscles })(SubMuscleSelector);
