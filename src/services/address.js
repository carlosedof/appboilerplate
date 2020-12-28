import api from './api';

const findAddressByCoords = (long, lat) => {
  return api
    .get(`aplicativo/endereco/reverse/${long},${lat}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export { findAddressByCoords };
