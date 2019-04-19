import * as ExceptionEvents from './exceptions.events';
import { exceptionsReducer, ExceptionState, initialExceptionState } from './exceptions.reducer';
import { createFunctionalException } from '../exceptions.const';

describe('Exceptions Reducer', () => {

  describe('valid Exceptions actions ', () => {

    it('should set the list of exceptions', () => {

      const exception = createFunctionalException('BadArgumentException', 'Bad arguments');
      const action = ExceptionEvents.exceptionThrown({ exception });
      const result: ExceptionState = exceptionsReducer(initialExceptionState, action);

      expect(result.list.length).toBe(1);
      expect(result.lasException).toEqual(exception);
    });

    it('should clear the list of exceptions', () => {

      const action = ExceptionEvents.exceptionsCleared();
      const result: ExceptionState = exceptionsReducer({
        list: [
          createFunctionalException('BadArgumentException', 'Bad arguments')
        ]
      }, action);

      expect(result.list.length).toBe(0);
      expect(result.lasException).toBeUndefined();
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = exceptionsReducer(initialExceptionState, action);

      expect(result).toBe(initialExceptionState);
    });
  });
});
