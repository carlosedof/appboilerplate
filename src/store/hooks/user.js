import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../reducers/user';

export const useUserCreateRequest = () => {
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

export const useUserReset = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(Creators.resetState());
  }, [dispatch]);
};

export const useRegistrationData = () => {
  return useSelector((state) => state.user.registrationData);
};

export const useUserIsFetching = () => {
  return useSelector((state) => state.user.isFetching);
};

export const useUserIsCpfFetching = () => {
  return useSelector((state) => state.user.isCpfFetching);
};

export const useUserCreateSuccess = () => {
  return useSelector((state) => state.user.createSuccess);
};

export const useUserValidateCpfRequest = () => {
  const dispatch = useDispatch();
  return useCallback(
    (cpf) => {
      dispatch(Creators.validateCpfRequest(cpf));
    },
    [dispatch],
  );
};

export const useUserCpfExist = () => {
  return useSelector((state) => state.user.cpfExist);
};

export const useUserCurrentCpfIsValid = () => {
  return useSelector((state) => state.user.currentCpfIsValid);
};
