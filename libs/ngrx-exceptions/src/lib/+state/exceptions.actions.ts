import { createAction, props} from '@ngrx/store';
import {ThrowableException} from "../interfaces/throwable.interface";

export enum ExceptionsActionTypes {
  ThrowException = '[Exception] Throw exception',
  ClearExceptions = '[Exception] Clear exceptions',
}

export const throwException = createAction(ExceptionsActionTypes.ThrowException,
  props<{ exception: ThrowableException }>()
);

export const clearExceptions = createAction(ExceptionsActionTypes.ClearExceptions);

export type ExceptionsActionUnion = ReturnType<typeof throwException |
  typeof clearExceptions>;

