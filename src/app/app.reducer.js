import { combineReducers } from 'redux';

export const FETCH_APP = [
  'FETCH_APP_REQUEST',
  'FETCH_APP_SUCCESS',
  'FETCH_APP_ERROR',
];

export const app = (state = {}, action) => {
  if (!action || !action.type) { return state; }
  switch (action.type) {
    case FETCH_APP[0]:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case FETCH_APP[1]:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        props: action.payload,
        lastUpdated: action.receivedAt,
      };
    case FETCH_APP[2]:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const appReducer = combineReducers({
  app,
});
