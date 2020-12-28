import api from './api';

const createRequest = (requestData) => {
  delete requestData.confirmSenha;
  delete requestData.gestante;
  return api
    .post(`aplicativo/paciente`, requestData)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const validateCpf = (cpf) => {
  return api
    .post('aplicativo/paciente/validar-cpf-existente', { cpf })
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
};

export { createRequest, validateCpf };
