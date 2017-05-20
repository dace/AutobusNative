import { combineReducers } from 'redux';
import coordinates from './coordinates';
import nearbyStops from './fetch-stops';
import busList from './fetch-buses';
import selectedStop from './select-stop';

const rootReducer = combineReducers({
  currentPosition: coordinates,
  stops: nearbyStops,
  selectedStop,
  busesAtStop: busList,
});

export default rootReducer;
