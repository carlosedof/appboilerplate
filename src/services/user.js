import api from './api';

const createRequest = (requestData) => {
  return api
    .post(`aplicativo/user`, requestData)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const validateCpf = (cpf) => {
  return api
    .post('aplicativo/user/validar-cpf-existente', { cpf })
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
};

export { createRequest, validateCpf };
