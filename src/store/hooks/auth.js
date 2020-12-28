import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../reducers/auth';

export const useAuthLoginRequest = () => {
  const dispatch = useDispatch();
  return useCallback(
    (credentials, afterSuccessNavigate, isRouteName) => {
      dispatch(
        Creators.loginRequest(credentials, afterSuccessNavigate, isRouteName),
      );
    },
    [dispatch],
  );
};

export const useAuthLogout = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(Creators.logout());
  }, [dispatch]);
};

export const useAuthToken = () => {
  return useSelector((state) => state.auth.token);
};

export const useAuthUser = () => {
  return useSelector((state) => state.auth.user);
};

export const useAuthIsFetching = () => {
  return useSelector((state) => state.auth.isfetching);
};

export const useAuthAuthenticated = () => {
  return useSelector((state) => state.auth.authenticated);
};
