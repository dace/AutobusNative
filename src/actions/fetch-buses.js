import { FETCH_BUSES } from './../constants';
import { stopStatusUrl } from './../utils/api/endpoints';
import { normalizeBusesData } from './../utils/api/normalize-data';

const fetchBuses = stopCode => {
  return dispatch => {
    const fullEndpointUrl = `${stopStatusUrl}${stopCode}`;
    console.log(fullEndpointUrl);
    fetch(fullEndpointUrl)
      .then(res => res.json())
      .then(res => {
        const normalizedBuses = normalizeBusesData(res);
        dispatch({
          type: FETCH_BUSES,
          payload: normalizedBuses,
        })
      })
      .catch(err => err); 
  }
};

export default fetchBuses;