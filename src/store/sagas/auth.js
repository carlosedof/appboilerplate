import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { Types, Creators } from '../reducers/auth';
import { loginRequest } from '../../services/auth';
import { Storage } from '../../utils';
import { NavigationService } from '../../config';
import { setSnackbarInfos } from '../../components/Snackbar/snackbarUtils';

export function* authenticate({
  credentials,
  afterSuccessNavigate,
  isRouteName,
}) {
  try {
    yield delay(2000);
    const { data } = yield call(loginRequest, credentials);
    yield put(Creators.loginSuccess(data.token));
    yield call(Storage.setToken, data.token);
    if (afterSuccessNavigate) {
      yield call(
        NavigationService.navigate,
        isRouteName
          ? { name: afterSuccessNavigate }
          : { key: afterSuccessNavigate },
      );
    }
  } catch (error) {
    setSnackbarInfos(error.message, true);
    yield put(Creators.loginFailed(error));
  }
}

export const authSagas = [takeLatest(Types.LOGIN_REQUEST, authenticate)];
