import {createFeatureSelector, createSelector} from '@ngrx/store';
import {EXCEPTION_FEATURE_KEY, ExceptionState} from './exceptionReducer';

// Lookup the 'Exceptions' feature state managed by NgRx
const getExceptionsState = createFeatureSelector<ExceptionState>(
  EXCEPTION_FEATURE_KEY
);

const hasException = createSelector(
  getExceptionsState,
  (state: ExceptionState) => state.list ? (state.list.length > 0) : false
);

const getAllExceptions = createSelector(
  getExceptionsState,
  (state: ExceptionState) => state.list ? state.list : []
);

export const exceptionsQuery = {
  hasException,
  getAllExceptions
};
