import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import counterReducer from './counter.reducer';
import pingReducer from './ping-api.reducer';

export default combineReducers({
  form: formReducer,
  counter: counterReducer,
  ping: pingReducer
})
