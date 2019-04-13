import {Action, createAction, props} from '@ngrx/store';
import {ThrowableException} from "../exceptions/throwable.exception";

export enum ExceptionsActionTypes {
  ThrowException = '[Exception] Throw exception',
  ExceptionThrown = '[Exception] Exceptions thrown'
}

export const throwException = createAction(ExceptionsActionTypes.ThrowException,
  props<{ exception: ThrowableException }>()
);

export const exceptionThrown = createAction(ExceptionsActionTypes.ExceptionThrown,
  props<{ exception: ThrowableException }>()
);

export type ExceptionsAction = ReturnType<typeof throwException | typeof exceptionThrown>;

