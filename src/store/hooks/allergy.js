import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../reducers/allergy';

export const useAllergyListRequest = () => {
  const dispatch = useDispatch();
  return useCallback(
    (query) => {
      dispatch(Creators.listAllergyRequest(query));
    },
    [dispatch],
  );
};

export const useAllergyReset = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(Creators.resetAllergyState());
  }, [dispatch]);
};

export const useAllergies = () => {
  return useSelector((state) => state.allergy.allergies);
};

export const useAllergyIsFetching = () => {
  return useSelector((state) => state.allergy.isfetching);
};

export const useAllergySuccess = () => {
  return useSelector((state) => state.allergy.requestSuccess);
};
