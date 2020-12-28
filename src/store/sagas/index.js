import { all } from 'redux-saga/effects';
import { authSagas } from './auth';
import { patientSagas } from './patient';
import { ubsSagas } from './ubs';
import { preDiseaseSagas } from './preDisease';
import { allergySagas } from './allergy';
import { addressSagas } from './address';
import { symptomSagas } from './symptom';
import { selfEvaluationSagas } from './selfEvaluation';

export default function* rootSaga() {
  yield all([
    ...authSagas,
    ...patientSagas,
    ...preDiseaseSagas,
    ...allergySagas,
    ...ubsSagas,
    ...addressSagas,
    ...symptomSagas,
    ...selfEvaluationSagas,
  ]);
}
