import {ExceptionType} from "./interfaces/throwable.interface";
import {FunctionalException} from "./interfaces/functional.interface";
import {TechnicalException} from "./interfaces/technical.interface";

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
