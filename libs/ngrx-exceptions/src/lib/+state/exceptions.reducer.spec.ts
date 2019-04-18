import * as ExceptionActions from './exceptions.actions';
import {exceptionsReducer, ExceptionState, initialExceptionState} from './exceptions.reducer';
import {createFunctionalException} from "../exceptions.constants";

describe('Exceptions Reducer', () => {

  describe('valid Exceptions actions ', () => {

    it('should return set the list of known Exceptions', () => {

      const exception = createFunctionalException('BadArgumentException', 'Bad arguments');
      const action = ExceptionActions.exceptionThrown({exception});
      const result: ExceptionState = exceptionsReducer(initialExceptionState, action);

      expect(result.list.length).toBe(1);
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
