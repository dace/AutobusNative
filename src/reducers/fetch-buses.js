import { FETCH_BUSES } from './../constants';

const fetchBuses = (state = null, action) => {
  switch (action.type) {
    case FETCH_BUSES:
      return {
        ...state,
        busList: action.payload,
      }
    default:
      return state;
  }
};

export default fetchBuses;