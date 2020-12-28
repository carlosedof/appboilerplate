import api from './api';

const createRequest = (requestData) => {
  return api
    .post(`aplicativo/autoavaliacao`, requestData)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const getByIdRequest = (id) => {
  return api
    .get(`aplicativo/autoavaliacao/${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const findLastSelfEvaluationTimelineRequest = () => {
  return api
    .get(`aplicativo/autoavaliacao/last/timeline`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const findLastSelfEvaluationRequest = () => {
  return api
    .get(`aplicativo/autoavaliacao-last`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export {
  createRequest,
  getByIdRequest,
  findLastSelfEvaluationTimelineRequest,
  findLastSelfEvaluationRequest,
};
