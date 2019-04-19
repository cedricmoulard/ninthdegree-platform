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


import { myTechnicalException, myFunctionalException } from './custom-exceptions.constant';
import {throwFunctionalException, throwTechnicalException} from "@ne/ngrx-exceptions";
...

throwFunctionalException(myFunctionalException, 'A functional Exception');
throwTechnicalException(myTechnicalException, 'A functional Exception', new Error());

```


