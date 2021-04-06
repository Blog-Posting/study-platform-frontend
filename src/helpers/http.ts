import axios from 'axios';

const http = () => {
  const defaultConfig = {
    timeout: 30000,
    headers: {
      'content-type': 'application/json',
    },
    baseURL: '/api',
  };

  return axios.create(defaultConfig);
};

export default http;
