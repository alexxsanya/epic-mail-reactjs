import {
    createStore, applyMiddleware, compose, combineReducers,
  } from 'redux';
  import thunk from 'redux-thunk';
  
  const reducers = combineReducers({
      homeReducer: {}
  });
  
  const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  );
  const store = createStore(
    reducers, enhancers,
  );
  export default store;
  