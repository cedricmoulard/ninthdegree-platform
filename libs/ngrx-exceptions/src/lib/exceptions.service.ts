import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExceptionState } from './+state/exceptions.reducer';

@Injectable()
export class ExceptionsService {

  public static store: Store<ExceptionState> = null;

  constructor(store: Store<ExceptionState>) {
    ExceptionsService.store = store;
  }

}
