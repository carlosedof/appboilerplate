import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  listAllergyRequest: ['nome'],
  listAllergySuccess: ['list'],
  resetAllergyState: null,
  listAllergyError: ['error'],
});

const INITIAL_STATE = {
  error: null,
  isfetching: false,
  allergies: [],
  requestSuccess: false,
};

const listAllergyRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isfetching: true,
  };
};

const resetAllergyState = (state = INITIAL_STATE) => ({
  ...state,
  requestSuccess: false,
  error: null,
  isfetching: false,
});

const listAllergySuccess = (state = INITIAL_STATE, { list }) => ({
  ...state,
  allergies: list,
  requestSucess: true,
  isfetching: false,
});

const listAllergyError = (state = INITIAL_STATE, { error }) => ({
  ...state,
  error,
  isfetching: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.LIST_ALLERGY_REQUEST]: listAllergyRequest,
  [Types.LIST_ALLERGY_SUCCESS]: listAllergySuccess,
  [Types.LIST_ALLERGY_ERROR]: listAllergyError,
  [Types.RESET_ALLERGY_STATE]: resetAllergyState,
});
