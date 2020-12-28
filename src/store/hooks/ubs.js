import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../reducers/ubs';

export const useUbsFindAllRequest = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(Creators.findAllRequest());
  }, [dispatch]);
};

export const useUbsListUbs = () => {
  return useSelector((state) => state.ubs.listUbs);
};

export const useUbsListUbsWithAddress = () => {
  return useSelector((state) => state.ubs.listUbsWithAddress);
};

export const useUbsIsFetching = () => {
  return useSelector((state) => state.ubs.isfetching);
};
