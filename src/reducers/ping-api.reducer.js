import { PONG_ERROR, PONG_RESPONSE, RESET_PING } from '../actions/types.action';

const defaultState = { result: null, error: null };

export default function(state= defaultState, action) {
  switch (action.type) {
    case PONG_RESPONSE:
      return {
        ...state,
        result: action.result
      };
    case PONG_ERROR:
      return {
        ...state,
        error: action.error
      }
    case RESET_PING:
      return defaultState;
  }
  return state;
}
