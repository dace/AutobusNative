import { FETCH_COORDINATES } from '../constants';

export const fetchGeoCoordinates = () => {
  return dispatch => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
          const initialPosition = position.coords;
          const { longitude } = initialPosition;
          const { latitude } = initialPosition;
          const currentPosition = {
            latitude,
            longitude,
          };
          dispatch({
            type: FETCH_COORDINATES,
            payload: currentPosition,
          });
        },
        (error) => JSON.stringify(error),
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000
        }
      );

  }
}