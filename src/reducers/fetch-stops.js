import { FETCH_STOPS } from './../constants';

const nearbyStops = (state = null, action) => {
  switch (action.type) {
    case FETCH_STOPS:
      return {
        ...state,
        nearbyStops: action.payload,
      }
    default:
      return state;
  }
};

export default nearbyStops;
