import fetchCoordinates from '../actions/fetch-coordinates';

const coordinates = (state = null, action) => {
  switch(action.type) {
    case 'FETCH_COORDINATES':
      return {
        ...state,
        coordinates: action.payload,
      }
    default:
      return state;
  }
}

export default coordinates;
