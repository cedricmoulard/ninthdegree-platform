import {ExceptionsActionUnion, ExceptionsActionTypes} from './exceptions.actions';
import {ThrowableException} from "../interfaces/throwable.interface";
import { ExceptionsEventsUnion, ExceptionsEventTypes } from './exceptions.events';

export const EXCEPTION_FEATURE_KEY = 'exceptions';

export interface ExceptionState {
  list: ThrowableException[];
  lasException?: ThrowableException;
}

export interface ExceptionPartialState {
  readonly [EXCEPTION_FEATURE_KEY]: ExceptionState;
}

export const initialExceptionState: ExceptionState = {
  list: [],
};

export function exceptionsReducer(
  state: ExceptionState = initialExceptionState,
  action: ExceptionsActionUnion | ExceptionsEventsUnion
): ExceptionState {
  switch (action.type) {

    case ExceptionsEventTypes.ExceptionThrown: {
      return {
        ...state,
        list: [...state.list, action.exception],
        lasException: action.exception
      };
    }

    case ExceptionsEventTypes.ExceptionsCleared: {
      return initialExceptionState;
    }

    default:
      return state;
  }
}
