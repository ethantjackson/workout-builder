import {
  SET_EQUIPMENT,
  SET_SUB_MUSCLES,
  SET_MUSCLE_GROUP,
  SET_INCLUDE_NO_EQUIPMENT,
  GET_EQUIPMENT_OPTIONS,
  SET_SELECTIONS_LOADING,
  SELECTIONS_ERROR,
} from '../actions/types';

const initialState = {
  muscleGroup: '',
  subMuscles: [],
  equipment: [],
  equipmentOptions: [],
  includeNoEquipment: true,
  loading: false,
  error: null,
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
    case GET_EQUIPMENT_OPTIONS:
      return {
        ...state,
        equipmentOptions: action.payload,
        loading: false,
      };
    case SELECTIONS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case SET_SELECTIONS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default WorkoutReducer;
