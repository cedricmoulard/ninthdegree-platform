import * as ExceptionActions from './exceptions.actions';
import {exceptionReducer, ExceptionState, initialExceptionState} from './exceptionReducer';
import {ThrowableException} from "../exceptions/throwable.exception";

describe('Exceptions Reducer', () => {
  let createExceptions;

  beforeEach(() => {
    createExceptions = (id: string, name = ''): ThrowableException => new ThrowableException(
      id,
      name || `name-${id}`
    );
  });

  describe('valid Exceptions actions ', () => {

    it('should return set the list of known Exceptions', () => {

      const action = ExceptionActions.exceptionThrown(createExceptions('PRODUCT-AAA'),);
      const result: ExceptionState = exceptionReducer(initialExceptionState, action);

      expect(result.list.length).toBe(1);
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = exceptionReducer(initialExceptionState, action);

      expect(result).toBe(initialExceptionState);
    });
  });
});
