import * as Yup from 'yup';
import { validateCPF as validateCPFUtil } from '../../../../config/utils/CPFUtil';
import { validateCpf } from '../../../../services/user';
import configureStore from '../../../../store';
import { Creators } from '../../../../store/reducers/user';

const setIsFetching = (isfetching) => {
  configureStore().store.dispatch(Creators.changeIsFetching(isfetching));
};

const changeCpfInUse = (valid) => {
  configureStore().store.dispatch(Creators.validateCpfSuccess(valid));
};

const changeCurrentCpfIsValid = (valid) => {
  configureStore().store.dispatch(Creators.changeCurrentCpfIsValid(valid));
};

const changeLastCpfSearch = (lastCpf) => {
  configureStore().store.dispatch(Creators.changeLastCpfSearch(lastCpf));
};

const lastCpfSearch = () => {
  return configureStore().store.getState().user.lastCpfSearch;
};

const cpfInUseState = () => {
  return configureStore().store.getState().user.cpfExist;
};

const validateCpfInUse = async (cpf) => {
  if (lastCpfSearch() === cpf) {
    if (cpfInUseState()) {
      changeCurrentCpfIsValid(false);
    }
    return cpfInUseState();
  }
  setIsFetching(true);
  const cpfInUse = await validateCpf(cpf)
    .then((resp) => {
      changeLastCpfSearch(cpf);
      setIsFetching(false);
      changeCpfInUse(resp.data.exist);
      changeCurrentCpfIsValid(!resp.data.exist);
      return resp.data.exist;
    })
    .catch(() => {
      setIsFetching(false);
      return false;
    });
  return cpfInUse;
};

const schema = Yup.object().shape({
  cpf: Yup.string()
    .trim()
    .nullable()
    .required('O campo CPF é obrigatório')
    .max(11)
    .min(11, '')
    .test('cpf', 'O CPF Informado não é válido.', (val) => {
      const isValid = validateCPFUtil(val);
      changeCurrentCpfIsValid(isValid);
      return isValid;
    })
    .test('cpf', 'O CPF Informado ja está em uso.', async (val) => {
      if (validateCPFUtil(val)) {
        const cpfInUse = await validateCpfInUse(val);
        return !cpfInUse;
      }
      return false;
    }),
  rg: Yup.string().trim().nullable().required('RG é obrigatório.'),
  sexo: Yup.string()
    .trim()
    .nullable()
    .required('O campo sexo é de preenchimento obrigatório.'),
  nome: Yup.string().required('O campo nome é de preenchimento obrigatório.'),
  sobrenome: Yup.string().required(
    'O campo sobrenome é de preenchimento obrigatório.',
  ),
  data_nascimento: Yup.string().required(
    'O campo data de nascimento é de preenchimento obrigatório.',
  ),
});

export default schema;
