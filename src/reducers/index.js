import { combineReducers } from 'redux';
import nearbyRoutes from './nearby-routes';
import selectedRoute from './selected-route';
import nearbyStops from './nearby-stops';
import selectedStop from './selected-stop';

const rootReducer = combineReducers({
  nearbyRoutes,
  selectedRoute,
  nearbyStops,
  selectedStop,
});

export default rootReducer;
