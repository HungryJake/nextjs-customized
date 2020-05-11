// Counter action creators
import { COUNTER_DECREASE, COUNTER_INCREASE, COUNTER_RESET } from './types.action';

// normal function
export function increase() {
  return {
    type: COUNTER_INCREASE
  }
}

// function variable
export const decrease = function () {
  return {
    type: COUNTER_DECREASE
  }
}

// arrow function
export const reset = () => ({
  type: COUNTER_RESET
})
