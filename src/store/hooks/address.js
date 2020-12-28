import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../reducers/address';

export const useAddressFindByCoordsRequest = () => {
  const dispatch = useDispatch();
  return useCallback(
    (long, lat) => {
      dispatch(Creators.findByCoordsRequest(long, lat));
    },
    [dispatch],
  );
};

export const useAddress = () => {
  return useSelector((state) => state.address.address);
};

export const useAddressIsFetching = () => {
  return useSelector((state) => state.address.isfetching);
};
