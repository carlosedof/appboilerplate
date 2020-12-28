import api from './api';

const loginRequest = (credentials) => {
  return api
    .post(`aplicativo/paciente/login`, credentials)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export { loginRequest };
