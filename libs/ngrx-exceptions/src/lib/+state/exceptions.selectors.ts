import {createFeatureSelector, createSelector} from '@ngrx/store';
import {EXCEPTION_FEATURE_KEY, ExceptionState} from './exceptions.reducer';
import {ExceptionType} from "../interfaces/throwable.interface";

// Lookup the 'Exceptions' feature state managed by NgRx
const getExceptionsState = createFeatureSelector<ExceptionState>(
  EXCEPTION_FEATURE_KEY
);

const hasException = createSelector(
  getExceptionsState,
  (state: ExceptionState) => state.list ? (state.list.length > 0) : false
);

const hasTechnicalException = createSelector(
  getExceptionsState,
  (state: ExceptionState) => state.list ? state.list.some(exception => exception.exceptionType === ExceptionType.TECHNICAL) : false
);

const hasFunctionalException = createSelector(
  getExceptionsState,
  (state: ExceptionState) => state.list ? state.list.some(exception => exception.exceptionType === ExceptionType.FUNCTIONAL) : false
);

const getAllExceptions = createSelector(
  getExceptionsState,
  (state: ExceptionState) => state.list ? state.list : []
);

const getLastException = createSelector(
  getExceptionsState,
  (state: ExceptionState) => state.lasException
);

export const exceptionsQuery = {
  hasException,
  hasTechnicalException,
  hasFunctionalException,
  getAllExceptions,
  getLastException
};
