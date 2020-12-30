import api from './api';

const loginRequest = (credentials) => {
  return api
    .post(`aplicativo/login`, credentials)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export { loginRequest };
