import {exceptionsQuery} from './exceptions.selectors';
import {ThrowableException} from "../exceptions/throwable.exception";

describe('Exceptions Selectors', () => {

  let storeState;

  beforeEach(() => {
    const createExceptions = (code: string, message = ''): ThrowableException => new ThrowableException(
      code,
      name || `message-${code}`
    );
    storeState = {
      exceptions: {
        list: [
          createExceptions('PRODUCT-AAA'),
          createExceptions('PRODUCT-BBB'),
          createExceptions('PRODUCT-CCC')
        ]
      }
    };
  });

  describe('Exceptions Selectors', () => {
    it('getAllExceptions() should return the list of Exceptions', () => {
      const results = exceptionsQuery.getAllExceptions(storeState);
      expect(results.length).toBe(3);
    });


    it("hasException() should return true", () => {
      const result = exceptionsQuery.hasException(storeState);

      expect(result).toBe(true);
    });

  });
});
