import { call, put, takeLatest } from 'redux-saga/effects';
import { Creators, Types } from '../reducers/user';
import { createRequest, validateCpf } from '../../services/user';
import { setSnackbarInfos } from '../../components/Snackbar/snackbarUtils';

export function* create({ requestData }) {
  try {
    const response = yield call(createRequest, requestData);
    // TRECHO DE CODIGO QUE MANDA USUARIO PARA O LOGIN
    /* NavigationService.popToTop();
    const navigation = NavigationService.navigationRef.current;
    openModal({
      navigation,
      component: GenericComponent({
        component: Login,
      }),
    }); */
    yield put(Creators.createSuccess());
  } catch (error) {
    setSnackbarInfos(error.message, true);
    yield put(Creators.createFailed(error));
  }
}

export function* existsCpf({ cpf }) {
  try {
    const response = yield call(validateCpf, cpf);
    yield put(Creators.validateCpfSuccess(response.data.exist));
  } catch (error) {
    setSnackbarInfos(error.message, true);
    yield put(Creators.validateCpfFailed(error));
  }
}

export const userSagas = [
  takeLatest(Types.CREATE_REQUEST, create),
  takeLatest(Types.VALIDATE_CPF_REQUEST, existsCpf),
];
