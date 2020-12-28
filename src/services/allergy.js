import api from './api';

const listAllergyRequest = (nome) => {
  return api
    .get(`aplicativo/alergias`, {
      params: { nome },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export { listAllergyRequest };
