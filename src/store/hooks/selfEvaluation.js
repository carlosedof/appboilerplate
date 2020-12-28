import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../reducers/selfEvaluation';

export const useSelfEvaluationCreateRequest = () => {
  const dispatch = useDispatch();
  return useCallback(
    (data) => {
      dispatch(Creators.createRequest(data));
    },
    [dispatch],
  );
};

export const useSaveSelfEvaluationData = () => {
  const dispatch = useDispatch();
  return useCallback(
    (data) => {
      dispatch(Creators.saveSelfEvaluationData(data));
    },
    [dispatch],
  );
};

export const useSelfEvaluationGetByIdData = () => {
  const dispatch = useDispatch();
  return useCallback(
    (id) => {
      dispatch(Creators.getByIdRequest(id));
    },
    [dispatch],
  );
};

export const useSelfEvaluationReset = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(Creators.resetState());
  }, [dispatch]);
};

export const useSelfEvaluationLastRequest = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(Creators.findLastRequest());
  }, [dispatch]);
};

export const useSelfEvaluationLastTimelineRequest = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(Creators.findLastTimelineRequest());
  }, [dispatch]);
};

export const useSelfEvaluationData = () => {
  return useSelector((state) => state.selfEvaluation.selfEvaluationData);
};

export const useSelfEvaluationIsFetching = () => {
  return useSelector((state) => state.selfEvaluation.isfetching);
};

export const useSelfEvaluationCreateSuccess = () => {
  return useSelector((state) => state.selfEvaluation.createSuccess);
};

export const useSelfEvaluationLastData = () => {
  return useSelector((state) => state.selfEvaluation.lastSelfEvaluationData);
};

export const useSelfEvaluationLastTimelineData = () => {
  return useSelector(
    (state) => state.selfEvaluation.lastSelfEvaluationTimelineData,
  );
};
