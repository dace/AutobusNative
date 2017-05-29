import { SET_BUS_STYLES } from './../constants';

export const setBusStyles = busRoutes => {
  const routeStyles = busRoutes.map(bus => {
    return {
      routeName: bus.busName,
      color: bus.color,
    }
  });

  return {
    type: SET_BUS_STYLES,
    payload: routeStyles,
  }
};
