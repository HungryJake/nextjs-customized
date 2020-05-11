import { COUNTER_DECREASE, COUNTER_INCREASE, COUNTER_RESET } from '../actions/types.action';

const defaultCounterState = {
  count: 1
};

export default function (state = defaultCounterState, action) {
  switch (action.type) {
    case COUNTER_INCREASE:
      return {
        ...state,
        count: state.count + 1
      };
    case COUNTER_DECREASE:
      return {
        ...state,
        count: state.count - 1
      };
    case COUNTER_RESET:
      return defaultCounterState;
    default:
      return {
        ...state
      };
  }
};
