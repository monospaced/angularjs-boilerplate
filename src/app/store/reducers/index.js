import { combineReducers } from 'redux';
import { AppReducer } from './app.reducer';

export const RootReducer = combineReducers({
  app: AppReducer,
});
