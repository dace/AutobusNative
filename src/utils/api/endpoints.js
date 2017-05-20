import API_KEY from './key';

const defaultPosition = {
  latitude: '40.682881',
  longitude: '-73.818416',
}

export const nearbyStopsUrl = `http://bustime.mta.info/api/where/stops-for-location.json?lat=${defaultPosition.latitude}&lon=${defaultPosition.longitude}&latSpan=0.008&lonSpan=0.008&key=${API_KEY}`;

export const stopStatusUrl = `http://bustime.mta.info/api/siri/stop-monitoring.json?key=${API_KEY}&OperatorRef=MTA&MonitoringRef=`;