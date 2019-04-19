import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { exceptionsQuery, ExceptionState, ThrowableException } from '@ne/ngrx-exceptions';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ninthdegree-exception-detail',
  template: `
    <div *ngIf="!!exception">
      <ul>
        <li>Type : {{exception.exceptionType}}</li>
        <li>Code : {{exception.code}}</li>
        <li>Message : {{exception.message}}</li>
        <li>Cause : {{exception.cause}}</li>
      </ul>
    </div>
    <div *ngIf="!exception">No exception</div>
  `
})
export class ExceptionDetailComponent {

  @Input() exception: ThrowableException;

}
