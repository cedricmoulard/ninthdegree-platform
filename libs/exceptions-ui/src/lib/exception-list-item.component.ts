import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { exceptionsQuery, ExceptionState, ThrowableException } from '@ne/ngrx-exceptions';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ninthdegree-exception-list-item',
  template: `
    <div *ngIf="!!exception">
      {{exception.code}} - {{exception.message}}
    </div>
  `
})
export class ExceptionListItemComponent {

  @Input() exception: ThrowableException;

}
