import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { exceptionsQuery, ExceptionState, ThrowableException } from '@ne/ngrx-exceptions';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'ninthdegree-exceptions-ui',
  template: `
    <div>Exceptions</div>
    <ninthdegree-exception-list [exceptions]="exceptions$ | async"></ninthdegree-exception-list>
    <div>Last Exception</div>
    <ninthdegree-exception-detail [exception]="lastException$ | async"></ninthdegree-exception-detail>
  `
})
export class ExceptionsUiComponent {

  exceptions$: Observable<ThrowableException[]>;
  lastException$: Observable<ThrowableException>;

  constructor(private readonly store: Store<ExceptionState>) {
    this.exceptions$ = store.pipe(
      select(exceptionsQuery.getAllExceptions)
    );

    this.lastException$ = store.pipe(
      select(exceptionsQuery.getLastException)
    );
  }

}
