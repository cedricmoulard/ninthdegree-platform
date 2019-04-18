import {exceptionsQuery} from './exceptions.selectors';
import {createFunctionalException, createTechnicalException} from "../exceptions.constants";

describe('Exceptions Selectors', () => {

  let storeState;

  beforeEach(() => {

    storeState = {
      exceptions: {
        list: [
          createFunctionalException('BadArgumentException', 'Bad Argument'),
          createTechnicalException('NotFoundException', 'Service not found', new Error('error'))
        ]
      }
    };
  });

  describe('Exceptions Selectors', () => {
    it('getAllExceptions() should return the list of Exceptions', () => {
      const results = exceptionsQuery.getAllExceptions(storeState);
      expect(results.length).toBe(2);
    });


    it("hasException() should return true", () => {
      const result = exceptionsQuery.hasException(storeState);

      expect(result).toBe(true);
    });

  });
});
