import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../reducers/preDisease';

export const usePreDiseaseListRequest = () => {
  const dispatch = useDispatch();
  return useCallback(
    (query) => {
      dispatch(Creators.listPreDiseaseRequest(query));
    },
    [dispatch],
  );
};

export const usePreDiseaseReset = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(Creators.resetPreDiseaseState());
  }, [dispatch]);
};

export const usePreDiseases = () => {
  return useSelector((state) => state.preDisease.preDiseases);
};

export const usePreDiseaseIsFetching = () => {
  return useSelector((state) => state.preDisease.isfetching);
};

export const usePreDiseaseSuccess = () => {
  return useSelector((state) => state.preDisease.requestSuccess);
};
