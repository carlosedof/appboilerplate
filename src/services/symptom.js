import api from './api';

const listSymptomRequest = () => {
  return api
    .get(`aplicativo/doencas/COVID_19/sintomas`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export { listSymptomRequest };
