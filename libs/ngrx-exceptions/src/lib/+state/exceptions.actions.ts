import { createAction, props} from '@ngrx/store';
import {Throwable} from "../interfaces/throwable.interface";

export enum ExceptionsActionTypes {
  ThrowException = '[Exception] Throw exception',
  ExceptionThrown = '[Exception] Exception thrown'
}

export const throwException = createAction(ExceptionsActionTypes.ThrowException,
  props<{ exception: Throwable }>()
);

export const exceptionThrown = createAction(ExceptionsActionTypes.ExceptionThrown,
  props<{ exception: Throwable }>()
);

export type ExceptionsAction = ReturnType<typeof throwException | typeof exceptionThrown>;

