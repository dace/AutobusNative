import API_KEY from './key';

const defaultPosition = {
  latitude: '40.748433',
  longitude: '-73.985656',
}

export const nearbyStopsUrl = `http://bustime.mta.info/api/where/stops-for-location.json?lat=${defaultPosition.latitude}&lon=${defaultPosition.longitude}&latSpan=0.005&lonSpan=0.005&key=${API_KEY}`;
