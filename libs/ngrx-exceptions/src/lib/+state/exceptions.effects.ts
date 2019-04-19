import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as ExceptionActions from './exceptions.actions';
import * as ExceptionEvents from './exceptions.events';
import {map} from 'rxjs/operators';
import {ThrowableException} from "../interfaces/throwable.interface";
import {ExceptionsService} from "../exceptions.service";

@Injectable()
export class ExceptionsEffects {

  @Effect() throwException$ = this.actions$
    .pipe(
      ofType(ExceptionActions.throwException.type),
      map((action: { exception: ThrowableException }) => {

          const {exception} = action;
          return ExceptionEvents.exceptionThrown({exception});
        }
      )
    );

  @Effect() clearExceptions$ = this.actions$
    .pipe(
      ofType(ExceptionActions.clearExceptions.type),
      map((action) => {

          return ExceptionEvents.exceptionsCleared();
        }
      )
    );

  constructor(
    private actions$: Actions,
    private exceptionsService: ExceptionsService
  ) {
  }
}
