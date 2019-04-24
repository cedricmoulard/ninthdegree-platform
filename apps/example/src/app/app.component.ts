import {Component} from '@angular/core';
import {clearExceptions, throwFunctionalException, throwTechnicalException} from "@ne/ngrx-exceptions";
import {myFunctionalException, myTechnicalException} from "./exceptions.const";

@Component({
  selector: 'ninthdegree-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ninth Degree Platform';

  constructor() {
  }

  throwFunctionalException(){
    throwFunctionalException(myFunctionalException, Math.random().toString(36).substring(7));
  }

  throwTechnicalException(){
    throwTechnicalException(myTechnicalException, Math.random().toString(36).substring(7), new Error());
  }

  clearExceptions(){
    clearExceptions()
  }
}
