import angular from 'angular';

export const API_REQUEST = 'API_REQUEST';

export const apiMiddleware = ($http) => {
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
    return $http(config)
      .then(response => {
        next({
          type: successType,
          payload: response.data,
          receivedAt: Date.now(),
        });
        return response;
      })
      .catch(response => {
        console.error(new Error(response.data, response));
        next({
          type: errorType,
          payload: response.data,
          error: true,
        });
        return response;
      });
  };
};
