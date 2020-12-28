import { call, put, takeLatest } from 'redux-saga/effects';
import { Creators, Types } from '../reducers/symptom';
import { listSymptomRequest } from '../../services/symptom';
import { setSnackbarInfos } from '../../components/Snackbar/snackbarUtils';

export function* getSymptoms() {
  try {
    const response = yield call(listSymptomRequest);
    yield put(Creators.listSymptomSuccess(response.data));
  } catch (error) {
    setSnackbarInfos(error.message, true);
    yield put(Creators.listSymptomError(error));
  }
}

export const symptomSagas = [
  takeLatest(Types.LIST_SYMPTOM_REQUEST, getSymptoms),
];
