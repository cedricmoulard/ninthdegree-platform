import {ExceptionType, ThrowableException} from "./throwable.interface";

/**
 * Functional exception
 */
export interface FunctionalException extends ThrowableException {

  readonly exceptionType: ExceptionType.FUNCTIONAL

}
