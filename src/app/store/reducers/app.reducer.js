import { INITIAL_STATE, FETCH_APP } from '../constants';

export const AppReducer = (state = INITIAL_STATE, action) => {
  if (!action || !action.type) { return state; }
  switch (action.type) {
    case FETCH_APP[0]:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case FETCH_APP[1]:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        props: action.payload,
        lastUpdated: action.receivedAt,
      });
    case FETCH_APP[2]:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        error: action.error,
      });
    default:
      return state;
  }
};
