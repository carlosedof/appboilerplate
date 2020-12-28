import { takeLatest, call, put } from 'redux-saga/effects';
import { Types, Creators } from '../reducers/ubs';
import { findAll } from '../../services/ubs';
import estados from '../../utils/municipios.json';
import { setSnackbarInfos } from '../../components/Snackbar/snackbarUtils';

export function* findAllUbs() {
  try {
    const { data } = yield call(findAll);
    const newData = [];
    if (data && data.length > 0) {
      data.forEach((ubs) => {
        if (ubs.endereco) {
          const estado = estados.find((f) => f.id === ubs.endereco.uf);
          const municipio =
            estado &&
            estado.municipios.find((f) => f.id === ubs.endereco.municipio);
          newData.push({
            ...ubs,
            endereco: {
              ...ubs.endereco,
              ufTransformer: estado,
              municipioTransformer: municipio,
            },
          });
        }
        return newData.push(ubs);
      });
    }
    const listUbsWithAddress = newData.filter(
      (ubs) => !!ubs.endereco && !!ubs.endereco.geolocalizacao,
    );

    yield put(Creators.findAllSuccess(newData, listUbsWithAddress));
  } catch (error) {
    setSnackbarInfos(error.message, true);
    yield put(Creators.findAllFailed(error));
  }
}

export const ubsSagas = [takeLatest(Types.FIND_ALL_REQUEST, findAllUbs)];
