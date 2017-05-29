import { SET_BUS_STYLES } from './../constants';

const setBusStyles = ( state = null, action) => {
  switch (action.type) {
    case SET_BUS_STYLES:
      return {
        ...state,
        busStyles: action.payload,
      }
    default:
      return state;
  }
};

export default setBusStyles;