---
layout: default
title: Ngrx Exceptions
description: Ngrx Exceptions Module
---

[Home](../)

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

* Create your own exceptions key

```typescript

export const myTechnicalException = 'MyTechnicalException';
export const myFunctionalException = 'MyFunctionalException';

```

* Throw exception

```typescript

import { ExceptionActions, createFunctionalException, createTechnicalException } from '@ninthdegree/ngrx-exceptions';
import { myTechnicalException, myFunctionalException } from './custom-exceptions.constant';
...

this.store.dispatch(ExceptionActions.throwException({exception: createFunctionalException(myTechnicalException, 'Unexpected technical exception')});
this.store.dispatch(ExceptionActions.throwException({exception: createTechnicalException(myFunctionalException, 'Known functional exception')});

```


