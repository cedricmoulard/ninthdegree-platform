import {ExceptionsAction, ExceptionsActionTypes} from './exceptions.actions';
import {Throwable} from "../interfaces/throwable.interface";

export const EXCEPTION_FEATURE_KEY = 'exceptions';

export interface ExceptionState {
  list: Throwable[];
}

export interface ExceptionPartialState {
  readonly [EXCEPTION_FEATURE_KEY]: ExceptionState;
}

export const initialExceptionState: ExceptionState = {
  list: [],
};

export function exceptionsReducer(
  state: ExceptionState = initialExceptionState,
  action: ExceptionsAction
): ExceptionState {
  switch (action.type) {

    case ExceptionsActionTypes.ExceptionThrown: {
      return {
        ...state,
        list: [...state.list, action.exception]
      };
    }

    default:
      return state;
  }
}
