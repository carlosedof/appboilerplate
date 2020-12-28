import { call, put, takeLatest } from 'redux-saga/effects';
import { Creators, Types } from '../reducers/preDisease';
import { listPreDiseaseRequest } from '../../services/preDisease';
import { setSnackbarInfos } from '../../components/Snackbar/snackbarUtils';

export function* getPreDiseases({ nome }) {
  try {
    const response = yield call(listPreDiseaseRequest, nome);
    yield put(Creators.listPreDiseaseSuccess(response.data));
  } catch (error) {
    setSnackbarInfos(error.message, true);
    yield put(Creators.listPreDiseaseError(error));
  }
}

export const preDiseaseSagas = [
  takeLatest(Types.LIST_PRE_DISEASE_REQUEST, getPreDiseases),
];
