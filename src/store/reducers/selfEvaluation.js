import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  createRequest: ['requestData'],
  getByIdRequest: ['id'],
  getByIdSuccess: ['data'],
  getByIdFailed: ['error'],
  createSuccess: null,
  resetState: null,
  createFailed: ['error'],
  saveSelfEvaluationData: ['selfEvaluationData'],
  findLastRequest: null,
  findLastSuccess: ['data'],
  findLastFailed: ['error'],
  findLastTimelineRequest: null,
  findLastTimelineSuccess: ['data'],
  findLastTimelineFailed: ['error'],
});

const INITIAL_STATE = {
  error: null,
  isfetching: false,
  createSuccess: false,
  createError: false,
  selfEvaluationData: null,
  lastSelfEvaluationData: null,
  lastSelfEvaluationTimelineData: null,
};

const createRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isfetching: true,
  };
};

const getByIdRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isfetching: true,
  };
};

const getByIdSuccess = (state = INITIAL_STATE, { data }) => {
  return {
    ...state,
    isfetching: false,
    selfEvaluationData: data,
  };
};

const getByIdFailed = (state = INITIAL_STATE, { error }) => {
  return {
    ...state,
    isfetching: false,
    selfEvaluationData: null,
    error,
  };
};

const saveSelfEvaluationData = (
  state = INITIAL_STATE,
  { selfEvaluationData },
) => ({
  ...state,
  selfEvaluationData,
});

const resetState = (state = INITIAL_STATE) => ({
  ...state,
  createSuccess: false,
  createError: false,
  isfetching: false,
});

const createSuccess = (state = INITIAL_STATE) => ({
  ...state,
  createSuccess: true,
  isfetching: false,
});

const createFailed = (state = INITIAL_STATE, { error }) => ({
  ...state,
  error,
  isfetching: false,
});

const findLastRequest = (state = INITIAL_STATE) => ({
  ...state,
  isfetching: true,
});
const findLastSuccess = (state = INITIAL_STATE, { data }) => ({
  ...state,
  isfetching: false,
  lastSelfEvaluationData: data,
});

const findLastFailed = (state = INITIAL_STATE, { error }) => ({
  ...state,
  isfetching: false,
  lastSelfEvaluationData: null,
  error,
});

const findLastTimelineRequest = (state = INITIAL_STATE) => ({
  ...state,
  isfetching: true,
});

const findLastTimelineSuccess = (state = INITIAL_STATE, { data }) => ({
  ...state,
  isfetching: false,
  lastSelfEvaluationTimelineData: data,
});

const findLastTimelineFailed = (state = INITIAL_STATE, { error }) => ({
  ...state,
  isfetching: false,
  lastSelfEvaluationTimelineData: null,
  error,
});

export default createReducer(INITIAL_STATE, {
  [Types.CREATE_REQUEST]: createRequest,
  [Types.CREATE_SUCCESS]: createSuccess,
  [Types.CREATE_FAILED]: createFailed,
  [Types.SAVE_SELF_EVALUATION_DATA]: saveSelfEvaluationData,
  [Types.GET_BY_ID_REQUEST]: getByIdRequest,
  [Types.GET_BY_ID_SUCCESS]: getByIdSuccess,
  [Types.GET_BY_ID_FAILED]: getByIdFailed,
  [Types.RESET_STATE]: resetState,
  [Types.FIND_LAST_REQUEST]: findLastRequest,
  [Types.FIND_LAST_SUCCESS]: findLastSuccess,
  [Types.FIND_LAST_FAILED]: findLastFailed,
  [Types.FIND_LAST_TIMELINE_REQUEST]: findLastTimelineRequest,
  [Types.FIND_LAST_TIMELINE_SUCCESS]: findLastTimelineSuccess,
  [Types.FIND_LAST_TIMELINE_FAILED]: findLastTimelineFailed,
});
