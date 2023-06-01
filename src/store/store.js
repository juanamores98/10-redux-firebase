import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk';
const reducers = combineReducers({
  // Combine all reducers
  auth: authReducer,
});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
