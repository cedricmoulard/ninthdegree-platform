import {exceptionsQuery} from './exceptions.selectors';
import {createFunctionalException, createTechnicalException} from "../exceptions.const";
import { initialExceptionState } from './exceptions.reducer';

describe('Exceptions Selectors', () => {

  let storeState;

  beforeEach(() => {

    storeState = {
      exceptions: {
        list: [
          createFunctionalException('BadArgumentException', 'Bad Argument'),
          createFunctionalException('NotFoundException', 'Service not found', new Error('error'))
        ],
        lasException: createFunctionalException('NotFoundException', 'Service not found', new Error('error'))
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

    it("hasFunctionalException() should return true", () => {
      const result = exceptionsQuery.hasFunctionalException(storeState);

      expect(result).toBe(true);
    });

    it("hasTechnicalException() should return true", () => {
      const result = exceptionsQuery.hasTechnicalException(storeState);

      expect(result).toBe(false);
    });

    it("hasTechnicalException() should return last exception", () => {
      const result = exceptionsQuery.getLastException(storeState);

      expect(result).toEqual(createFunctionalException(
        'NotFoundException',
        'Service not found',
        new Error('error')));
    });

    it("hasTechnicalException() should return undefined", () => {
      const result = exceptionsQuery.getLastException({exceptions: initialExceptionState});

      expect(result).toBeUndefined();
    });


  });
});
