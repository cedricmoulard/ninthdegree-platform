import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as ExceptionActions from './exceptions.actions';
import {map} from 'rxjs/operators';
import {ThrowableException} from "../exceptions/throwable.exception";

@Injectable()
export class ExceptionsEffects {

  @Effect() raiseException$ = this.actions$
    .pipe(
      ofType(ExceptionActions.throwException.type),
      map((action: { exception: ThrowableException }) => {

          const {exception} = action;

          console.log(`Exception Raised : ${exception}`);
          // LoggerService.flush();
          return ExceptionActions.exceptionThrown({exception});
        }
      )
    );

  constructor(
    private actions$: Actions
  ) {
  }
}
