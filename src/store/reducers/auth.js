import { createActions, createReducer } from 'reduxsauce';
import { Storage } from '../../utils';

export const { Types, Creators } = createActions({
  loginRequest: ['credentials', 'afterSuccessNavigate', 'isRouteName'],
  loginSuccess: ['token'],
  loginFailed: ['error'],
  logout: null,
});

const INITIAL_STATE = {
  user: null,
  token: null,
  authenticated: false,
  error: null,
  isfetching: false,
};

const loginRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isfetching: true,
  };
};

const loginSuccess = (state = INITIAL_STATE, { token }) => ({
  ...state,
  token,
  authenticated: true,
  isfetching: false,
});

const loginFailed = (state = INITIAL_STATE, { error }) => ({
  ...state,
  error,
  isfetching: false,
});

const logout = (state = INITIAL_STATE) => {
  (async () => {
    await Storage.clearToken();
  })();
  return {
    ...state,
    user: null,
    token: null,
    authenticated: false,
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILED]: loginFailed,
  [Types.LOGOUT]: logout,
});
