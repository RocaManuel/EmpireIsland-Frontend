import { applyMiddleware, createStore } from "redux";
import CombinedReducers from "./Reducer";
import { sagasMiddlewareInstance, run } from './Sagas'
import { routerMiddleware } from 'react-router-redux'

export default (history: any) => {
  
  const store = createStore(
    CombinedReducers,
    applyMiddleware(
      sagasMiddlewareInstance,
      routerMiddleware(history)
    ),
  );

  run();

  return store;

}

