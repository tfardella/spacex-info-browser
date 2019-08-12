import {createStore, applyMiddleware, compose } from 'redux';  
import rootReducer from '.';  
import thunk from 'redux-thunk';

export default function configureStore() {  
  const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
  );

  return createStore(
    rootReducer,
    enhancer
  );
}
