import api from './api';

const findAll = () => {
  return api
    .get('aplicativo/unidadesbasica')
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
};

export { findAll };
