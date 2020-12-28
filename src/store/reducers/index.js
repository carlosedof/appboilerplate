import { combineReducers } from 'redux';
import example from './example';
import auth from './auth';
import patient from './patient';

export default combineReducers({
  example,
  auth,
  patient,
});
