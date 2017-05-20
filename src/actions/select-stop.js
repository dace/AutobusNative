import { SELECT_STOP } from './../constants';

const selectStop = stopCode => {
  return {
    type: SELECT_STOP,
    payload: stopCode,
  }
}

export default selectStop;