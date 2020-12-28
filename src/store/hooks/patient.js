import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../reducers/patient';

export const usePatientCreateRequest = () => {
  const dispatch = useDispatch();
  return useCallback(
    (data) => {
      dispatch(Creators.createRequest(data));
    },
    [dispatch],
  );
};

export const useSaveRegistrationData = () => {
  const dispatch = useDispatch();
  return useCallback(
    (data) => {
      dispatch(Creators.saveRegistrationData(data));
    },
    [dispatch],
  );
};

export const usePatientReset = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(Creators.resetState());
  }, [dispatch]);
};

export const useRegistrationData = () => {
  return useSelector((state) => state.patient.registrationData);
};

export const usePatientIsFetching = () => {
  return useSelector((state) => state.patient.isfetching);
};

export const usePatientIsCpfFetching = () => {
  return useSelector((state) => state.patient.isCpffetching);
};

export const usePatientCreateSuccess = () => {
  return useSelector((state) => state.patient.createSuccess);
};

export const usePatientCValidateCpfRequest = () => {
  const dispatch = useDispatch();
  return useCallback(
    (cpf) => {
      dispatch(Creators.validateCpfRequest(cpf));
    },
    [dispatch],
  );
};

export const usePatientCpfExist = () => {
  return useSelector((state) => state.patient.cpfExist);
};

export const usePatientCurrentCpfIsValid = () => {
  return useSelector((state) => state.patient.currentCpfIsValid);
};
