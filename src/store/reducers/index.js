import { combineReducers } from 'redux';
import example from './example';
import auth from './auth';
import patient from './patient';
import ubs from './ubs';
import preDisease from './preDisease';
import allergy from './allergy';
import address from './address';
import symptom from './symptom';
import selfEvaluation from './selfEvaluation';

export default combineReducers({
  example,
  auth,
  patient,
  preDisease,
  allergy,
  ubs,
  address,
  symptom,
  selfEvaluation,
});
