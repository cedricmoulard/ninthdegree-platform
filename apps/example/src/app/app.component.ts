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
    throwFunctionalException(myFunctionalException, 'A functional Exception');
  }

  throwTechnicalException(){
    throwTechnicalException(myTechnicalException, 'A functional Exception', new Error());
  }

  clearExceptions(){
    clearExceptions()
  }
}
