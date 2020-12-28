import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  findAllRequest: null,
  findAllSuccess: ['listUbs', 'listUbsWithAddress'],
  findAllFailed: ['error'],
});

const INITIAL_STATE = {
  listUbs: [],
  listUbsWithAddress: [],
  error: null,
  isfetching: false,
};

const findAllRequest = (state = INITIAL_STATE) => ({
  ...state,
  isfetching: true,
});

const findAllSuccess = (
  state = INITIAL_STATE,
  { listUbs, listUbsWithAddress },
) => ({
  ...state,
  listUbs,
  listUbsWithAddress,
  isfetching: false,
});

const findAllFailed = (state = INITIAL_STATE, { error }) => ({
  ...state,
  error,
  isfetching: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.FIND_ALL_REQUEST]: findAllRequest,
  [Types.FIND_ALL_SUCCESS]: findAllSuccess,
  [Types.FIND_ALL_FAILED]: findAllFailed,
});
