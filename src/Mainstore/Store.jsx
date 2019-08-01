import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { AuthReducers } from '../Auth';
import DashboardReducers from '../Dashboard/Redux/reducers';

const reducers = combineReducers({
  loginReducer: AuthReducers.login,
  signupReducer: AuthReducers.signup,
  inboxReducer: DashboardReducers.inboxReducer,
  outboxReducer: DashboardReducers.outboxReducer,
});

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);
const store = createStore(
  reducers, enhancers,
);
export default store;
