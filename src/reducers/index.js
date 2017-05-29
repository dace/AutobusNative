import { combineReducers } from 'redux';
import coordinates from './coordinates';
import nearbyStops from './fetch-stops';
import busList from './fetch-buses';
import setBusStyles from './set-bus-styles';

const rootReducer = combineReducers({
  busesAtStop: busList,
  currentPosition: coordinates,
  stops: nearbyStops,
  busStyles: setBusStyles,
});

export default rootReducer;
