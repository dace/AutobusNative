import { combineReducers } from 'redux';
import coordinates from './coordinates';
import nearbyStops from './fetch-stops';
import busList from './fetch-buses';

const rootReducer = combineReducers({
  busesAtStop: busList,
  currentPosition: coordinates,
  stops: nearbyStops,
});

export default rootReducer;
