import api from './api';

const listPreDiseaseRequest = (nome) => {
  return api
    .get(`aplicativo/doencas-preexistentes`, {
      params: { nome },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export { listPreDiseaseRequest };
