import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {createFunctionalException, ExceptionActions} from "@ne/ngrx-exceptions";

@Component({
  selector: 'ninthdegree-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ninth Degree Platform';

  constructor(private readonly store:Store<any>){

    this.store.dispatch(ExceptionActions.throwException({ exception:createFunctionalException('MonCode','A functional Exception')}));

  }
}
