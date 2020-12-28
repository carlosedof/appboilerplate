import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  findByCoordsRequest: ['long', 'lat'],
  findByCoordsSuccess: ['address'],
  findByCoordsFailed: ['error'],
});

const INITIAL_STATE = {
  address: null,
  isfetching: false,
};

const findByCoordsRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isfetching: true,
    address: null,
  };
};

const findByCoordsSuccess = (state = INITIAL_STATE, { address }) => ({
  ...state,
  address,
  isfetching: false,
});

const findByCoordsFailed = (state = INITIAL_STATE, { error }) => ({
  ...state,
  error,
  isfetching: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.FIND_BY_COORDS_REQUEST]: findByCoordsRequest,
  [Types.FIND_BY_COORDS_SUCCESS]: findByCoordsSuccess,
  [Types.FIND_BY_COORDS_FAILED]: findByCoordsFailed,
});
