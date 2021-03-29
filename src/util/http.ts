import Axios from 'axios';

const createClient = () => {
  const defaultConfig = {
    timeout: 30000,
    headers: {
      'content-type': 'application/json',
    },
    baseURL: '/api',
  };
  return Axios.create(defaultConfig);
};

export default createClient;
