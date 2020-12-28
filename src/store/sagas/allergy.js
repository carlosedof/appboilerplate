import { call, put, takeLatest } from 'redux-saga/effects';
import { Creators, Types } from '../reducers/allergy';
import { listAllergyRequest } from '../../services/allergy';
import { setSnackbarInfos } from '../../components/Snackbar/snackbarUtils';

export function* getAllergies({ nome }) {
  try {
    const response = yield call(listAllergyRequest, nome);
    yield put(Creators.listAllergySuccess(response.data));
  } catch (error) {
    setSnackbarInfos(error.message, true);
    yield put(Creators.listAllergyError(error));
  }
}

export const allergySagas = [
  takeLatest(Types.LIST_ALLERGY_REQUEST, getAllergies),
];
