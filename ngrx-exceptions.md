# Ninth Degree Platform - Ngrx Exceptions

Provide exception management with NGRX

## Quickstart

* Install the package

`npm i @ninthdegree/ngrx-exceptions`

* Import module

```typescript
import {NgrxExceptionsModule} from '@ninthdegree/ngrx-exceptions';

@NgModule({
  imports: [
    ...
    NgrxExceptionsModule
    ]
})
export class AppModule {}

```

* Create your own exceptions

```typescript
import {TechnicalException, FunctionalException} from '@ninthdegree/ngrx-exceptions';

/**
* My technical exception
**/
export class MyTechnicalException extends TechnicalException {

  constructor(message: string, cause?: any){
    super('MyTechnicalException', message, cause);
  }

}

/**
* My functional exception
**/
export class MyFunctionalException extends FunctionalException {

  constructor(message: string, cause?: any){
    super('MyFunctionalException', message, cause);
  }

}
```

* Throw exception

```typescript

import {ExceptionActions} from '@ninthdegree/ngrx-exceptions';
...

this.store.dispatch(ExceptionActions.throwException(new MyTechnicalException('Unexpected technical exception'));
this.store.dispatch(ExceptionActions.throwException(new MyFunctionalException('Known functional exception'));

```

