import angular from 'angular';
import { API_REQUEST } from './constants';

export const ApiMiddleware = ($http) => {
  'ngInject';
  return store => next => action => {
    if (!action[API_REQUEST]) { return next(action); }
    const {
      config,
      types: [
        requestType,
        successType,
        errorType,
      ],
    } = action[API_REQUEST];
    next({ type: requestType });
    $http(config)
      .then(response => {
        next({
          type: successType,
          payload: response.data,
          receivedAt: Date.now(),
        });
      })
      .catch(response => {
        console.error(new Error(response.data, response));
        next({
          type: errorType,
          payload: response.data,
          error: true,
        });
      });
  };
};
