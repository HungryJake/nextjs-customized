import { combineReducers } from 'redux';
import counterReducer from './counter.reducer';
import pingReducer from './ping-api.reducer';

export default combineReducers({
  counter: counterReducer,
  ping: pingReducer
});
