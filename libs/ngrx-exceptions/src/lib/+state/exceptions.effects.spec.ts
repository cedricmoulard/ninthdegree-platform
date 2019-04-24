import {TestBed} from '@angular/core/testing';

import {Observable} from 'rxjs';

import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {provideMockActions} from '@ngrx/effects/testing';

import {DataPersistence, NxModule} from '@nrwl/nx';
import {hot} from '@nrwl/nx/testing';

import {ExceptionsEffects} from './exceptions.effects';
import * as ExceptionActions from './exceptions.actions';
import * as ExceptionEvents from './exceptions.events';
import {ThrowableException} from "../interfaces/throwable.interface";
import { ExceptionsService } from '../exceptions.service';

describe('ExceptionsEffects', () => {
  let actions: Observable<any>;
  let effects: ExceptionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        ExceptionsEffects,
        ExceptionsService,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(ExceptionsEffects);
  });

  describe('throwException$', () => {
    it('should work', () => {

      const exception = <ThrowableException>{code: 'ApplicationException', message: 'Exception'};

      actions = hot('-a-|', {a: ExceptionActions.throwException({exception})});

      expect(effects.throwException$).toBeObservable(
        hot('-a-|', {a: ExceptionEvents.exceptionThrown({exception})})
      );
    });
  });

  describe('clearExceptions$', () => {
    it('should work', () => {


      actions = hot('-a-|', {a: ExceptionActions.clearExceptions()});

      expect(effects.clearExceptions$).toBeObservable(
        hot('-a-|', {a: ExceptionEvents.exceptionsCleared()})
      );
    });
  });
});
