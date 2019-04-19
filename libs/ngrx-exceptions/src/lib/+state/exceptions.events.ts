import { createAction, props} from '@ngrx/store';
import {ThrowableException} from "../interfaces/throwable.interface";

export enum ExceptionsEventTypes {
  ExceptionThrown = '[Exception] Exception thrown',
  ExceptionsCleared = '[Exception] Exceptions cleared',
}

export const exceptionThrown = createAction(ExceptionsEventTypes.ExceptionThrown,
  props<{ exception: ThrowableException }>()
);

export const exceptionsCleared = createAction(ExceptionsEventTypes.ExceptionsCleared);

export type ExceptionsEventsUnion = ReturnType<
  typeof exceptionThrown |
  typeof exceptionsCleared>;

