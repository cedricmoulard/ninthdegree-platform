import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as ExceptionActions from './exceptions.actions';
import {map} from 'rxjs/operators';
import {Throwable} from "../interfaces/throwable.interface";

@Injectable()
export class ExceptionsEffects {

  @Effect() raiseException$ = this.actions$
    .pipe(
      ofType(ExceptionActions.throwException.type),
      map((action: { exception: Throwable }) => {

          const {exception} = action;
          return ExceptionActions.exceptionThrown({exception});
        }
      )
    );

  constructor(
    private actions$: Actions
  ) {
  }
}
