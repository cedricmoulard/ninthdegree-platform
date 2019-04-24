import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { exceptionsQuery, ExceptionState, ThrowableException } from '@ne/ngrx-exceptions';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ninthdegree-exception-list',
  template: `
    <ul>
      <li *ngFor="let exception of exceptions">
        <ninthdegree-exception-list-item [exception]="exception"></ninthdegree-exception-list-item>
      </li>
    </ul>
  `
})
export class ExceptionListComponent {

  @Input() exceptions: ThrowableException[];

}
