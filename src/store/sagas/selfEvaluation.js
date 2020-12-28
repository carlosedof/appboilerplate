import { call, put, takeLatest } from 'redux-saga/effects';
import { Creators, Types } from '../reducers/selfEvaluation';
import { setSnackbarInfos } from '../../components/Snackbar/snackbarUtils';
import {
  createRequest,
  getByIdRequest,
  findLastSelfEvaluationTimelineRequest,
  findLastSelfEvaluationRequest,
} from '../../services/selfEvaluation';

export function* createSelfEvaluation({ requestData }) {
  try {
    yield call(createRequest, requestData);
    yield put(Creators.createSuccess());
  } catch (error) {
    setSnackbarInfos(error.message, true);
    yield put(Creators.createFailed(error));
  }
}

export function* getSelfEvaluationById({ id }) {
  try {
    const response = yield call(getByIdRequest, id);
    yield put(Creators.getByIdSuccess(response.data));
  } catch (error) {
    setSnackbarInfos(error.message, true);
    yield put(Creators.getByIdFailed(error));
  }
}

export function* findLastSelfEvaluation() {
  try {
    const response = yield call(findLastSelfEvaluationRequest);
    yield put(Creators.findLastSuccess(response.data));
  } catch (error) {
    yield put(Creators.findLastFailed(error));
  }
}

export function* findLastSelfEvaluationTimeline() {
  try {
    const response = yield call(findLastSelfEvaluationTimelineRequest);
    yield put(Creators.findLastTimelineSuccess(response.data));
  } catch (error) {
    yield put(Creators.findLastTimelineFailed(error));
  }
}

export const selfEvaluationSagas = [
  takeLatest(Types.CREATE_REQUEST, createSelfEvaluation),
  takeLatest(Types.GET_BY_ID_REQUEST, getSelfEvaluationById),
  takeLatest(Types.FIND_LAST_REQUEST, findLastSelfEvaluation),
  takeLatest(Types.FIND_LAST_TIMELINE_REQUEST, findLastSelfEvaluationTimeline),
];
