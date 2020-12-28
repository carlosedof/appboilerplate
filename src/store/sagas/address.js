import { takeLatest, call, put } from 'redux-saga/effects';
import { Types, Creators } from '../reducers/address';
import { findAddressByCoords as findAddressByCoordsRequest } from '../../services/address';
import { setSnackbarInfos } from '../../components/Snackbar/snackbarUtils';

export function* findAddressByCoords({ long, lat }) {
  try {
    const response = yield call(findAddressByCoordsRequest, long, lat);
    yield put(Creators.findByCoordsSuccess(response.data));
  } catch (error) {
    setSnackbarInfos(error.message, true);
    yield put(Creators.findByCoordsFailed(error));
  }
}

export const addressSagas = [
  takeLatest(Types.FIND_BY_COORDS_REQUEST, findAddressByCoords),
];
