import { API_REQUEST, FETCH_APP } from '../constants';

const fetchApp = () => {
  return {
    [API_REQUEST]: {
      types: FETCH_APP,
      config: {
        method: 'get',
        url: '/app.json',
      },
    },
  };
};

export const appActions = { fetchApp };
