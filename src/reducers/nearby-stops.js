const nearbyStops = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_STOPS':
      return {
        ...state,
        nearbyStops: action.payload,
      }
    default:
      return state;
  }
};

export default nearbyStops;
