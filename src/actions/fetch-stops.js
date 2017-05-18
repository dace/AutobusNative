import { FETCH_STOPS } from '../constants';
import { nearbyStopsUrl } from '../utils/api/endpoints';
import { normalizeStopData } from '../utils/api/normalize-data';

const fetchNearbyStops = () => {
  return dispatch => {
    fetch(nearbyStopsUrl)
      .then(res => res.json())
      .then(res => {
        const normalizedStops = normalizeStopData(res.data.stops);
        dispatch({
          type: FETCH_STOPS,
          payload: normalizedStops,
        })
      })
  }   
}

export default fetchNearbyStops;
