import Immutable from 'immutable';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

function createMiddlewares() {
  const middlewares = [thunk];
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    middlewares.push(
      createLogger({
        level: 'info',
        collapsed: true,
        stateTransformer: (state) => {
          const newState = {};
          for (const i of Object.keys(state)) {
            if (Immutable.Iterable.isIterable(state[i])) {
              newState[i] = state[i].toJS();
            } else {
              newState[i] = state[i];
            }
          }
          return newState;
        }
      })
    );
  }
  return middlewares;
}

function immutableChildren(obj) {
  const state = {};
  Object.keys(obj).forEach((key) => {
    state[key] = Immutable.fromJS(obj[key]);
  });
  return state;
}

export default (initialState = {}, context) => {
  const { isServer } = !!context ? context : false;
  const middlewares = createMiddlewares();
  const state = immutableChildren(initialState);
  const composeEnhancers =
    (!isServer &&
      process.env.NODE_ENV === 'development' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  return createStore(
    rootReducer,
    state,
    isServer ? applyMiddleware(...middlewares) : composeEnhancers(applyMiddleware(...middlewares))
  );
};
