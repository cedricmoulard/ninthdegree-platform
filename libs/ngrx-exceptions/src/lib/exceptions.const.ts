import {ExceptionType} from "./interfaces/throwable.interface";
import {FunctionalException} from "./interfaces/functional.interface";
import {TechnicalException} from "./interfaces/technical.interface";
import {ExceptionsService} from "./exceptions.service";
import * as ExceptionActions from './+state/exceptions.actions'

/**
 * Create a functional Exception
 * @param code unique exception code
 * @param message explicit message
 * @param cause exception cause if known
 */
export const createFunctionalException = (code: string, message: string, cause?: any): FunctionalException => ({
  exceptionType: ExceptionType.FUNCTIONAL,
  code,
  message,
  cause
});

/**
 * Create a technical Exception
 * @param code unique exception code
 * @param message explicit message
 * @param cause exception cause if known
 */
export const createTechnicalException = (code: string, message: string, cause?: any): TechnicalException => ({
  exceptionType: ExceptionType.TECHNICAL,
  code,
  message,
  cause
});


/**
 * Throw a technical exception
 * @param code unique exception code
 * @param message explicit message
 * @param cause exception cause if known
 */
export const throwTechnicalException = (code: string, message: string, cause?: any): void => {

  const exception = createTechnicalException(code, message, cause);

  ExceptionsService.store.dispatch(ExceptionActions.throwException({exception}));

};

/**
 * Throw a functional exception
 * @param code unique exception code
 * @param message explicit message
 * @param cause exception cause if known
 */
export const throwFunctionalException = (code: string, message: string, cause?: any): void => {

  const exception = createFunctionalException(code, message, cause);

  ExceptionsService.store.dispatch(ExceptionActions.throwException({exception}));

};

export const clearExceptions = (): void => {

  ExceptionsService.store.dispatch(ExceptionActions.clearExceptions());

};


