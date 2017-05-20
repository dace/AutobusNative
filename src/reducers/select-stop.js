import { SELECT_STOP } from './../constants';

const selectedStop = (state = null, action) => {
  switch (action.type) {
    case SELECT_STOP:
      return {
        ...state,
        selectedStop: action.payload,
      }
    default:
      return state;
  }
};

export default selectedStop;
