import {
  SET_EQUIPMENT,
  SET_SUB_MUSCLES,
  SET_MUSCLE_GROUP,
  SET_INCLUDE_NO_EQUIPMENT,
} from '../actions/types';

const initialState = {
  muscleGroup: '',
  subMuscles: [],
  equipment: [],
  includeNoEquipment: true,
};

const WorkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSCLE_GROUP:
      return {
        ...state,
        muscleGroup: action.payload,
      };
    case SET_SUB_MUSCLES:
      return {
        ...state,
        subMuscles: action.payload,
      };
    case SET_EQUIPMENT:
      return {
        ...state,
        equipment: action.payload,
      };
    case SET_INCLUDE_NO_EQUIPMENT:
      if (action.payload)
        return {
          ...state,
          equipment: [...state.equipment, 'None'],
          includeNoEquipment: action.payload,
        };
      else
        return {
          ...state,
          equipment: state.equipment.filter(
            (equipmentItem) => equipmentItem !== 'None'
          ),
          includeNoEquipment: action.payload,
        };
    default:
      return state;
  }
};

export default WorkoutReducer;
