import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  createRequest: ['requestData'],
  createSuccess: null,
  resetState: null,
  createFailed: ['error'],
  saveRegistrationData: ['registrationData'],
  validateCpfRequest: ['cpf'],
  validateCpfSuccess: ['exist'],
  validateCpfFailed: ['error'],
  changeIsFetching: ['isFetching'],
  changeLastCpfSearch: ['cpf'],
  changeCurrentCpfIsValid: ['isValid'],
  logout: null,
});

const INITIAL_STATE = {
  error: null,
  isFetching: false,
  isCpffetching: false,
  createSuccess: false,
  createError: false,
  currentCpfIsValid: false,
  cpfExist: true,
  lastCpfSearch: null,
  registrationData: {
    cpf: '',
    rg: '',
    sexo: '',
    nome: '',
    sobrenome: '',
    data_nascimento: '',
    email: '',
    celular: '',
    senha: '',
  },
};

const createRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isFetching: true,
  };
};

const saveRegistrationData = (state = INITIAL_STATE, { registrationData }) => {
  return {
    ...state,
    registrationData,
  };
};

const resetState = (state = INITIAL_STATE) => ({
  ...state,
  createSuccess: false,
  createError: false,
  isFetching: false,
});

const createSuccess = (state = INITIAL_STATE) => ({
  ...state,
  createSuccess: true,
  isFetching: false,
});

const createFailed = (state = INITIAL_STATE, { error }) => ({
  ...state,
  error,
  isFetching: false,
});

const validateCpfRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    cpfExist: false,
    isFetching: true,
  };
};

const validateCpfSuccess = (state = INITIAL_STATE, { exist: cpfExist }) => ({
  ...state,
  cpfExist,
  isFetching: false,
});

const validateCpfFailed = (state = INITIAL_STATE, { error }) => ({
  ...state,
  error,
  isFetching: false,
});

const changeIsFetching = (state = INITIAL_STATE, { isFetching }) => ({
  ...state,
  isCpffetching: isFetching,
});

const changeLastCpfSearch = (state = INITIAL_STATE, { cpf }) => ({
  ...state,
  lastCpfSearch: cpf,
});

const changeCurrentCpfIsValid = (state = INITIAL_STATE, { isValid }) => ({
  ...state,
  currentCpfIsValid: isValid,
});

export default createReducer(INITIAL_STATE, {
  [Types.CREATE_REQUEST]: createRequest,
  [Types.CREATE_SUCCESS]: createSuccess,
  [Types.CREATE_FAILED]: createFailed,
  [Types.SAVE_REGISTRATION_DATA]: saveRegistrationData,
  [Types.RESET_STATE]: resetState,
  [Types.VALIDATE_CPF_REQUEST]: validateCpfRequest,
  [Types.VALIDATE_CPF_SUCCESS]: validateCpfSuccess,
  [Types.VALIDATE_CPF_FAILED]: validateCpfFailed,
  [Types.CHANGE_IS_FETCHING]: changeIsFetching,
  [Types.CHANGE_LAST_CPF_SEARCH]: changeLastCpfSearch,
  [Types.CHANGE_CURRENT_CPF_IS_VALID]: changeCurrentCpfIsValid,
});
