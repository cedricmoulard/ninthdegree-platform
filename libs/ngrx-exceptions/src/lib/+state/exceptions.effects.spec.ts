import {TestBed} from '@angular/core/testing';

import {Observable} from 'rxjs';

import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {provideMockActions} from '@ngrx/effects/testing';

import {DataPersistence, NxModule} from '@nrwl/nx';
import {hot} from '@nrwl/nx/testing';

import {ExceptionsEffects} from './exceptions.effects';
import * as ExceptionActions from './exceptions.actions';
import {ThrowableException} from "../exceptions/throwable.exception";

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
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(ExceptionsEffects);
  });

  describe('raiseException$', () => {
    it('should work', () => {

    const exception = new ThrowableException('ApplicationException', 'Exception');

      actions = hot('-a-|', {a: ExceptionActions.throwException( {exception})});

      expect(effects.raiseException$).toBeObservable(
        hot('-a-|', {a: ExceptionActions.exceptionThrown({exception})})
      );
    });
  });
});
