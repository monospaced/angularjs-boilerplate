import { API_REQUEST } from './middleware';
import { FETCH_APP } from './app.reducer';

const fetchApp = () => {
  return {
    [API_REQUEST]: {
      types: FETCH_APP,
      config: {
        method: 'get',
        url: '/props.json',
      },
    },
  };
};

export const AppActions = { fetchApp };
