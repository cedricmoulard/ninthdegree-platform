import {ExceptionsAction, ExceptionsActionTypes} from './exceptions.actions';
import {ThrowableException} from "../exceptions/throwable.exception";

export const EXCEPTION_FEATURE_KEY = 'exceptions';

export interface ExceptionState {
  list: ThrowableException[];
}

export interface ExceptionPartialState {
  readonly [EXCEPTION_FEATURE_KEY]: ExceptionState;
}

export const initialExceptionState: ExceptionState = {
  list: [],
};

export function exceptionReducer(
  state: ExceptionState = initialExceptionState,
  action: ExceptionsAction
): ExceptionState {
  switch (action.type) {
    case ExceptionsActionTypes.ExceptionThrown: {
      state = {
        ...state,
        list: [...state.list, action.exception]
      };
      break;
    }
  }
  return state;
}
