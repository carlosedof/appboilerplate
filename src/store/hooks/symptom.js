import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../reducers/symptom';

export const useSymptomListRequest = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(Creators.listSymptomRequest());
  }, [dispatch]);
};

export const useSymptomReset = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(Creators.resetSymptomState());
  }, [dispatch]);
};

export const useSymptoms = () => {
  return useSelector((state) => state.symptom.symptoms);
};

export const useSymptomIsFetching = () => {
  return useSelector((state) => state.symptom.isfetching);
};

export const useSymptomSuccess = () => {
  return useSelector((state) => state.symptom.requestSuccess);
};
