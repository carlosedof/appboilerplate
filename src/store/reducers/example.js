import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addExample: ['data'],
  findExamples: null,
});

const INITIAL_STATE = {
  example: null,
  examples: [],
  fetching: false,
};

const addExample = (state = INITIAL_STATE, action) => ({
  ...state,
  example: action.data,
});

const findExamples = (state = INITIAL_STATE, action) => ({
  ...state,
  fetching: true,
});

export default createReducer(INITIAL_STATE, {
  [Types.ADD_EXAMPLE]: addExample,
  [Types.FIND_EXAMPLES]: findExamples,
});
