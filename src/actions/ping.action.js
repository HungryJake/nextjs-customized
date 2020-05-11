import axios from 'axios';
import { PONG_RESPONSE, PONG_ERROR, RESET_PING } from './types.action';

export const callPingApi = function() {
  return dispatch => {
    axios.get("api/ping").then(resp => {
      dispatch({
        type: PONG_RESPONSE,
        result: resp.data.out
      });
    }).catch(err => {
      dispatch({
        type: PONG_ERROR,
        error: err
      });
    });
  }
};

export const resetPing = function () {
  return {
    type: RESET_PING
  }
};
