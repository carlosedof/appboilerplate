import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  listPreDiseaseRequest: ['nome'],
  listPreDiseaseSuccess: ['list'],
  resetPreDiseaseState: null,
  listPreDiseaseError: ['error'],
});

const INITIAL_STATE = {
  error: null,
  isfetching: false,
  preDiseases: [],
  requestSuccess: false,
};

const listPreDiseaseRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isfetching: true,
  };
};

const resetPreDiseaseState = (state = INITIAL_STATE) => ({
  ...state,
  requestSuccess: false,
  error: null,
  isfetching: false,
});

const listPreDiseaseSuccess = (state = INITIAL_STATE, { list }) => ({
  ...state,
  preDiseases: list,
  requestSucess: true,
  isfetching: false,
});

const listPreDiseaseError = (state = INITIAL_STATE, { error }) => ({
  ...state,
  error,
  isfetching: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.LIST_PRE_DISEASE_REQUEST]: listPreDiseaseRequest,
  [Types.LIST_PRE_DISEASE_SUCCESS]: listPreDiseaseSuccess,
  [Types.LIST_PRE_DISEASE_ERROR]: listPreDiseaseError,
  [Types.RESET_PRE_DISEASE_STATE]: resetPreDiseaseState,
});
