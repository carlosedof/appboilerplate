import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  listSymptomRequest: null,
  listSymptomSuccess: ['list'],
  resetSymptomState: null,
  listSymptomError: ['error'],
});

const INITIAL_STATE = {
  error: null,
  isfetching: false,
  symptoms: [],
  requestSuccess: false,
};

const listSymptomRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isfetching: true,
  };
};

const resetSymptomState = (state = INITIAL_STATE) => ({
  ...state,
  requestSuccess: false,
  error: null,
  isfetching: false,
});

const listSymptomSuccess = (state = INITIAL_STATE, { list }) => ({
  ...state,
  symptoms: list,
  requestSucess: true,
  isfetching: false,
});

const listSymptomError = (state = INITIAL_STATE, { error }) => ({
  ...state,
  error,
  isfetching: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.LIST_SYMPTOM_REQUEST]: listSymptomRequest,
  [Types.LIST_SYMPTOM_SUCCESS]: listSymptomSuccess,
  [Types.LIST_SYMPTOM_ERROR]: listSymptomError,
  [Types.RESET_SYMPTOM_STATE]: resetSymptomState,
});
