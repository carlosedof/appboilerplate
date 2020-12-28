import { all } from 'redux-saga/effects';
import { authSagas } from './auth';
import { patientSagas } from './patient';

export default function* rootSaga() {
  yield all([...authSagas, ...patientSagas]);
}
